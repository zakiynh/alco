'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Assets', 'credit', {
      type: Sequelize.BIGINT,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Assets', 'credit')
  }
};