/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var ShaheenSlider = require('./ShaheenSliderIOS.js');
var AdamBox = require('./AdamBox');

var Custom = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <ShaheenSlider
          style={{height: 100, width: 200, borderWidth: 2}}
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'purple'}
          value={8}
          minimumValue={0}
          maximumValue={10} />
        <AdamBox style={{width: 100, height: 200, borderWidth: 2}}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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

AppRegistry.registerComponent('Custom', () => Custom);
