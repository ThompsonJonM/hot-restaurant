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

// Index
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// View Tables
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname + "/tables.html"));
    console.log(__dirname);
});

// View Reservations
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname + "/reservations.html"));
});

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`)
});