const mysql = require("mysql");


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_logger_db"
});

connection.connect();

module.exports = connection;