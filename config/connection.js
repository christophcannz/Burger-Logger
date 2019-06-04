const mysql = require("mysql");


let connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: "root",
    password: "root",
    database: "burger_logger_db"
});

connection.connect();

module.exports = connection;