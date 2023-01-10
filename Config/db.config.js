module.exports = {
    HOST: "svc.gksl2.cloudtype.app",
    USER: "root",
    PASSWORD: "1234",
    PORT: "31835",
    DB: "postgres",
    dialect: "postgres",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

