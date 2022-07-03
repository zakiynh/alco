'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Assets', 'debet', {
      type: Sequelize.BIGINT,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Assets', 'debet')
  }
};