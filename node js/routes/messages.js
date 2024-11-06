// const verifytoken = require("../middleware/jwt");
const express = require("express");
var router = express.Router();

const {
  createMessage,
  getMessages,
} = require("../sequelize/controllers/messageControler");

router.post("/add", createMessage);
router.get("/get", getMessages);

module.exports=router