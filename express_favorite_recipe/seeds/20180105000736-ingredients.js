'use strict';

let favoriteRecipe = require('../models').favoriteRecipe

module.exports = {
  up: function (queryInterface, Sequelize) {
    return favoriteRecipe.findAll().then(function(lists){ // returns a promise
      let ingredientsRecipesPromises = lists.map(function(list){
        return queryInterface.bulkInsert('ingredients',
        [
          {
            name: 'task 1',
            isComplete: false,
            todoListId: list.get('id'),
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'task 2',
            isComplete: false,
            todoListId: list.get('id'),
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ])
      })
      return Promise.all(ingredientsRecipesPromises)
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ingredients', null, {})
  }
};
