const connection = require("./connection.js");

const orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM burger_menu", function (err, data){
            if (err) {
                return cb(err, null);
            }
            cb(null,data);
        });
    },
    selectAllby: function(condition, value, cb){
        const sqlQuery = `SELECT * FROM burger_menu WHERE ${condition} = ${value}`;
        connection.query(sqlQuery, function (err, data){
            if (err) {
                cb(err, null);
            } 
            cb(null, data)
        });
    },
    insertOne: function (burgerName, cb){
        const sqlQuery = `INSERT INTO burger_menu(burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, function (err, data){
            if (err){
                cb(err, null);
            } 
            cb(null, data);
        });
    },

    updateOne: function (condition, id, cb){
        const sqlQuery = `UPDATE burger_menu SET is_favorite = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err,data){
            if (err) {
               cb(err, null); 
            } 
            cb(null, data)
        });
    },
    deleteOne: function(id, cb){
        const sqlQuery = `DELETE FROM burger_menu WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data){
            if (err){
                cb(err, null);
            } 
            cb(null, data)
        });
    }
};

module.exports = orm;