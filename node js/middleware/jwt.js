const { verify } = require("jsonwebtoken");

const dotenv = require("dotenv").config();

function verifytoken(req, res, next) {
  console.log("req, res", req);
  try {
    const token = req.headers["authorization"];
    if (token) {
      const decode = verify(token, process.env.JWT_SECRET);
      console.log("decodedecoded data", decode);
      next();
    } else {
      return res.status(403).json({ error: "unauthorised" });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(403).json({ error: error });
  }
}

module.exports = verifytoken;
