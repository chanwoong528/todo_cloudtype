const express = require("express");
const { createTodo, findAllTodoByUserId } = require("../Service/todoService");


const router = new express.Router();

router.get("/", async (req, res) => {

    findAllTodoByUserId(req, res)
})
router.post("/new", async (req, res) => {
    createTodo(req, res);
})




module.exports = router;