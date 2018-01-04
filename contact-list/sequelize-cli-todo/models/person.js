'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Person.hasMany(models.Todo, {
          foreignKey: 'personId'
        })
        
      }
    }
  });
  return Person;
};
