var React = require('react-native');
var { StyleSheet, Text, View, TouchableHighlight } = React;

class HelloView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={styles.welcome}>
            {this.props.name}
          </Text>
        </TouchableHighlight>
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

module.exports = HelloView;
