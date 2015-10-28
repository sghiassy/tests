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
    this.fn();

    this.tests.forEach((test) => {
      console.log(test.title);
      try {
        test.fn.call(this);
      } catch(err) {
        console.log(err.message);
      }

    });

    this.suites.forEach((suite) => {
      console.log(suite.title);
      suite.fn.call(suite);
    });
  }
}

module.exports = Suite;
