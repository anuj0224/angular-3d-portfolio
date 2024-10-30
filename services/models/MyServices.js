const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class MyServices extends Model {}

MyServices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title_class: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "MyServices",
    tableName: "my_services",
    timestamps: false,
  }
);

module.exports = MyServices;
