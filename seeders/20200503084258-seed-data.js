'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employee', {
      _id: Sequelize.STRING,
      age: Sequelize.INTEGER,
      name: Sequelize.STRING,
      gender: Sequelize.STRING
    })
    let joinArray = []
    const Users = require('../app/seeds/seedData.json')
    Users.forEach((user) => {
      joinArray.push({
          _id: user['id'],
          name: user['name'],
          age: user['age'],
          gender: user['gender'],
      })
    })
    return queryInterface.bulkInsert('Employee', joinArray)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employee', null)
  }
};
