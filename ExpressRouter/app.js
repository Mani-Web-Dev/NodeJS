const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, resp) => {
    resp.send("Root / Index Page");
});


app.use("/user", userRouter);
app.use("/products", productRouter)


app.listen(8080, (err) => {
    if (err) throw err;
    console.log("Server listening at port no:127.0.0.1:8080");
});