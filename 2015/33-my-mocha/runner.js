'use strict';

var Suite = require('./suite');
var Test = require('./test');
var EventEmitter = require("events").EventEmitter;
global.ee = new EventEmitter();

var activeSuite = [];

ee.on('newSuiteDidBecomeActive', function(suite) {
  activeSuite.push(suite);
});

ee.on('suiteDidFinish', function(suite) {
  activeSuite.pop();
});

global.describe = function(title, fn) {
  var suite = new Suite({
    title: title,
    fn: fn
  });

  activeSuite[0].suites.push(suite);
};

global.it = function(title, fn) {
  var test = new Test({
    title: title,
    fn: fn
  });

  activeSuite[0].tests.push(test);
};

class Runner {
  constructor(props) {
    // Manually construct the root suite
    var rootSuite = new Suite({
      title: 'root',
      fn: () => {
        // Go through the list of files and require them
        props.files.forEach((file) => {
          require(file);
        });
      }
    });

    activeSuite.push(rootSuite);

    this.refreshIntervalId = setInterval(() => {
      this.runLoop(); // Kick off the run loop
    }, 500);
  }

  runLoop() {
    var finishedRunningAllSuites = activeSuite[0] === undefined;

    if (!finishedRunningAllSuites) {
      activeSuite[0].tickTock.call(activeSuite[0]);
    } else {
      console.log("All tests have completed");
      clearInterval(this.refreshIntervalId); // all done. Stop
    }
  }
}

module.exports = Runner;
