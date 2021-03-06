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

    if (this.state.viewModels.length > 0) {
      toRender = [];

      for (var i = 0; i < this.state.viewModels.length; i++) {
        var currentViewModel = this.state.viewModels[i];
        var cell = <RaptorEngineCell viewModel={currentViewModel} ref={"cell_" + i} />;
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


    var visibleTop = this.scrollProperties.offsetY;
    var visibleBottom = visibleTop + this.scrollProperties.visibleHeight;
    console.log('Viewport is ' + visibleTop + " to " + visibleBottom);

    // Update the cells with their current positioning
    // TODO: This shouldn't be happening on scroll. instead
    //       I'd like to see this happen once on instantiation - much more performant.
    if (evt.nativeEvent.updatedChildFrames) {
      var childFrames = evt.nativeEvent.updatedChildFrames;

      for (var i = 0; i < childFrames.length - 1; i++) {
        var currentCell = this.refs['cell_' + i];
        currentCell.frame = childFrames[i];
      }
    }

    for (var i = 0; i < this.state.viewModels.length - 1; i++) {
      var currentCell = this.refs['cell_' + i];

      var currentCellTopIsVisible = currentCell.frame.y > visibleTop && currentCell.frame.y < visibleBottom;
      var currentCellBottom = currentCell.frame.y + currentCell.frame.height;
      var currentCellBottomIsVisible = currentCellBottom > visibleTop && currentCellBottom < visibleBottom;

      if (i == 0) {
        console.log('top: ' + currentCell.frame.y + " bottom: " + currentCellBottom);
        console.log('topIsVisible: ', currentCellTopIsVisible);
        console.log('bottomIsVisible: ', currentCellBottomIsVisible);
      }

      if (currentCellTopIsVisible || currentCellBottomIsVisible) {
        currentCell.setVisibility(true);
      } else {
        // debugger
        currentCell.setVisibility(false);
      }
    }
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
