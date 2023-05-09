const express = require("express");

const router = express.Router();

router.get("/", (req, resp) => {
    resp.send("All Products");
});
router.get("/add", (req, resp) => {
    resp.send("Add Products");
});
router.get("/update", (req, resp) => {
    resp.send("Update Products");
});
router.get("/delete", (req, resp) => {
    resp.send("Delete Products");
});

module.exports = router;
