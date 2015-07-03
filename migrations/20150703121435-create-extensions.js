'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE EXTENSION postgis;')
    .then(function() {
      return queryInterface.sequelize.query('CREATE EXTENSION fuzzystrmatch;')
    })
    .then(function() {
      return queryInterface.sequelize.query('CREATE EXTENSION postgis_tiger_geocoder;')
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
