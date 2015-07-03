'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE SEQUENCE first_seq START 777;')
    .then(function() {
      return queryInterface.sequelize.query('SELECT nextval(\'first_seq\');');
    })
    .then(function(res) {
      console.log('first_seq: ' + JSON.stringify(res[0]));
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
