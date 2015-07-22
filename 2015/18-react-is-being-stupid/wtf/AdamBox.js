'use strict';

var React = require('react-native');
var {StyleSheet, Text, View} = React;
var NativeMethodsMixin = require('NativeMethodsMixin');
var PropTypes = require('ReactPropTypes');
var requireNativeComponent = require('requireNativeComponent');

var AdamBox = React.createClass({
  mixins: [NativeMethodsMixin],

  propTypes: {
    /**
     * Used to style and layout the `Slider`.  See `StyleSheet.js` and
     * `ViewStylePropTypes.js` for more info.
     */
    style: View.propTypes.style,

    textColor: 'red',
  },

  render: function() {
    return (
      <ShaheenSlider style={{width: 200, height: 100}} />
    );
  }
});

var ShaheenSlider = requireNativeComponent('AdamBox', AdamBox);

module.exports = AdamBox;
