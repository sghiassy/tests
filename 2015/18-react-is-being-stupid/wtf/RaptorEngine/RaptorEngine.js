var React = require('react-native');
var { Text, View } = React;

var RaptorEngine = React.createClass({

  render: function() {
    return (
      <View style={{borderWidth:1, width: 250, height: 500}}>
        <Text>RaptorEngine</Text>
      </View>
    );
  },

  resetWithViewModels: function(viewModels) {
    debugger;
  },
});

module.exports = RaptorEngine;
