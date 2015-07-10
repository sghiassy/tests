'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet, Text, View } = React;

class Header extends React.Component {
  render() {
    return(
      <View accessibilityLabel={"Shaheen"}
        testID={"Shaheen"}
        description={"Shaheen"}>
        <Text title={"Shaheen"} testID={"Shaheen"}>Shaheen4</Text></View>
    );
  }

  accessibilityLabel() {
    return "Shaheen";
  }

  title() {
    return "Shaheen";
  }

  testID() {
    return "Shaheen";
  }
}

module.exports = Header;
