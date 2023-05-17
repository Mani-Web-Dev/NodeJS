import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes";



const app = express();

app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.listen(port, () => {
    console.log(`Server listening at ${port} successfully!`);
})


// routes to be created

// - ** POST /api/users** - register a user
// - ** POST /api/users/auth** - Authenticate a use and get a token
// - ** POST /api/users/logout** - logout user and clear cookie
// - ** GET /api/users/profile** - Get user profile
// -** PUT /api/users/profilr** - update profile

