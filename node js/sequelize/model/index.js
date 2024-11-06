const sequelize = require("..");
const Message = require("./message");
const User = require("./user");

const initModels = async () => {
  try {
    console.log("inside the local");
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.log("errror,", error);
  }
};

module.exports = { initModels, User, Message };
