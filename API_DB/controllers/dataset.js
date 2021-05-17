var database = require('./database');
const csv=require('csvtojson');
var geoloc = require('geolocation-utils')

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
		let link = "./PhantomBuster_dataset/Clean_DB_final.csv"
	    let data = {code: "", message: {}};
	    var {lat, lng, radius, mood} = req.body;
	    let isInside = false;
	    var filteredJSON = {fourfive: [], three: [], onetwo: [], last: []};
	    let center = {lat: 0.00, lon: 0.00};

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
	   		
	   		let y = 0;
	   		while (y < Object.keys(jsonObj).length) {
	   			if (jsonObj[y].mood != "") {
    				//removing errors of conversion
    				let tempArr = jsonObj[y].mood.split("'");
    				let j = 1;
    				jsonObj[y].mood = [];

    				while (j < tempArr.length) {
    					jsonObj[y].mood.push(tempArr[j]);
    					j += 2;
    				}
    			}
    			y++;
	   		}

	   		while ((filteredJSON.fourfive.length + filteredJSON.three.length + filteredJSON.onetwo.length + filteredJSON.last.length) < 30) {
		   		filteredJSON = ParseCSV(jsonObj, center, radius, isInside, mood)

		   		//if not enough results, search in a wider zone
		   		radius += 100;
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