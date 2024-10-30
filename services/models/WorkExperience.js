const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class WorkExperience extends Model {}

WorkExperience.init(
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
    job_place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "WorkExperience",
    tableName: "work_experience",
    timestamps: false,
  }
);

module.exports = WorkExperience;
