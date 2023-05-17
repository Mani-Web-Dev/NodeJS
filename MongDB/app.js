const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, resp) => {
    resp.send("Mongo DB connection test");
})

const url = "mongodb://127.0.0.1:27017/employees";

mongoose.connect(url, {}).then((response) => {
    console.log("Mongo DB connection successful", response);
}).catch((error) => {
    throw error
})

app.listen(8080, "127.0.0.1", (error) => {
    if (error) throw error;
    console.log("Server listening at port number 8080")
})