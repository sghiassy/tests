'use strict';

var Test = require('./test');

class Suite {
  constructor(props) {
    // Set values from props
    this.title = props.title;
    this.fn = props.fn;

    // Set default values
    this.suites = [];
    this.tests = [];

    // State values (I hate state this way)
    this.setupHasCompleted = false;
    this.allTestsAndSuitesHaveCompleted = false;
  }

  runOnce() {
    if (this.setupHasCompleted === false) {
      this.setupHasCompleted = true;

      // let the runnner know that a new suite became active
      // this is necessary to properly redirect global functions to the right class
      global.ee.emit('newSuiteDidBecomeActive', this);

      // run the suites function to capture new describe/it functions.
      // The relevant functions will be picked up globally and assigned to this class externally
      // A wierd process, but necessary to keep the api pretty for end-users
      this.fn();
    }
  }

  tickTock() {
    this.runOnce();

    // Iteratively go through all the sub-tests
    for (var i = 0; i < this.tests.length; i++) {
      let currentTest = this.tests[i];

      if (!currentTest.testIsCompleted) {
        currentTest.runTest();
        return;
      }
    }

    // Iteratively go through all the sub-suites
    for (var j = 0; j < this.suites.length; j++) {
      let currentSuite = this.suites[i];

      if (!currentSuite.allTestsAndSuitesHaveCompleted) {
        currentSuite.tickTock.call(currentSuite);
        return;
      }
    }

    // If we get to this point in the code, it means we have no more sub-tests
    // and sub-suites that need to be called;
    // Don't like this, because it relies on early exits above :(
    this.allTestsAndSuitesHaveCompleted = true;
  }
}

module.exports = Suite;
