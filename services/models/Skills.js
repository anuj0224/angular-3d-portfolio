const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Skills extends Model {}

Skills.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title_class: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Skills",
    tableName: "skills",
    timestamps: false,
  }
);

module.exports = Skills;
