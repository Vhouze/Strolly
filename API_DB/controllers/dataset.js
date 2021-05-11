var database = require('./database');
const csv=require('csvtojson');
var geoloc = require('geolocation-utils')

module.exports = {
	GetShops: function(app, req, res) {
		let link = "./PhantomBuster_dataset/Clean_DB_final.csv"
	    let data = {code: "", message: {}};
	    var {lat, lng, radius, mood} = req.body;
	    let i = 0;
	    let isInside = false;
	    let center = {lat: 0.00, lon: 0.00};
	    var filteredJSON = {};
	    let filteredJSONIndex = 0;
	    let needInsert = false;

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

    		//Parsing the json
    		while (i < Object.keys(jsonObj).length) {
    			needInsert = false;
    			if (jsonObj[i].mood != "") {
    				//removing errors of conversion
    				jsonObj[i].mood = jsonObj[i].mood.split("'")[1];
    			}

    			//if we fetch by mood, skip the ones who doesn't have it
    			if (mood != undefined) {
    				if (jsonObj[i].mood != mood) {
    					i++;
    					continue;
    				}
    				else
    					needInsert = true;
    			}

    			// if we parse by perimeter we see if it's in it
    			if (isInside) {
    				if (geoloc.insideCircle({lat: parseFloat(jsonObj[i].latitude), lon: parseFloat(jsonObj[i].longitude)}, center, radius))
    					needInsert = true;
    				else
    					needInsert = false;
    			}

    			if (needInsert) {
    				filteredJSON[filteredJSONIndex] = jsonObj[i];
    				filteredJSONIndex++;
    			}
    			i++;
    		}

    		//if parsed by perimeter: submit filtered json
    		if (isInside || mood != undefined)
    			data.message = filteredJSON;
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