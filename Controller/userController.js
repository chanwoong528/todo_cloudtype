const express = require("express");
const { createUser } = require("../Service/userService");


const router = new express.Router();


router.post("/", async (req, res) => {
    createUser(req, res);
})





module.exports = router;