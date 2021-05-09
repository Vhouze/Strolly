var database = require('./database');
const csv=require('csvtojson');

module.exports = {
	GetCafe: function(app, req, res) {
		let link = "./PhantomBuster_dataset/Clean_DB_final.csv"
	    let data = {code: "", message: {}};
		csv()
		.fromFile(link)
		.then((jsonObj) => {
    		data.code = "SUCCESS"
            data.message = jsonObj;
            res.status(200).send(data)
        	return;

		}).catch(err => {
			console.log(err);
			data.code = "ERROR"
        	data.message = err
          	res.status(500).send(data)
        	return;
		})
	}
};