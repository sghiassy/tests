var React = require('react-native');
var { ScrollView, Text, View } = React;
var SCROLL_VIEW_REF = "SCROLL_VIEW_REF";

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
    }

    return (
      <ScrollView style={{borderWidth:1, width: 250, height: 500}}>
        {toRender}
      </ScrollView>
    );
  },

  /*
   * View Model Management
   */

  resetWithViewModels: function(viewModels) {
    this.setState({
      viewModels: viewModels
    });
  },

  addViewModel: function(viewModel) {
    this.addViewModels([viewModel]);
  },

  addViewModels: function(viewModels) {
    this.setState({
      viewModels: this.state.viewModels.concat(viewModels),
    });
  },

  popViewModel: function() {
    this.state.viewModels.pop();
    this.setState({}); // Empty call to setState so that we refresh the view
  },

});

module.exports = RaptorEngine;
