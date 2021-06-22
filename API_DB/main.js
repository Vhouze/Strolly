const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();

var loginController = require("./controllers/login")
var registerController = require("./controllers/register")
var tokenController = require("./controllers/token")
var datasetController = require("./controllers/dataset")

const PORT = 3001;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Strolly API')
})

app.post('/login', function(req, res) {
    loginController.PostLogin(app, req, res);
});

app.post('/register', function(req, res) {
    registerController.PostRegister(app, req, res);
});

app.post('/refreshToken', function(req, res) {
    tokenController.GenerateRefreshToken(app, req, res);
});

app.post('/GetShops', function(req, res) {
    datasetController.GetShops(app, req, res);
});


app.listen(process.env.PORT || PORT , function() {
    console.log(`server listening on ${PORT}`);
});
