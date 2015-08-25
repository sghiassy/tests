var React = require('react-native');
var { StyleSheet, Text, View, TouchableOpacity } = React;

class View2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onForward}>
          <Text style={styles.welcome}>
            View 10
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text>Back</Text>
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
  }
}

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

module.exports = View2;
