'use strict';
const express = require('express');
const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = {
	GenerateToken: function (id, tokenType) {
  		return jwt.sign({user: id, type: tokenType}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
	},

	VerifyToken: function (id, token) {
		return jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
    		if (err || decoded.user != id) {
    			return {success: false};
    		}
    		return {success: true, type: decoded.type};
  		});
	}
}