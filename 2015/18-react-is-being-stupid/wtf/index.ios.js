/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { TouchableOpacity, AppRegistry, StyleSheet, Text, View } = React;
var ShaheenSlider = require('./ShaheenSliderIOS.js');
var AdamBox = require('./AdamBox.js');

var wtf = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <AdamBox textColor={'blue'} />
        <AdamBox ref={"secondAdamBox"} />
        <ShaheenSlider style={{width: 200, height: 100}} />
        <TouchableOpacity onPress={this.onPress}>
          <Text>Increase</Text>
        </TouchableOpacity>
      </View>
    );
  },

  onPress() {
    this.refs.secondAdamBox.changeTextColor('red');
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

AppRegistry.registerComponent('wtf', () => wtf);
