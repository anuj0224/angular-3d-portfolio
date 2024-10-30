const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class ContactMe extends Model {}

ContactMe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sender_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sender_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sending_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "ContactMe",
    tableName: "contact_me",
    timestamps: false,
  }
);

module.exports = ContactMe;
