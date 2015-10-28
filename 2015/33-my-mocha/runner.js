'use strict';

var Suite = require('./suite');
var Test = require('./test');
var EventEmitter = require("events").EventEmitter;
global.ee = new EventEmitter();

var suites = [];
var activeSuite;

ee.on('newSuiteDidBecomeActive', function(suite) {
  activeSuite = suite;
});

global.describe = function(title, fn) {
  var suite = new Suite({
    title: title,
    fn: fn
  });

  activeSuite.suites.push(suite);
};

global.it = function(title, fn) {
  var test = new Test({
    title: title,
    fn: fn,
    isAsync: fn.length === 1 // see if the done function was specified in the function's arguments
  });

  activeSuite.tests.push(test);
};

class Runner {
  constructor(props) {
    // Manually setup the root suite
    var rootSuite = new Suite({
      title: 'root',
      fn: () => {}
    });

    activeSuite = rootSuite;

    // go through the list of files and require them
    props.files.forEach((file) => {
      require(file);
    });

    // Kick off the testing
    rootSuite.run.call(rootSuite);
  }

  run(files) {

  }
}

module.exports = Runner;
