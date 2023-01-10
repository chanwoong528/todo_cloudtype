const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'svc.gksl2.cloudtype.app',
    database: 'postgres',
    password: '1234',
    port: 31835,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})


module.exports = { pool }; 
