'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks',
      [
        {
          title: 'title1',
          description: 'testing',
          point: 10,
          assignedto: 'UserName',
          category: 'Back-Log',
          UserId: 1,
          organization: 'Hacktiv8',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'title2',
          description: 'testing2',
          point: 20,
          assignedto: 'UserName2',
          category: 'To Do',
          UserId: 2,
          organization: 'Hacktiv8',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'title3',
          description: 'testing3',
          point: 30,
          assignedto: 'UserName3',
          category: 'Doing',
          UserId: 3,
          organization: 'Hacktiv8',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
