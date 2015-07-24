var React = require('react-native');
var { Text, View } = React;

class ViewModel {
  viewForViewModel() {
    return (
      <View>
        <Text>
          {viewModel.person}
        </Text>
      </View>
    );
  }

  render() {

  }
}

module.exports = ViewModel;
