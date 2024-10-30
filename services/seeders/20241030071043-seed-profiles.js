"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("profile", [
      {
        name: "Anuj Mourya",
        imgUrl: "assets/photo.jpg",
        title: "Web Developer",
        description: "description",
        social_media: JSON.stringify([
          {
            facebook: {
              class: "bx bxl-facebook",
              link: "http://facebook.com/username",
            },
          },
          {
            twitter: {
              class: "bx bxl-twitter",
              link: "http://twitter.com/username",
            },
          },
          {
            instagram: {
              class: "bx bxl-instagram",
              link: "http://instagram.com/username",
            },
          },
          {
            linkdin: {
              class: "bx bxl-linkedin-square",
              link: "http://linkedin.com/username",
            },
          },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profile", null, {});
  },
};
