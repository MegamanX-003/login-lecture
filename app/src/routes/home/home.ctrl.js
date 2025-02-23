"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }, 
};

//--------------------------------------------------------------

const process = {
    login: (req, res) => {
        const users = new User(req.body);
        const response = users.login();
        console.log(response);
        return res.json(response);
    },
};

// key : value 개념
module.exports = {
    output,
    process,
};
