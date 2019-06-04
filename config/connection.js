const mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: process.env.PORT || 3306,
        user: "root",
        password: "root",
        database: "burger_logger_db"  
    });
   
};

connection.connect();

module.exports = connection;