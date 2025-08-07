"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categorias",
      [
        {
          id: 1,
          titulo: "Node.js",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          titulo: "Java",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          titulo: "Python",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          titulo: "C#",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
