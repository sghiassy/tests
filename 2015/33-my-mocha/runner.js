'use strict';

var Suite = require('./suite');

global.describe = function(title, fn) {
  console.log(title);
  var suite = new Suite({
    title: title,
    fn: fn
  });
}

class Runner {
  constructor(props) {
    // this.files = props.files;
    this.run(props.files);
  }

  run(files) {
    // go throught the list of files and require them
    files.forEach((file) => {
      require(file)
    });
  }
}

module.exports = Runner;
