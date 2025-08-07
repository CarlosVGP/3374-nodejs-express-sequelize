"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "matriculas",
      [
        {
          estudante_id: 31,
          curso_id: 5,
          status: "matriculado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          estudante_id: 32,
          curso_id: 6,
          status: "matriculado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          estudante_id: 33,
          curso_id: 7,
          status: "matriculado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          estudante_id: 34,
          curso_id: 8,
          status: "matriculado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("matriculas", null, {});
  },
};
