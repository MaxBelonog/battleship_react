'use strict';
module.exports = function(sequelize, DataTypes) {
 var Ingredients = sequelize.define('Ingredients', {
   name: DataTypes.STRING,
   isComplete: DataTypes.BOOLEAN
 }, {
   classMethods: {
     associate: function(models) {
       Ingredients.belongsTo(models.RecipeList,{
         foreignKey: 'recipelistId',
         onDelete: 'CASCADE'
       })
     }
   }
 });
 return Ingredients;
};
