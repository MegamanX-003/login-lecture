
// https://www.youtube.com/playlist?list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs
// 저자 : 우리밋
// 6편 볼차례~
// https://www.youtube.com/watch?v=AZtyyeCwNoc&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=5
// Express 활용
// https://www.youtube.com/watch?v=mL84PLyKss0&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=7
// 1:57초


"use strict";

// 모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 절대경로 설정
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);  // use -> 미들 웨어를 등록하는 메서드.

module.exports = app;
