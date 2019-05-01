'use strict';
module.exports = (sequelize, DataTypes) => {
  const PointAssignation = sequelize.define('PointAssignation', {
    quantity: DataTypes.INTEGER
  }, {});
  PointAssignation.associate = function(models) {
    // associations can be defined here
  };
  return PointAssignation;
};