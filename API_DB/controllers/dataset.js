var database = require('./database');
const csv=require('csvtojson');
var geoloc = require('geolocation-utils')

function FixStringsOfArray(jsonObj, indexes) {
	let y = 0;
	let tempArr = [];

	while (y < Object.keys(jsonObj).length) {
		indexes.forEach(index => {
			tempArr = [];
			//case of only one string (not in an array)
			if (jsonObj[y][index] != "" && jsonObj[y][index][0] != '[') {
				tempArr.push(jsonObj[y][index]);
				jsonObj[y][index] = tempArr;
			} else if (jsonObj[y][index] != "") {
				//case of array converted to string - removing errors of conversion
    			tempArr = jsonObj[y][index].split("'");
    			let j = 1;
   				jsonObj[y][index] = [];

   				while (j < tempArr.length) {
   					jsonObj[y][index].push(tempArr[j]);
   					j += 2;
   				}
			}
		})
   		y++;
   	}

	return jsonObj;
}


/*format handled:
00h00–00h00
Fermé
00:00–00:00
*/
function IsOpened(openingHours, hours, minutes) {
	let chrDivider = "h";
	if (openingHours == "" || openingHours == "Fermé")
		return false;
	try {
		if (openingHours.indexOf(":") != -1)
			chrDivider = ":";
		let op_time = {hour: openingHours.split("–")[0].split(chrDivider)[0], minute: openingHours.split("–")[0].split(chrDivider)[1]};
		let cl_time = {hour: openingHours.split("–")[1].split(chrDivider)[0], minute: openingHours.split("–")[1].split(chrDivider)[1]};

		if (hours > op_time.hour && hours < cl_time.hour)
			return true;
		else if (hours == op_time.hour && minutes > op_time.minute)
			return true;
		else if (hours == cl_time.hour && minutes < cl_time.minute)
			return true;
		return false;
	} catch (e){
		console.log("error when fetching opening hours: " + openingHours + " " + e);
		return false
	}
}

function ParseCSV(jsonObj, center, radius, isInside, mood) {
	let i = 0;
	var filteredJSON = {fourfive: [], three: [], onetwo: [], last: []};
	let needInsert = false;

    while (i < Object.keys(jsonObj).length) {
    	needInsert = false;

    	//if we fetch by mood, skip the ones who doesn't have it
    	if (mood != undefined) {
    		jsonObj[i].mood.forEach(e => {
    			if (e == mood)
    				needInsert = true;
    		})
    		if (!needInsert) {
    			i++;
   				continue;
   			}
   		}

		// if we parse by perimeter we see if it's in it
    	if (isInside) {
    		if (geoloc.insideCircle({lat: parseFloat(jsonObj[i].latitude), lon: parseFloat(jsonObj[i].longitude)}, center, radius))
    			needInsert = true;
    		else
    			needInsert = false;
    	}

    	//insert by filtering by categories
    	if (needInsert) {
    		if (jsonObj[i].quote == "")
    			filteredJSON.last.push(jsonObj[i]);
    		else {
    			switch(parseFloat(jsonObj[i].rating)) {
    				case 0:
    				case 1:
    				case 2:
   						filteredJSON.onetwo.push(jsonObj[i])
   						break;
    				case 3:
    					filteredJSON.three.push(jsonObj[i])
    					break;
   					case 4:
   					case 5:
   					default:
    					filteredJSON.fourfive.push(jsonObj[i])
   						break;
   				}
  			}
   		}
   		i++;
   	}
   	return filteredJSON;
}
module.exports = {
	GetShops: function(app, req, res) {
		let link = "./PhantomBuster_dataset/MergeDB.csv"
	    let data = {code: "", message: {}};
	    var {lat, lng, radius, mood} = req.body;
	    let isInside = false;
	    var filteredJSON = {fourfive: [], three: [], onetwo: [], last: []};
	    let center = {lat: 0.00, lon: 0.00};
	    var currentTime = new Date();

	    //checking if optional parameters are here; in this case, we enable the fetching of shops by a perimeter
	    if (lat != undefined && lng != undefined && radius != undefined) {
	    	center.lat = parseFloat(lat);
	    	center.lon = parseFloat(lng);
	    	radius = parseFloat(radius)
	    	isInside = true;
	    }

	    //retrieve db 
		csv()
		.fromFile(link)
		.then((jsonObj) => {
    		data.code = "SUCCESS"
	   		
	   		jsonObj = FixStringsOfArray(jsonObj, ["mood", "imgUrl"]);

	   		while ((filteredJSON.fourfive.length + filteredJSON.three.length + filteredJSON.onetwo.length + filteredJSON.last.length) < 30) {
		   		filteredJSON = ParseCSV(jsonObj, center, radius, isInside, mood)

		   		//if not enough results, search in a wider zone; after 10kms, check if there are any results: if no, throw an error; if yes get out of the while
		   		radius += 100;
		   		if (radius > 10000 && (filteredJSON.fourfive.length + filteredJSON.three.length + filteredJSON.onetwo.length + filteredJSON.last.length) == 0) {
					data.code = "ERROR_WITH_MOOD"
        			data.message = "Error in the name of mood: no results after 10km."
          			res.status(403).send(data)
        			return;
		   		} else {
		   			break;
		   		}
		   	}

    		//shuffle everything
    		filteredJSON.fourfive.sort(() => Math.random() - 0.5);
    		filteredJSON.three.sort(() => Math.random() - 0.5);
    		filteredJSON.onetwo.sort(() => Math.random() - 0.5);
    		filteredJSON.last.sort(() => Math.random() - 0.5);

    		//if parsed by perimeter: submit filtered json
    		if (isInside || mood != undefined)
    			data.message = filteredJSON.fourfive.concat(filteredJSON.three).concat(filteredJSON.onetwo).concat(filteredJSON.last);
    		else
            	data.message = jsonObj;
            res.status(200).send(data)
        	return;

		}).catch(err => {
			console.log(err);
			data.code = "ERROR_RETRIEVING_DB"
        	data.message = err
          	res.status(500).send(data)
        	return;
		})
	}
};