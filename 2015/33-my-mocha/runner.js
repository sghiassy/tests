'use strict';

var Suite = require('./suite');
var Test = require('./test');
var Hook = require('./hook');
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

global.before = function(title, fn) {
  var beforeHook = new Hook({
    title: title,
    fn: fn
  });

  suiteQueue[0].beforeHooks.push(beforeHook);
};

global.after = function(title, fn) {
  var afterHook = new Hook({
    title: title,
    fn: fn
  });

  suiteQueue[0].afterHooks.push(afterHook);
};

global.beforeEach = function(title, fn) {
  var beforeEachHook = new Hook({
    title: title,
    fn: fn
  });

  suiteQueue[0].beforeEachHooks.push(beforeEachHook);
};

global.afterEach = function(title, fn) {
  var afterEachHook = new Hook({
    title: title,
    fn: fn
  });

  suiteQueue[0].afterEachHooks.push(afterEachHook);
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
    }, 25);
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
