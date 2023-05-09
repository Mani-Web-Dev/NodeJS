
const express = require("express");

const router = express.Router();


router.get("/", (req, resp) => {
    resp.send("User Page / Index Page");
});


router.get("/all", (req, resp) => {
    resp.send("User Page / All Users")
})

router.get("/add", (req, resp) => {
    resp.send("User Page - Add User")
})

router.get("/delete", (req, resp) => {
    resp.send("User Page - delete user")
})


module.exports = router;