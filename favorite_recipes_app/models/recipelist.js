'use strict';
module.exports = function(sequelize, DataTypes) {
  var TodoList = sequelize.define('RecipeList', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        RecipeList.hasMany(models.Ingredients,{
          foreignKey: 'recipelistId',
          as: 'ingredients'
        })
      }
    }
  });
  return RecipeList;
};
