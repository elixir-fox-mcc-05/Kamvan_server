'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [{
        name: 'test1',
        email: 'oke@mail.com',
        password: '1234',
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'test2',
        email: 'oke1@mail.com',
        password: '1234',
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'test3',
        email: 'oke2@mail.com',
        password: '1234',
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
