"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("projects", [
      {
        imgUrl: "assets/project1.jpg",
        title: "Personal Portfolio",
        tech: "HTML, CSS, JavaScript, React",
        description: "A personal portfolio to showcase my work and projects.",
        live_url: "http://example.com/portfolio",
        giturl: "http://github.com/username/portfolio",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imgUrl: "assets/project2.jpg",
        title: "E-commerce Website",
        tech: "Node.js, Express, MongoDB",
        description:
          "A full-stack e-commerce application with user authentication.",
        live_url: "http://example.com/ecommerce",
        giturl: "http://github.com/username/ecommerce",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imgUrl: "assets/project3.jpg",
        title: "Weather App",
        tech: "HTML, CSS, JavaScript, API",
        description:
          "A simple weather application that fetches data from a weather API.",
        live_url: "http://example.com/weather-app",
        giturl: "http://github.com/username/weather-app",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imgUrl: "assets/project4.jpg",
        title: "Blog Platform",
        tech: "Python, Flask, SQLAlchemy",
        description:
          "A blog platform where users can create and manage their posts.",
        live_url: "http://example.com/blog",
        giturl: "http://github.com/username/blog",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imgUrl: "assets/project5.jpg",
        title: "Task Manager",
        tech: "Java, Spring Boot",
        description:
          "A task management application to organize and prioritize tasks.",
        live_url: "http://example.com/task-manager",
        giturl: "http://github.com/username/task-manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more entries as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("projects", null, {});
  },
};
