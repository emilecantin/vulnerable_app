'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      Example:
      return queryInterface.bulkInsert('PointAssignations', [{
        house: 1,
        quantity: 10,
      }, {
        house: 1,
        quantity: 5,
      }, {
        house: 2,
        quantity: 8,
      }, {
        house: 3,
        quantity: 4,
      }, {
        house: 4,
        quantity: 2,
      }, {
        house: 2,
        quantity: 7,
      }, {
        house: 3,
        quantity: 9,
      }, {
        house: 4,
        quantity: 1,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
