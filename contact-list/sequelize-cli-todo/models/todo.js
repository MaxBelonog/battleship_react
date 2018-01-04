'use strict';
module.exports = (sequelize, DataTypes) => {
  var todo = sequelize.define('todo', {
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
        // associations can be defined here
        associate: function(models) {
          Todo.belongsTo(models.Person, {foreignKey: 'personId'})
        }
      }
  });
  return todo;
};
