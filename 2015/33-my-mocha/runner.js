'use strict';

var Suite = require('./suite');
var Test = require('./test');
var EventEmitter = require("events").EventEmitter;
global.ee = new EventEmitter();

var suites = [];
var activeSuite;

ee.on('new-suite-active', function(suite) {
  activeSuite = suite;
});

global.describe = function(title, fn) {
  var suite = new Suite({
    title: title,
    fn: fn
  });

  // console.log('Global describe called with ', title);
  suites.push(suite);
};

global.it = function(title, fn) {
  var test = new Test({
    title: title,
    fn: fn
  });

  activeSuite.tests.push(test);
};

class Runner {
  constructor(props) {

    // go throught the list of files and require them
    props.files.forEach((file) => {
      require(file)
    });

    suites.forEach((suite) => {
      console.log(suite.title)
      suite.run.call(suite);
    });
  }

  run(files) {

  }
}

module.exports = Runner;
