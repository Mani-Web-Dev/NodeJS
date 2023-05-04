const http = require("http");
const fs = require("fs");
const path = require("path");

var server = http.createServer((req, res) => {

}).listen(8080, (err) => {
    if (err) throw err;
    console.log("Server running successfully");
});

