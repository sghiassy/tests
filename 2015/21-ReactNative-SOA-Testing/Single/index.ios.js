/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet, Text, View } = React;
var HelloView1 = require('./view1');

var Single = React.createClass({
  render: function() {
    return (
      <HelloView1 />
    );
  }
});

AppRegistry.registerComponent('Single', () => Single);
