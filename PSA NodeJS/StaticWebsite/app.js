

const http = require("http")
const path = require("path")
const fs = require("fs")


let server = http.createServer((req, res) => {

    const url = req.url;

    if (url === "/" || url === "/home") {
        fs.readFile(path.join(__dirname, "views", "index.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
    if (url === "/about") {
        fs.readFile(path.join(__dirname, "views", "about.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    }
    if (url === "/services") {
        fs.readFile(path.join(__dirname, "views", "services.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    }
    if (url === "/contact") {
        fs.readFile(path.join(__dirname, "views", "contact.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    }
})

server.listen(8081, (err) => {
    if (err) throw err;
    console.log("Server running successfully");
})
