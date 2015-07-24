var React = require('react-native');
var { Text, View } = React;

var RaptorEngine = React.createClass({

  getInitialState: function() {
    return {
      viewModels: [],
    }
  },

  render: function() {
    if (this.state.viewModels.length > 0) {
      var viewModel = this.state.viewModels[0].fuse();
    } else {
      var viewModel = <Text>Blank</Text>
    }

    return (
      <View style={{borderWidth:1, width: 250, height: 500}}>
        <Text>RaptorEngine</Text>
        {viewModel}
      </View>
    );
  },

  resetWithViewModels: function(viewModels) {
    this.setState({
      viewModels: viewModels
    });
  },

  addViewModel: function(viewModel) {
    var existingViewModels = this.state.viewModels;
    existingViewModels.push(viewModel);

    this.setState({
      viewModels: existingViewModels,
    });
  },
});

module.exports = RaptorEngine;
