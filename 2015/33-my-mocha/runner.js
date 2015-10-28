'use strict';

var Suite = require('./suite');

var suites = [];

global.describe = function(title, fn) {
  var suite = new Suite({
    title: title,
    fn: fn
  });

  // console.log('Global describe called with ', title);
  suites.push(suite);
}

class Runner {
  constructor(props) {
    // this.files = props.files;
    this.run(props.files);
    suites.forEach((suite) => {
      console.log(suite.title)
      suite.run.call(suite);
    });
  }

  run(files) {
    // go throught the list of files and require them
    files.forEach((file) => {
      require(file)
    });
  }
}

module.exports = Runner;
