'use strict';
let { encryptPassword } = require('../helpers/bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Tina',
        email: 'tina@contoh.com',
        password: encryptPassword('123456'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tini',
        email: 'tini@contoh.com',
        password: encryptPassword('123456'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tono',
        email: 'tono@contoh.com',
        password: encryptPassword('123456'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ana',
        email: 'ana@contoh.com',
        password: encryptPassword('123456'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ani',
        email: 'ani@contoh.com',
        password: encryptPassword('123456'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Siska',
        email: 'siska@contoh.com',
        password: encryptPassword('qwerty'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Budi',
        email: 'budi@contoh.com',
        password: encryptPassword('qwerty'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bambang',
        email: 'bambang@contoh.com',
        password: encryptPassword('qwerty'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaka',
        email: 'jaka@contoh.com',
        password: encryptPassword('qwerty'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dian',
        email: 'dian@contoh.com',
        password: encryptPassword('qwerty'),
        organization: 'Hacktiv8',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
