'use strict';

class Test {
  constructor(props) {
    // Assign values from props
    this.title = props.title;
    this.fn = props.fn;
    this.isAsync = props.fn.length === 1 // see if the done function was specified in the function's arguments

    // Setup default values
    this.testIsCompleted = false;
  }
}

module.exports = Test;
