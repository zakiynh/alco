'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Projects', 'offer_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Offers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Projects', 'offer_id')
  }
};
