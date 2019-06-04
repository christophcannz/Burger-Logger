const express = require("express");
const router = express.Router();

const orm = require('../config/orm.js');

router.get("/", function (req, res) {
    orm.selectAll(function (error,burgers){
        if (error) {
            return res.status(501).json({
                message: 'Unable to query DB'
            });
        }    
        console.log('burgers: ', burgers);
        res.render("index", {burgers});
    });
});

module.exports = router;