var React = require('react-native');
var { ScrollView, Text, View } = React;
var merge = require('merge');
var ScrollResponder = require('ScrollResponder');
var RaptorEngineCell = require('./RaptorEngineCell');

// Constants
var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
var SCROLL_VIEW_REF = "SCROLL_VIEW_REF";


var RaptorEngine = React.createClass({
  mixins: [ScrollResponder.Mixin],

  componentWillMount: function() {
    // this data should never trigger a render pass, so don't put in state
    this.scrollProperties = {
      visibleHeight: undefined,
      contentHeight: undefined,
      offsetY: 0
    };
  },

  getInitialState: function() {
    return {
      viewModels: [],
    }
  },

  render: function() {
    var toRender = this.renderContent();
    return this.createScrollView(toRender);
  },

  renderContent: function() {
    var toRender = [];
    var visibleTop = this.scrollProperties.offsetY;
    var visibleBottom = visibleTop + this.scrollProperties.visibleHeight;

    if (this.state.viewModels.length > 0) {
      toRender = [];

      for (var i = 0; i < this.state.viewModels.length; i++) {
        var currentViewModel = this.state.viewModels[i];
        var cell = <RaptorEngineCell viewModel={currentViewModel} />;
        toRender.push(cell);
      }
    }

    return toRender;
  },

  /**
   * Scroll View Management
   */

  createScrollView: function(content) {
    var props = merge(
      this.props, {
        onScroll: this._onScroll,
        scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE, // Define the rate at which we get called back from scrolling
      }
    );

    return (
      <ScrollView {...props}
        style={{borderWidth:1, width: 250, height: 500}}>
        {content}
      </ScrollView>
    );
  },

  _onScroll: function(evt) {
    // Take the opportunity to update the scroll property metrics
    this.scrollProperties.visibleHeight = evt.nativeEvent.layoutMeasurement.height;
    this.scrollProperties.contentHeight = evt.nativeEvent.contentSize.height;
    this.scrollProperties.offsetY = evt.nativeEvent.contentOffset.y;
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
