'use strict';

var React = require('react-native');
var {StyleSheet, Text, View} = React;
var NativeMethodsMixin = require('NativeMethodsMixin');
var PropTypes = require('ReactPropTypes');
var requireNativeComponent = require('requireNativeComponent');

var AdamBox = React.createClass({
  mixins: [NativeMethodsMixin],

  propTypes: {
    style: View.propTypes.style,
    textColor: PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      textColor: 'orange',
    }
  },

  render: function() {
    return (
      <AdamBoxElement style={{width: 200, height: 100}} textColor={this.props.textColor} />
    );
  }
});

var AdamBoxElement = requireNativeComponent('AdamBox', AdamBox);

module.exports = AdamBox;
