'use strict';
var Chance = require('chance');

module.exports = function () {
  var random = new Chance();
  return {
    year: random.natural(),
    month: random.natural({min: 1, max: 12}),
    clientName: random.name({nationality: 'it'}),
    projectName: random.street({country: 'it'}),
    delimiterOfType: '--',
    delimiterOfSpace: '-'
  };
};
