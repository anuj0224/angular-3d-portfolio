"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("profile", "social_media", {
      type: Sequelize.JSON,
      allowNull: true,
    });

    await queryInterface.addColumn("profile", "title", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("profile", "social_media");
  },
};
