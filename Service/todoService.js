const db = require("../Model");
const Todo = db.todo;
const User = db.user;
const Op = db.Sequelize.Op;

exports.findAllTodoByUserId = (req, res) => {


    if (!req.body.user_id) {
        return res.status(400).send({
            message: "User Does not Exist!"
        })
    }
    const userId = req.body.user_id;
    User.findOne({ where: { user_id: userId } }).then((user) => {
        if (!user) {
            return res.status(400).send({
                message: "User Does not Exist!"
            })
        } else {
            Todo.findAll({ where: { author_id: userId } }).then((todos) => {
                return res.send({ todos: todos })
            })
        }
    })
}
exports.createTodo = (req, res) => {
    const userId = req.body.user_id;
    User.findOne({ where: { user_id: userId } }).then((user) => {
        if (!user) {
            return res.status(400).send({
                message: "User Does not Exist!"
            })
        } else {
            const todo = {
                author_id: userId,
                status: false,
                content: req.body.content,
            };
            Todo.create(todo).then((todo) => {
                return res.send({ todo: todo })
            }).catch((err) => {
                return res.status(500).send({
                    message: err.message || "Some error occurred while creating the todo.",
                });
            })
        }
    })

}