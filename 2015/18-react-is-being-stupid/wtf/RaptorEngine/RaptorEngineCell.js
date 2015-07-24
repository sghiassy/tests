var React = require('react-native');
var {Text, View} = React;

var RaptorEngineCell = React.createClass({
  getInitialState: function() {
    return {
      isVisible: true,
    };
  },

  render: function() {
    if (this.state.isVisible) {
      return this.props.viewModel.fuse();
    } else {
      return <View style={{borderWidth: 20, borderColor: 'red', height: 300}}><Text>Invisible</Text></View>;
    }
  },

  setVisibility: function(visible) {
    this.setState({
      isVisible: visible,
    });
  }
});

module.exports = RaptorEngineCell;
