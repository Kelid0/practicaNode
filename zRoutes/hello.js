const express = require("express");
const HelloController = require("../zControllers/hello.js");


const api = express.Router();


api.get("/hello",HelloController.getHello);

module.exports = api;