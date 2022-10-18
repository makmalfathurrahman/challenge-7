const express = require("express");
const route = require("express").Router();
const { Dashboard, Login, Register } = require("../controller/index");

route.get("/", Dashboard.getDashboard);

route.get("/login", Login.getLogin);
route.post("/login", Login.Login);

route.get("/user/register", Register.getRegister);
route.post("/login", Register.Register);

route.use("/", Dashboard.errorStatus);

module.exports = route;
