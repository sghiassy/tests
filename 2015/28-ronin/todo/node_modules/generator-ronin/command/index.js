/**
 * Dependencies
 */

var yeoman = require('yeoman-generator');
var util = require('util');


/**
 * Command generator
 */

var RoninCommandGenerator = yeoman.generators.NamedBase.extend({
  writing: function () {
    // shortcut for argument
    var name = this.name;
    
    // extract command name
    var commandName = name.split('/').pop();
    
    // and capitalize it
    commandName = commandName.replace(/^./, function ($1) {
      return $1.toUpperCase();
    });
    
    // copy template
    this.template('command.js', 'commands/' + name + '.js', { name: commandName });
  }
});


/**
 * Expose generator
 */

module.exports = RoninCommandGenerator;
