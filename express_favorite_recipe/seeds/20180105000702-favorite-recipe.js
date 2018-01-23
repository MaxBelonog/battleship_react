'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('favoriteRecipes',
    [
      {
        name: 'Mexican recipe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pot roast',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('favoriteRecipes', null, {})
  }
};
