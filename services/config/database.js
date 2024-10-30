const { Sequelize } = require("sequelize");
const config = require("./config.json");

const sequelize = new Sequelize("portfolio", "root", null, {
  host: config.host,
  dialect: "mysql",
  logging: false,
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

module.exports = sequelize;
