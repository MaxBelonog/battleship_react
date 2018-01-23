'use strict';

let RecipeList = require('../models').RecipeList

module.exports = {
  up: function (queryInterface, Sequelize) {
    return RecipeList.findAll().then(function(lists){ // returns a promise
      let ingredientsPromises = lists.map(function(list){
        return queryInterface.bulkInsert('Ingredients',
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
      return Promise.all(ingredientsPromises)
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ingredients', null, {})
  }
};
