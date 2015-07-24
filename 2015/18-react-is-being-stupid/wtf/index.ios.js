'use strict';

var React = require('react-native');
var { TouchableOpacity, AppRegistry, StyleSheet, Text, View } = React;
var ShaheenSlider = require('./ShaheenSliderIOS.js');
var AdamBox = require('./AdamBox.js');
var RaptorEngine = require('./RaptorEngine/RaptorEngine.js');

var wtf = React.createClass({
  render: function() {
    var ViewModels = {
      View: function() {
        return (
          <View style={{borderWidth:2, borderColor: 'red'}}><Text>Shaheen</Text></View>
        );
      },
      Data: function() {
        text: 'Shaheen'
      },
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <RaptorEngine />
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
