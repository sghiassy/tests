var React = require('react-native');
var { StyleSheet, Text, View } = React;

var PersonView = React.createClass({
  render: function() {
    return (
      <View style={styles.card}><Text>{this.props.model.person}</Text></View>
    );
  },
});

PersonView.Height = 300;
PersonView.Width = 250;

var styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#CCC',
    height: 300,
    borderWidth: 1,
  }
});

module.exports = PersonView;
