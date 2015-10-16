var Command = require('ronin').Command;

var <%= name %> = Command.extend({
  desc: 'Insert your description',
  
  run: function () {
    console.log('<%= name %> command');
  }
});

module.exports = <%= name %>;
