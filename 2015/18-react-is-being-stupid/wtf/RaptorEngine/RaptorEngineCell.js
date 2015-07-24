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
      return <View></View>;
    }
  },
});

module.exports = RaptorEngineCell;
