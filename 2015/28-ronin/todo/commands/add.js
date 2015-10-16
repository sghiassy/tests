var exec = require('child_process').exec,
  child;
var Command = require('ronin').Command;
var choose = require('asking').choose;
var ask = require('asking').ask;

var Add = Command.extend({
  desc: 'Add a new task',

  run: function() {
    ask('What is your favourite color?', function(err, color) {
      // color variable contains the answer
      console.log('color selected', color);

      child = exec('ls -la', function(err, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (err !== null) {
          console.log('exec error: ' + error);
        }
      });
    });
  }
});

module.exports = Add;
