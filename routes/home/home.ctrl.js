"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

// key : value 개념
module.exports = {
    home,
    login,
};