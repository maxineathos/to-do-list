'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        title: 'Set up project structure',
        description: 'Create initial folder structure with Express, routes, and controllers.',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Implement task creation route',
        description: 'Add POST /tasks endpoint with validation and error handling.',
        status: 'in_progress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Design database schema',
        description: 'Define models and relationships for tasks and users.',
        status: 'to_do',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
