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
        database: "qukw1ewmfh794sw6"  
    });
   
};

connection.connect();

module.exports = connection;