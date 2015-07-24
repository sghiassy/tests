var React = require('react-native');
var { Text, View } = React;

var PersonView = React.createClass({
  render: function() {
    return (
      <View><Text>{this.props.model.person}</Text></View>
    );
  },
});

module.exports = PersonView;
