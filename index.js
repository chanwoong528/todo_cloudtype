const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { pool } = require("./Config/postgreSQL");

const userController = require("./Controller/userController")
const todoController = require("./Controller/todoController")


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: [
            "https://moontododemo.netlify.app",
            "http://localhost:3000",
        ],
        credentials: true,
        methods: ["HEAD", "POST", "PUT", "GET", "PATCH", "DELETE"],
    })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

// ** Controllers
app.use("/user", userController)
app.use("/todo", todoController)
// ** Controllers

app.get("/", (req, res) => {

    res.status(200).send({ data: "hello" })
})


const db = require("./Model")
db.sequelize.sync()

//Server Up
app.listen(PORT, (err) => {
    if (err) {
        console.log(`Unable to run Server on ${PORT}=> ${err}`);
    } else {
        console.log(`Server Up: ${PORT}`);
    }
});
