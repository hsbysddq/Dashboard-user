'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', { 
      id:{ 
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
          },
      name:{
          type: Sequelize.STRING,
          allowNull: false
            },
      author:{
          type: Sequelize.STRING,
          allowNull: false
            },
      category:{
          type: Sequelize.STRING,
          allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};
