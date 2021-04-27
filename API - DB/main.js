const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();

var loginController = require("./controllers/login")

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Strolly API')
})

app.post('/login', function(req, res) {
    loginController.PostLogin(app, req, res);
});

app.listen(8082, function() {
    console.log('server listening on 8082');
});
