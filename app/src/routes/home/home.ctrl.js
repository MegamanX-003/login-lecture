"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }, 

    register: (req, res) => {
        res.render("home/register");
    }, 
};

//--------------------------------------------------------------

const process = {
    login: async (req, res) => {
        const users = new User(req.body);
        const response = await users.login();
        // console.log(response);
        return res.json(response);
    },

    register: async (req, res) => {
        const users = new User(req.body);
        const response = await users.register();
        // console.log(response);
        return res.json(response);       
    },
};

// key : value 개념
module.exports = {
    output,
    process,
};
