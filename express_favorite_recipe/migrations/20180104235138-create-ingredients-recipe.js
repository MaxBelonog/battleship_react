'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredientsRecipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      favoriteRecipeId:{                   // <- This is the new attribute
       type: Sequelize.INTEGER,
       onDelete: 'CASCADE',
       references: {
         model: 'favoriteRecipe',
         key: 'id',
         as: 'favoriteRecipeId'
       }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingredientsRecipes');
  }
};
