'use strict';

var React = require('react-native');
var { StyleSheet, Text, View } = React;

// exports.framework = 'React';
// exports.title = 'Geolocation';
// exports.description = 'Examples of using the Geolocation API.';
//
// exports.examples = [
//   {
//     title: 'navigator.geolocation',
//     render: function(): ReactElement {
//       return <GeolocationExample />;
//     },
//   }
// ];

var GeolocationExample = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.setState({initialPosition}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      this.setState({lastPosition});
    });
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  render: function() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {JSON.stringify(this.state.initialPosition.coords)}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {JSON.stringify(this.state.lastPosition.coords)}
        </Text>
      </View>
    );
  }
});

module.exports = GeolocationExample;

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
