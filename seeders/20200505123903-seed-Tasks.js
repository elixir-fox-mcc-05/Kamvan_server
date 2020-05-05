'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        title: 'Project 1',
        description: 'project-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        category: 'Backlog',
        priority: 'Normal',
        deadline: '2021-07-07',
        AssignorId: 1,
        AssigneeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project 2',
        description: 'project-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        category: 'Doing',
        priority: 'Normal',
        deadline: '2021-04-24',
        AssignorId: 4,
        AssigneeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project 3',
        description: 'project-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        category: 'Todo',
        priority: 'Urgent',
        deadline: '2021-03-27',
        AssignorId: 1,
        AssigneeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project 4',
        description: 'project-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        category: 'Todo',
        priority: 'Important',
        deadline: '2021-01-11',
        AssignorId: 7,
        AssigneeId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project 5',
        description: 'project-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        category: 'Backlog',
        priority: 'Important',
        deadline: '2021-12-12',
        AssignorId: 4,
        AssigneeId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project 6',
        description: 'project-6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        category: 'Doing',
        priority: 'Normal',
        deadline: '2021-11-10',
        AssignorId: 3,
        AssigneeId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project 7',
        description: 'project-7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        category: 'Backlog',
        priority: 'Urgent',
        deadline: '2021-06-19',
        AssignorId: 8,
        AssigneeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project 8',
        description: 'project-8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        category: 'Done',
        priority: 'Important',
        deadline: '2021-09-23',
        AssignorId: 10,
        AssigneeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
