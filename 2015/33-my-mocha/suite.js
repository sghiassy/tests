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
    this.hasBeenCalledOnce = false;
  }

  runOnce() {
    if (this.hasBeenCalledOnce === false) {
      this.hasBeenCalledOnce = true;

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

    var testToRun = undefined;

    for (var i = 0; i < this.tests.length; i++) {
      let currentTest = this.tests[i];

      if (!currentTest.testIsCompleted) {
        testToRun = currentTest;
        break;
      }
    }

    if (testToRun) {
      testToRun.runTest();
      return;
    }

    // Run all the collected suites
    this.suites.forEach((suite) => {
      console.log(suite.title);
      suite.tickTock.call(suite);
    });
  }
}

module.exports = Suite;
