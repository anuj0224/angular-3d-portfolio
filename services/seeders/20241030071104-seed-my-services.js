"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("my_services", [
      {
        title: "Web Development",
        title_class: "service-icon web-dev",
        description:
          "Building responsive and high-performing websites using modern technologies.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mobile App Development",
        title_class: "service-icon mobile-app",
        description:
          "Creating user-friendly mobile applications for iOS and Android platforms.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "UI/UX Design",
        title_class: "service-icon ui-ux",
        description:
          "Designing intuitive interfaces and enhancing user experiences.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "SEO Optimization",
        title_class: "service-icon seo",
        description:
          "Improving website visibility and search engine rankings through effective SEO strategies.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more entries as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("my_services", null, {});
  },
};
