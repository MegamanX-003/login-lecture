"use strict";

const { error } = require("console");

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        // console.log(userInfo);
        return userInfo;        
    }

    // Input Param. 이 몇개가 넘어올지 모르므로 ...fields
    static getUsers(...fields) {
        // const users = this.#users;

       // field가 반복 변수
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
                return this.#getUserInfo(data, id) ;    
            })
          .catch(console.error);
    }

    static save(userInfo) {
        //  const users = this.#users;
         users.id.push(userInfo.id);
         users.name.push(userInfo.name);
         users.psword.push(userInfo.psword);
         console.log(users);
    }
};

module.exports = UserStorage;