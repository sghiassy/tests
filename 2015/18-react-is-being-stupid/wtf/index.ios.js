'use strict';

var React = require('react-native');
var { TouchableOpacity, AppRegistry, StyleSheet, Text, View } = React;
var ShaheenSlider = require('./ShaheenSliderIOS.js');
var AdamBox = require('./AdamBox.js');
var RaptorEngine = require('./RaptorEngine/RaptorEngine.js');
var RaptorEngineViewModel = require('./RaptorEngine/RaptorEngineViewModel');
var PersonModel = require('./RaptorEngine/PersonModel');


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
        <RaptorEngine
          ref="raptorEngine" />
        <TouchableOpacity onPress={this.onPress}>
          <Text>Press Me</Text>
        </TouchableOpacity>
      </View>
    );
  },

  onPress() {
    var viewModel = new RaptorEngineViewModel();
    viewModel.model = new PersonModel();
    this.refs.raptorEngine.resetWithViewModels([viewModel]);
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
