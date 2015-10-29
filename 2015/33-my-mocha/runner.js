'use strict';

var Suite = require('./suite');
var Test = require('./test');
var EventEmitter = require("events").EventEmitter;
global.ee = new EventEmitter();

var suiteQueue = [];

ee.on('newSuiteDidBecomeActive', function(suite) {
  suiteQueue.unshift(suite);
});

ee.on('suiteDidFinish', function(suite) {
  suiteQueue.shift();
});

global.describe = function(title, fn) {
  var suite = new Suite({
    title: title,
    fn: fn
  });

  suiteQueue[0].suites.push(suite);
};

global.it = function(title, fn) {
  var test = new Test({
    title: title,
    fn: fn
  });

  suiteQueue[0].tests.push(test);
};

class Runner {
  constructor(props) {
    // Manually construct the root suite to kick things off
    var rootSuite = new Suite({
      title: 'root',
      fn: () => {
        // Go through the list of files and require them
        props.files.forEach((file) => {
          require(file);
        });
      }
    });

    suiteQueue.push(rootSuite);

    // Start the runloop
    this.refreshIntervalId = setInterval(() => {
      this.runLoop();
    }, 50);
  }

  runLoop() {
    var allSuitesHaveCompleted = suiteQueue[0] === undefined;

    if (!allSuitesHaveCompleted) {
      suiteQueue[0].tickTock.call(suiteQueue[0]);
    } else {
      console.log("All tests have completed");
      clearInterval(this.refreshIntervalId); // all done. Stop
    }
  }
}

module.exports = Runner;
