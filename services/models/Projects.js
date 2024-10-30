const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Projects extends Model {}

Projects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tech: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    live_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    giturl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Projects",
    tableName: "projects",
    timestamps: false,
  }
);

module.exports = Projects;
