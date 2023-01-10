const db = require("../Model");
const User = db.user;
const Op = db.Sequelize.Op;

exports.createUser = (req, res) => {
    if (!req.body.email) {
        return res.status(400).send({
            message: "Email can not be empty!",
        });
    }
    const user = {
        email: req.body.email
    }
    User.findOne({ where: { email: user.email } }).then((userData) => {
        if (userData) {
            return res.status(400).send({
                message: "User exist!",
            });
        } else {
            User.create(user)
                .then((userData) => {
                    return res.send(userData);
                });
        }
    })

}



// exports.createTodo = (req, res) => {
//     if (!req.body.content) {
//         res.status(400).send({
//             message: "Content can not be empty!",
//         });
//         return;
//     }

//     const todo = {
//         author_id: req.body.author_id,
//         status: false,
//         content: req.body.content,
//         created_date: new Date(),
//         updated_date: new Date()
//     };

//     Todo.create(todo)
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the tutorial.",
//             });
//         });
// };