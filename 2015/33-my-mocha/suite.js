'use strict';

var Test = require('./test');

class Suite {
  constructor(props) {
    this.title = props.title;
    this.fn = props.fn;

    this.suites = [];
    this.tests = [];
  }

  describe(title, fn) {
    var suite = new Suite({
      title: title,
      fn: fn
    });
    this.suites.push(suite);
  }

  it(title, fn) {
    var test = new Test({
      title: title,
      fn: fn
    });
    this.tests.push(test);
  }

  run() {
    global.ee.emit('new-suite-active', this);

    this.fn(); // run the suites function to capture new describe/it functions (note, they will be picked up globally);

    // Run all the collected tests
    this.tests.forEach((test) => {
      console.log(test.title);
      try {
        test.fn.call(this);
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
