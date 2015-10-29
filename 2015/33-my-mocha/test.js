'use strict';

var STATES = {
  NOT_STARTED: 0,
  TEST_STARTED: 1,
  TEST_COMPLETED: 2
}

class Test {
  constructor(props) {
    // Assign values from props
    this.title = props.title;
    this.fn = props.fn;
    this.parentSuite = props.parentSuite;
    this.isAsync = props.fn.length === 1 // see if the done function was specified in the function's arguments

    // Setup default values
    this.currentState = STATES.NOT_STARTED;
    this.testTimer = 0; // the time it takes for a test to complete
  }

  runTest() {
    var testAlreadyCompleted = this.currentState === STATES.TEST_COMPLETED;
    var testInProgress = this.currentState === STATES.TEST_STARTED;

    if (testAlreadyCompleted) {
      throw "3edfr5t: Test shouldn't be called since its been marked as completed";
    }

    // Create the done function
    var done = () => {
      this.testTimer = new Date().getTime() - this.testTimer; // calculate the test's duration against the start time
      this.currentState = STATES.TEST_COMPLETED;
    }

    if (testInProgress) {
      // Because of how the run loop works, the run test command will be called
      // on every setInterval so for long-running tests, this command will
      // rightfully be called many times
      var currentDuration = new Date().getTime() - this.testTimer;

      if (currentDuration >= 6000) {
        console.log("3wsed: Test took to long. Marking as done");
        done();
      }

      return;
    }

    console.log(this.title);

    this.currentState = STATES.TEST_STARTED;
    this.testTimer = new Date().getTime(); // start the timer

    this.runAllBeforeEach();
    try {
      if (this.isAsync) {
        this.fn.call(this, done);
      } else {
        this.fn.call(this);
        done();
      }
    } catch (err) {
      console.log(err.message);
      done();
    } finally {
      this.runAllAfterEach();
    }
  }

  runAllBeforeEach() {
    var currentSuite = this.parentSuite;
    while (currentSuite !== undefined) {
      currentSuite.beforeEachHooks.forEach((beforeEachHook)=>{
        beforeEachHook.fn.call(beforeEachHook);
      });

      currentSuite = currentSuite.parentSuite;
    }
  }

  runAllAfterEach() {
    var currentSuite = this.parentSuite;
    while (currentSuite !== undefined) {
      currentSuite.afterEachHooks.forEach((afterEachHook)=>{
        afterEachHook.fn.call(afterEachHook);
      });

      currentSuite = currentSuite.parentSuite;
    }
  }
}

// Set Class Methods & Variables
Test.STATES = STATES;

module.exports = Test;
