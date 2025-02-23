"use strict";

class UserStorage {
    // static 으로 선언해야 외부에서 접근가능
    // But #을 붙이면 은닉화
     static #users = {
        id: ["brian", "megamanx"],
        psword: ["1234", "1234"],
        name: ["김유신", "강감찬"],
    };

    // Input Param. 이 몇개가 넘어올지 모르므로 ...fields
    static getUsers(...fields) {
        const users = this.#users;

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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
         const users = this.#users;
         users.id.push(userInfo.id);
         users.name.push(userInfo.name);
         users.psword.push(userInfo.psword);
         console.log(users);
    }
};

module.exports = UserStorage;