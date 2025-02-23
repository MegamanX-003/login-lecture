"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

//--------------------------------------------------------------
const users = {
    id: ["brian"],
    psword: ["1234"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
          psword = req.body.psword;

        //console.log(id, psword);
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword ) {
                console.log("id pw 일치");
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "Login Fail",
        });
    },
};

// key : value 개념
module.exports = {
    output,
    process,
};