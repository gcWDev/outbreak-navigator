var mysql = require("mysql2");

var pool = mysql
    .createPool({
        connectionLimit: 10,
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.NAME,
    })
    .promise();

pool.getConnection()
    .then((conn) => {
        console.log("Connected to the MySQL server successfully!");
        return conn.ping();
    })
    .then(() => {
        console.log("MySQL server is responding to ping.");
    })
    .catch((err) => {
        console.error("Unable to connect to the MySQL server:", err);
    });

module.exports = { pool };
