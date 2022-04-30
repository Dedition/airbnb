'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      city: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      state: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      country: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('spots');
  }
};
