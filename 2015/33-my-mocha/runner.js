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

    // go throught the list of files and require them
    props.files.forEach((file) => {
      require(file)
    });

    suites.forEach((suite) => {
      console.log(suite.title)
      suite.run.call(suite);
    });
  }

  run(files) {

  }
}

module.exports = Runner;
