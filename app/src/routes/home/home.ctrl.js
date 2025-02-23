"use strict";

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
          psword = req.body.psword;

        // console.log(UserStorage.getUsers("id", "psword", "name"));
        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        //console.log(id, psword);
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword ) {
                response.success = true ;
                return res.json(response);
            }
        }

        response.success = false ;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);
    },
};

// key : value 개념
module.exports = {
    output,
    process,
};