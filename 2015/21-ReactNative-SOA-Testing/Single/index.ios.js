/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry, Navigator, StyleSheet, Text, View
} = React;
var HelloView1 = require('./view1');

var Single = React.createClass({
  render: function() {
    return (
      <Navigator initialRoute={{
        name: 'My First Scene',
        index: 0
      }} renderScene={this.renderScene}/>
    );
  },

  renderScene: function(route, navigator) {
    console.log('renderScene ' + route.index + ' called');
    return (
      <HelloView1 name={route.name} onBack={() => {
        if (route.index > 0) {
          navigator.pop();
        }
      }} onForward={() => {
        var nextIndex = route.index + 1;
        navigator.push({
          name: 'Scene ' + nextIndex,
          index: nextIndex
        });
      }}/>
    );
  }
});

AppRegistry.registerComponent('Single', () => Single);
