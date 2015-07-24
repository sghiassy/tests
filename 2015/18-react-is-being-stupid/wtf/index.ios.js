'use strict';

var React = require('react-native');
var { TouchableOpacity, AppRegistry, StyleSheet, Text, View } = React;
var ShaheenSlider = require('./ShaheenSliderIOS.js');
var AdamBox = require('./AdamBox.js');
var RaptorEngine = require('./RaptorEngine/RaptorEngine.js');
var RaptorEngineViewModel = require('./RaptorEngine/RaptorEngineViewModel');
var PersonModel = require('./RaptorEngine/PersonModel');
var PersonView = require('./RaptorEngine/PersonView');

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
          React Performant Scroll View
        </Text>
        <RaptorEngine
          ref="raptorEngine" />
        <TouchableOpacity onPress={this.onPress}>
          <Text>Add 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress5}>
          <Text>Add 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.pop}>
          <Text>Pop</Text>
        </TouchableOpacity>
      </View>
    );
  },

  onPress() {
    var viewModel = new RaptorEngineViewModel();
    viewModel.model = new PersonModel();
    viewModel.View = PersonView;
    this.refs.raptorEngine.addViewModel(viewModel);
  },

  onPress5() {
    var viewModels = [];

    for (var i = 0; i < 5; i++) {
      var viewModel = new RaptorEngineViewModel();
      viewModel.model = new PersonModel(i);
      viewModel.View = PersonView;
      viewModels.push(viewModel);
    }

    this.refs.raptorEngine.addViewModels(viewModels);
  },

  pop() {
    this.refs.raptorEngine.popViewModel();
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
