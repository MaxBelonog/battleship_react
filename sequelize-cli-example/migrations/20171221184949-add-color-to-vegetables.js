'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
    'Vegetables',
    'color',
    Sequelize.STRING,
  )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
     'Vegetables',
     'color'
   )
  }
};
