const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "cognine237", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();

module.exports = sequelize;
