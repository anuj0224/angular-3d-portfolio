"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("work_experience", [
      {
        title: "Frontend Developer",
        job_place: "XYZ Company",
        period: "June 2020 - Present",
        description:
          "Developing user-friendly interfaces and ensuring high performance on mobile and desktop applications.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Web Developer Intern",
        job_place: "ABC Corp",
        period: "January 2020 - May 2020",
        description:
          "Assisted in developing web applications and gained experience in full-stack development.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("work_experience", null, {});
  },
};
