var database = require('./database');
const bcrypt = require('bcrypt');

module.exports = {
    PostRegister: function (app, req, res) {
        var { pseudo, password} = req.body;
        let data = {code: "", message: {}};

        //check parameters
		
        if (pseudo === undefined || password === undefined) {
            data.code = "ERROR_PARAMS";
            data.message = "Error with parameters"
            res.status(403).send(data)
            return;
        }

        //encode password
        bcrypt.hash(password, 10, function(err, hash) {
      		if (err) {
      			data.code = "ERROR_BCRYPT"
      			data.message = "Error with password"
            	res.status(403).send(data);
            	return;
    		}
    		//insert in db
    		database.sqlQueryOptions("INSERT INTO users(pseudo, password) VALUES (?, ?)", [pseudo, hash]).then(result => {
    			data.code = "SUCCESS"
      			data.message = "User created"
           		res.status(200).send(data);
           		return;
    		}).catch(err => {
	    		data.code = "ERROR_CREATION"
    	  		data.message = err
        	   	res.status(403).send(data);
           		return;
    		})
    	});
    }
}