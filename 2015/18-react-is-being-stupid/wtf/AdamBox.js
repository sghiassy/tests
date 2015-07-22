'use strict';

// var React = require('react-native');
// var {Text, View} = React;
var NativeMethodsMixin = require('NativeMethodsMixin');
var PropTypes = require('ReactPropTypes');
var React = require('React');
var Text = require('Text');
// var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var StyleSheet = require('StyleSheet');
var View = require('View');
var requireNativeComponent = require('requireNativeComponent');

var AdamBox = React.createClass({
  mixins: [NativeMethodsMixin],

  propTypes: {
    /**
     * Used to style and layout the `Slider`.  See `StyleSheet.js` and
     * `ViewStylePropTypes.js` for more info.
     */
    style: View.propTypes.style
  },

  render: function() {
    return (
      <ShaheenSlider style={{width: 200, height: 100}} />
    );
  }
});

// var validAttributes = {
//   ...ReactIOSViewAttributes.UIView,
//   // value: true,
//   // minimumValue: true,
//   // maximumValue: true,
//   // minimumTrackTintColor: true,
//   // maximumTrackTintColor: true,
// };

// var ShaheenSlider = createReactIOSNativeComponentClass({
//   validAttributes: validAttributes,
//   uiViewClassName: 'AdamBox',
// });

var ShaheenSlider = requireNativeComponent('AdamBox', AdamBox);

module.exports = AdamBox;
