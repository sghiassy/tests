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
    this.testIsCompleted = false;
    this.testHasBeenExecuted = false;
  }

  runTest() {
    if (this.testHasBeenExecuted) {
      // Because of how the run loop works, the run test command will be called
      // on every setInterval
      return;
    } else {
      this.testHasBeenExecuted = true;
    }

    console.log(this.title);

    // Create the done function
    var done = () => {
      this.testIsCompleted = true;
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

module.exports = Test;
