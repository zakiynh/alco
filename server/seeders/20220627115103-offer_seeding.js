'use strict';
const data = require('../data/offerTable.json')

module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Offers', data, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Offers', null, {})
  }
};