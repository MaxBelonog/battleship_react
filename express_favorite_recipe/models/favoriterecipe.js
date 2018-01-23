'use strict';
module.exports = (sequelize, DataTypes) => {
  var favoriteRecipe = sequelize.define('favoriteRecipe', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        favoriteRecipe.hasMany(models.ingredientsRecipe,{
        foreignKey: 'favoriteRecipeId',
        as: 'favoriteRecipes'
      })
      }
    }
  });
  return favoriteRecipe;
};
