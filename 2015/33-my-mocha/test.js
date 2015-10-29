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
    this.isAsync = props.fn.length === 1 // see if the done function was specified in the function's arguments

    // Setup default values
    this.currentState = STATES.NOT_STARTED;
  }

  runTest() {
    var testAlreadyCompleted = this.currentState === STATES.TEST_COMPLETED;
    var testInProgress = this.currentState === STATES.TEST_STARTED;

    if (testAlreadyCompleted) {
      throw "3edfr5t: Why is this being called";
    }

    if (testInProgress) {
      // Because of how the run loop works, the run test command will be called
      // on every setInterval so for long-running tests, this command will
      // rightfully be called many times
      return;
    } else {
      this.currentState = STATES.TEST_STARTED;
    }

    console.log(this.title);

    // Create the done function
    var done = () => {
      this.currentState = STATES.TEST_COMPLETED;
    }

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
    }
  }
}

// Set Class Methods & Variables
Test.STATES = STATES;

module.exports = Test;
