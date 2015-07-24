var React = require('react-native');
var { Text, View } = React;

var RaptorEngine = React.createClass({
  render: function() {
    return (
      <View style={{borderWidth:1}}>
        <Text>RaptorEngine</Text>
      </View>
    );
  }
});

module.exports = RaptorEngine;
