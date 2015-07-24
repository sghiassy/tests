var React = require('react-native');
var { StyleSheet, Text, View } = React;

var PersonView = React.createClass({
  render: function() {
    return (
      <View style={styles.card}><Text>{this.props.model.person}</Text></View>
    );
  },
});

var styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#CCC',
    height: 400,
    borderWidth: 1,
  }
});

module.exports = PersonView;
