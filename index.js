'use strict';
var _ = require('lodash'),
    path = require('path'),
    Promise = require('bluebird'),
    glob = Promise.promisify(require('glob'));

module.exports = function () {

  var globs = Array.prototype.slice.call(arguments),
      files = globs.map(function (item) {
        return glob(item);
      });

  return Promise.settle(
    files
  )
  .map(function (pattern) {
    return pattern.value().map(function (file) {
      return require(path.join(process.cwd(), file));
    });
  })
  .map(function (results) {
    return _.merge.apply(this, results);
  })
  .then(function (results) {
    return _.merge.apply(this, results);
  });

};
