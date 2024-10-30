"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("education", [
      {
        title: "Bachelor of Science in Computer Science",
        college_name: "University of Technology",
        period: "2016 - 2020",
        description:
          "Focused on software development, algorithms, and database systems.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "High School Diploma",
        college_name: "City High School",
        period: "2012 - 2016",
        description: "Graduated with honors in Mathematics and Science.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Master's in Web Development",
        college_name: "Tech University",
        period: "2021 - 2023",
        description:
          "Specialized in modern web technologies and full-stack development.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more entries as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("education", null, {});
  },
};
