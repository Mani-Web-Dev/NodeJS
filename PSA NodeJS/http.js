const http = require("http");
let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
});

server.listen(8080, (err) => {
    if (err) throw err;
    console.log("Server Sunning successfully");
})


