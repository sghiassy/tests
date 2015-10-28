'use strict';

var Test = require('./test');

class Suite {
  constructor(props) {
    this.title = props.title;
    this.fn = props.fn;

    this.suites = [];
    this.tests = [];
  }

  run() {
    // let the runnner know that a new suite became active
    // this is necessary to properly redirect global functions to the right class
    global.ee.emit('newSuiteDidBecomeActive', this);

    // run the suites function to capture new describe/it functions.
    // The relevant functions will be picked up globally and assigned to this class externally
    // A wierd process, but necessary to keep the api pretty for end-users
    this.fn();

    // Now that all the tests have been collected, run them
    this.tests.forEach((test) => {
      console.log(test.title);

      // Create the done function
      var done = function() {
        test.testIsCompleted = true;
      }

      try {
        if (test.isAsync) {
          test.fn.call(this, done);
        } else {
          test.fn.call(this);
          done();
        }
      } catch(err) {
        console.log(err.message);
      }
    });

    // Run all the collected suites
    this.suites.forEach((suite) => {
      console.log(suite.title);
      suite.run.call(suite);
    });
  }
}

module.exports = Suite;
