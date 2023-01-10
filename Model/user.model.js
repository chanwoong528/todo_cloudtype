module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        user_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING,
        },
    });

    return user
};