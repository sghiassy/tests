'use strict';

/**
 * A hook is a function like before, beforeEach, after, afterEach etc
 * that runs at specified times during the lifecycle of of a test run.
 */
class Hook {
  constructor(props) {
    this.title = props.title || "";
    this.fn = props.fn
  }
}

module.exports = Hook;
