const express = require("express");

const dotenv = require("dotenv");

const path = require("path");

dotenv.config({ path: "./config.env" })

const port = process.env.PORT;
const host = process.env.HOSTNAME;

const app = express();

const root = path.join(__dirname)

app.use("/", express.static(path.join(__dirname, "views")));


app.use("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})
app.use("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"))
})
app.use("/services", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "services.html"))
})
app.use("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"))
})


app.listen(port, host, (err) => {
    if (err) throw error;
    console.log("Server listening successfully at http://" + host + ":" + port)
})