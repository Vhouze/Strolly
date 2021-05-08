var database = require('./database');
const bcrypt = require('bcrypt');
var jwt = require('./jwt')

module.exports = {
    PostLogin: function (app, req, res) {
        var { pseudo, password} = req.body;
        let data = {code: "", message: {}};

        //check parameters
        if (pseudo === undefined || password === undefined) {
            data.code = "ERROR_PARAMS";
            data.message = "Error with parameters"
            res.status(403).send(data)
            return;
        }

        //get user and check password w/ bcrypt
        database.sqlQueryOptions("SELECT * FROM users WHERE ?", [{pseudo: pseudo}], true).then(result => {
            bcrypt.compare(password, result[0].password, function(cmperr, cmpres) {
                if (cmpres) {
                    //generate token
                    let token = jwt.GenerateToken(result[0].id, "REFRESH_TOKEN");
                    data.code = "SUCCESS"
                    data.message = {token: token, id: result[0].id}
                    res.status(200).send(data)
                    return;
                } else {
                    data.code = "ERROR_PASSWORD";
                    data.message = "Can't verify password"
                    res.status(401).send(data);
                    return;
                }
            });
        }).catch(err => {
            data.code = "ERROR_GETTING_USER";
            data.message = err;
            res.status(500).send(data);
            return;
        })
    }
};
