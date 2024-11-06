const { DataTypes, Model } = require("sequelize");
const sequelize = require("..");
const User = require("./user");

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CreatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  senderId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  receiverId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

Message.belongsTo(User, { foreignKey: "senderId" });
User.hasMany(Message, { foreignKey: "senderId" });

module.exports = Message;
