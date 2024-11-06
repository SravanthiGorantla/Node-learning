const { where } = require("sequelize");
const { User } = require("../model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const createUser = async (req, res) => {
  console.log(req.body);
  //   const { firstName, secondName } = req.body;

  try {
    const user = User.create(req.body);

    res.status(200).json(user);
  } catch (error) {
    console.log("error", error);
    res.status(error.status).send(error);
  }
};

const registerUser = async (req, res) => {
  console.log("req,body", req.body);
  // req.body.password = bcrypt(req.body.password);
  const payload = req.body;
  const saltRounds = 10;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    payload.password = hashedPassword;
    const userExists = await User.findOne({ where: { email: req.body.email } });
    console.log("user", userExists);
    if (userExists) {
      return res.status(400).send("Email already exists");
    }
    const user = await User.create(payload);
    console.log("user", user);
    return res.status(200).send("registered succesffully");
  } catch (error) {
    console.log("error", error);

    return res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  const payload = req.body;
  try {
    const validUser = User.findOne({ where: { email: payload.email } });
    if (!validUser) {
      console.log("valida user");
      return res.status(400).send("email not exists");
    }

    const validPassword = bcrypt.compare(payload.password, validUser.password);
    if (!validPassword) {
      return res.status(400).send("not a valid password");
    }

    const token = await jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    console.log(" access token", token);
    const updatedUser = await User.update(
      { accessToken: token },
      { where: { email: payload.email } }
    );
    console.log("access toke updated successfully", updatedUser);
    res.status(200).send({
      ...validUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(error.status).send(error.message);
  }
};

const getUser = async (req, res) => {
  console.log("req,", req.body);
  const { email } = req.body;
  try {
    const user = User.findOne({ where: { email: email } });
    return res.status(200).send(user);
  } catch (error) {
    console.log("error", error);
    return res.status(error.status).send(error.message);
  }
};
module.exports = { createUser, registerUser, login, getUser };
