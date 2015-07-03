'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE SEQUENCE second_seq START 888;')
    .then(function() {
      return queryInterface.sequelize.query('SELECT nextval(\'second_seq\');');
    })
    .then(function(res) {
      console.log('second_seq: ' + JSON.stringify(res[0]));
    })
    .then(function() {
      return queryInterface.sequelize.query('SELECT * from "SequelizeMeta";');
    })
    .then(function(res) {
      console.log('SequelizeMeta: ' + JSON.stringify(res[0]));
    });
  },

  down: function (queryInterface, Sequelize) { }
};
