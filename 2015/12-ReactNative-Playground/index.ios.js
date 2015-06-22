var React = require('react-native');
var Overlay = require('react-native-overlay');
var BlurView = require('react-native-blur').BlurView;

var {
  AppRegistry,
  View,
  ActivityIndicatorIOS,
  StyleSheet,
  Image,
} = React;

var LoadingOverlay = React.createClass({
  getDefaultProps(): StateObject {
    return {
      isVisible: false
    }
  },

  render(): ReactElement {
    return (
      <Overlay isVisible={this.props.isVisible}>
        <BlurView style={styles.background} blurType="dark">
          <ActivityIndicatorIOS
            size="large"
            animating={true}
            style={styles.spinner} />
        </BlurView>
      </Overlay>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
})

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={require('image!announcement')} style={styles.image} />

        { /* It doesn't matter where we put this component, it can be nested */ }
        { /* anywhere within your component tree */ }
        <LoadingOverlay isVisible={true} />
      </View>
    );
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
