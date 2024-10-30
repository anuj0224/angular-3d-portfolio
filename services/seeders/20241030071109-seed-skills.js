"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("skills", [
      {
        type: "Programming Languages",
        title: "JavaScript",
        title_class: "skill-icon js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Programming Languages",
        title: "Python",
        title_class: "skill-icon python",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Frameworks",
        title: "React",
        title_class: "skill-icon react",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Frameworks",
        title: "Node.js",
        title_class: "skill-icon node",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Databases",
        title: "MySQL",
        title_class: "skill-icon mysql",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Tools",
        title: "Git",
        title_class: "skill-icon git",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more entries as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("skills", null, {});
  },
};
