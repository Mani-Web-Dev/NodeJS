const http = require("http");
const path = require("path");
const fs = require("fs");


const server = http.createServer((req, res) => {
    res.end("This is my first backend page");
})

server.listen(8080, "127.0.0.1", (error) => {
    if (error) throw error;
    console.log("Server running successfully");
})