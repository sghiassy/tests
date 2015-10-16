/**
 * Dependencies
 */

var yeoman = require('yeoman-generator');
var util = require('util');
var path = require('path');
var exec = require('child_process').exec;


/**
 * Ronin generator
 */

var RoninGenerator = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    
    this.argument('name', { type: String, required: true });
  },
  
  initializing: function () {
    this.pkg = require('../package.json');
  },

  writing: {
    app: function () {
      var name = this.name;
      
      this.dest.mkdir(this.name);
      this.destinationRoot(this.name);
      this.dest.mkdir('bin');
      this.dest.mkdir('commands');
      this.template('index.js', 'index.js');
      this.template('bin/$name', 'bin/' + name);
      this.template('commands/hello.js', 'commands/hello.js');
      this.template('_package.json', 'package.json', { name: name });
    }
  },
  
  end: {
    install: function () {
      this.log.invoke('npm install');
      
      var done = this.async();
      var path = this.destinationRoot();
      
      exec('cd ' + path + ' && npm install', done);
    },
    
    link: function () {
      this.log.invoke('npm link');
      
      var done = this.async();
      var path = this.destinationRoot();
      
      exec('cd ' + path + ' && npm link', done);
    }
  }
});


/**
 * Expose Ronin generator
 */

module.exports = RoninGenerator;
