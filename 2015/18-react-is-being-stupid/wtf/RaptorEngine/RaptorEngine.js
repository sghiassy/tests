var React = require('react-native');
var { Text, View } = React;

var RaptorEngine = React.createClass({

  getInitialState: function() {
    return {
      viewModels: [],
    }
  },

  render: function() {
    var toRender;

    if (this.state.viewModels.length > 0) {
      toRender = [];

      for (var i = 0; i < this.state.viewModels.length; i++) {
        var currentViewModel = this.state.viewModels[i];
        toRender.push(currentViewModel.fuse());
      }
    } else {
      toRender = <Text>Blank</Text>
    }

    return (
      <View style={{borderWidth:1, width: 250, height: 500}}>
        <Text>RaptorEngine</Text>
        {toRender}
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
