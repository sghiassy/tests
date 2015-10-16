/**
 * Dependencies
 */

var yeoman = require('yeoman-generator');
var util = require('util');


/**
 * Middleware generator
 */

var MiddlewareGenerator = yeoman.generators.NamedBase.extend({
  writing: function () {
    var name = this.name;
    
    this.template('$name.js', 'middleware/' + name + '.js', { name: name });
  }
});


/**
 * Expose generator
 */

module.exports = MiddlewareGenerator;
