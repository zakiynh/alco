'use strict';
const data = require('../data/neraca.json')

module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Assets', data, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Assets', null, {})
  }
};