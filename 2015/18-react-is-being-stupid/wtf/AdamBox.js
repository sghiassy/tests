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
// var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var merge = require('merge');

var AdamBox = React.createClass({
  render: function() {
    return (
      <Text>Shaheen</Text>
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
//
// var ShaheenSlider = createReactIOSNativeComponentClass({
//   validAttributes: validAttributes,
//   uiViewClassName: 'AdamBox',
// });

module.exports = AdamBox;
