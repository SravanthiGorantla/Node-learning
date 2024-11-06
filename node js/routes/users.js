var express = require("express");
const {
  createUser,
  registerUser,
  login,
} = require("../sequelize/controllers/userControler");
const { initModels } = require("../sequelize/model");
const verifytoken = require("../middleware/jwt");
// const { insertUser, deleteUser } = require("../db/queries/users");
var router = express.Router();

/* GET users listing. */
// router.post("/add", async function (req, res) {
//   try {
//     console.log("req bpdy", req.body);
//     await insertUser(req.body);
//     res.send({ status: "200" });
//     // res.send("respond with a resource");
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// router.post("/update", async (req, res) => {
//   await updateUser(req.body);
//   res.status(200).send("userUpdated succesfully");
// });

// router.delete("/delete", async (req, res) => {
//   try {
//     await deleteUser(req.body);
//     res.status(200).send("deleted succesfully");
//   } catch (error) {
//     res.status(error.status).send(error.message);
//     console.log("error", error);
//   }
// });
// async () => {
//   await initModels();
// };

router.post("/add", verifytoken, createUser);
router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
