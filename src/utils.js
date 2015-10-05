(function () {
  'use strict';

  var colors = require('colors');

  module.exports = {
    log: function () {
      arguments[0] = '[' + colors.grey('SOURCE DEPS') + '] ' + arguments[0];
      console.log.apply(this, arguments);
    },
    isArray: function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },
    arrayIntersect: function (a1, a2) {
      var result;

      result = a1.filter(function (element) {
        return a2.indexOf(element) != -1;
      });

      return result;
    }
  };

}());