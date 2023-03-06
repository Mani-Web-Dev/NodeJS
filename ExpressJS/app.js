const express = require("express");

const morgan = require("morgan")

const app = express();



app.get("/", (req, res) => {

})

const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });


let port = process.env.PORT;
let host = process.env.HOST;



app.use(morgan("tiny"));



app.listen(port, host, (err) => {
    if (err) throw err;
    console.log("Server Started successfully");
})