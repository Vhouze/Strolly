// main.js
// Defines main part of this app, including router logic.

const express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var http = require('http');
var localIpV4Address = require("local-ipv4-address");
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.listen(8082, function() {
    console.log('server listening on 8082');
});
