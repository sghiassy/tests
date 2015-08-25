/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NativeRouterViewController = require('NativeModules').NativeRouterViewController;
var {
  AppRegistry, StyleSheet, Text, TouchableOpacity, View
} = React;

var View13 = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.press}>
        <Text style={styles.welcome}>
          View 13
        </Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  },

  press: function() {
    NativeRouterViewController.GET('View14', null, function(err, res) {});
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('View13', () => View13);
