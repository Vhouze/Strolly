var database = require('./database');
var jwt = require('./jwt');

module.exports = {
	GenerateRefreshToken(app, req, res) {
		let data = {code: "", message: {}};
		let {sessionId, refreshToken} = req.body;

		//check parameters
		if (sessionId === undefined || refreshToken === undefined) {
			data.code = "ERROR_PARAMS";
 			data.message = "Error with parameters";
   		res.status(403).send(data);
   		return;
  	}

    //check token
    if (!jwt.VerifyToken(sessionId, refreshToken).success) {
  		data.code = "ERROR_TOKEN";
 		  data.message = "Token is not valid";
 			res.status(401).send(data);
      return;
    }

    //create and send new token
  	let newToken = jwt.GenerateToken(sessionId, "REFRESH_TOKEN");
  	data.code = "SUCCESS";
  	data.message = {token: newToken, id: sessionId};
  	res.status(200).send(data);
  }
};