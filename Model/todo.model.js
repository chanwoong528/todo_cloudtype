module.exports = (sequelize, Sequelize) => {
    const todo = sequelize.define("todo", {
        todo_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        author_id: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.BOOLEAN
        },
        content: {
            type: Sequelize.STRING
        },

    });

    return todo
};