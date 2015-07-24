var React = require('react-native');
var { Text, View } = React;

var RaptorEngine = React.createClass({

  getInitialState: function() {
    return {
      viewModel: 'shaheen initial state'
    };
  },

  render: function() {
    var viewModel = <Text>{this.state.viewModel}</Text>;
    return (
      <View style={{borderWidth:1, width: 250, height: 500}}>
        <Text>RaptorEngine</Text>
        {viewModel}
      </View>
    );
  },

  resetWithViewModels: function(viewModels) {
    this.setState({
      viewModel: viewModels[0]
    });
  },
});

module.exports = RaptorEngine;
