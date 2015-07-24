var React = require('react-native');
var { Text, View } = React;

var RaptorEngine = React.createClass({

  render: function() {
    var viewModel;
    if (this.state && this.state.viewModels) {
      viewModel = this.state.viewModels[0].fuse();
    } else {
      viewModel = <Text>Blank</Text>
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
});

module.exports = RaptorEngine;
