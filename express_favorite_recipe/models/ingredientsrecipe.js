'use strict';
module.exports = (sequelize, DataTypes) => {
  var ingredientsRecipe = sequelize.define('ingredientsRecipe', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ingredientsRecipe.belongsTo(models.favoriteRecipe,{
           foreignKey: 'favoriteRecipeId',
           onDelete: 'CASCADE'
         })
      }
    }
  });
  return ingredientsRecipe;
};
