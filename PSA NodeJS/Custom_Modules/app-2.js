const http = require("http");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });


const port = process.env.PORT;
const host = process.env.HOSTNAME;

const server = http.createServer((req, res) => {
    res.end("dotenv example completed")
})


server.listen(port, host, (err) => {
    if (err) throw err;
    console.log("Server Running Successfully " + host)
})