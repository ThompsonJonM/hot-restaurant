// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = 3000;

// Allows for adding data via POST method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// View Tables
app.get("/tables", function(req, res) {
    res.json();
});