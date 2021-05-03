const express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
var cookieParser = require('cookie-parser');
var https = require('https')
const app = express();

var loginController = require("./controllers/login")
var registerController = require("./controllers/register")
var tokenController = require("./controllers/token")

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

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(8082, function() {
    console.log('server listening on 8082');
});
