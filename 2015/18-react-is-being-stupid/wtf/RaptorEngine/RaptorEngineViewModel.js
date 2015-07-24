var React = require('react-native');
var { Text, View } = React;

class ViewModel {
  constructor() {
    // Define (i.e. Document) internal variables
    this.View = undefined;
    this.model = undefined;
  }

  fuse() {
    var view = React.createElement(this.View, {model: this.model});
    return view;
  }
}

module.exports = ViewModel;
