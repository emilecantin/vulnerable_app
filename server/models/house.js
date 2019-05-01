'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    name: DataTypes.STRING
  }, {});
  House.associate = function(models) {
    // associations can be defined here
  };
  return House;
};