'use strict';
var assert = require('assert');
var jsonGlob = require('./');

it('should ', function (done) {

  jsonGlob('./fixtures/dir1/*.json', './fixtures/dir2/*.json').then(function (joined) {
    assert.deepEqual(joined, {
      "a": "avalue",
      "b": "bvalue",
      "c": "cvalue"
    });
    done();
  });

});
