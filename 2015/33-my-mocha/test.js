'use strict';

var STATES = {
  NOT_STARTED: 0,
  TEST_STARTED: 1,
  TEST_SKIPPED: 2,
  TEST_COMPLETED: 3,
}

class Test {
  constructor(props) {
    // Assign values from props
    this.title = props.title;
    this.fn = props.fn;
    this.shouldSkip = props.shouldSkip || false;
    this.parentSuite = props.parentSuite;
    this.isAsync = props.fn.length === 1 // see if the done function was specified in the function's arguments

    // Setup default values
    this.currentState = STATES.NOT_STARTED;
    this.testTimer = 0; // the time it takes for a test to complete
  }

  runTest() {
    var testAlreadyCompleted = this.currentState === STATES.TEST_COMPLETED || this.currentState === STATES.TEST_SKIPPED;
    if (testAlreadyCompleted) {
      throw "edfr5t: Test shouldn't be called since its been marked as completed";
    }

    if (this.shouldSkip) {
      console.log("skipped " + this.title);
      this.markTestAsSkipped();
      return;
    }

    var testInProgress = this.currentState === STATES.TEST_STARTED;
    if (testInProgress) {
      // Because of how the run loop works, the run test command will be called
      // on every setInterval so for long-running tests, this command will
      // rightfully be called many times
      var currentDuration = new Date().getTime() - this.testTimer;

      if (currentDuration >= 6000) {
        console.log("3wsed: Test took to long. Marking as done");
        this.markTestAsCompleted();
      }

      return; // return early if test in progress
    }

    this.currentState = STATES.TEST_STARTED;
    this.testTimer = new Date().getTime(); // start the timer

    this.parentSuite.runAllBeforeEach();

    console.log(this.title);

    try {
      if (this.isAsync) {
        this.fn.call(this, this.markTestAsCompleted);
      } else {
        this.fn.call(this);
        this.markTestAsCompleted();
      }
    } catch (err) {
      console.log(err.message);
      this.markTestAsCompleted();
    } finally {
      this.parentSuite.runAllAfterEach();
    }
  }

  markTestAsCompleted() {
    this.testTimer = new Date().getTime() - this.testTimer; // calculate the test's duration against the start time
    this.currentState = STATES.TEST_COMPLETED;
  }

  markTestAsSkipped() {
    this.testTimer = 0;
    this.currentState = STATES.TEST_SKIPPED;
  }
}

// Set Class Methods & Variables
Test.STATES = STATES;

module.exports = Test;
