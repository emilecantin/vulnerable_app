'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // return queryInterface.bulkInsert('User', [{
    //   firstName: 'Harry',
    //   lastName: 'Potter',
    //   password_digest: bcrypt.hashSync('horcruxes', 10),
    //   is_teacher: false,
    // }, {
    //   firstName: 'Albus',
    //   lastName: 'Dumbledore',
    //   password_digest: bcrypt.hashSync('phoenix', 10),
    //   is_teacher: true,
    // }])
    return Promise.resolve();
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
