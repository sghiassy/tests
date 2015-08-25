/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry, Navigator, StyleSheet, Text, View
} = React;
var HelloView1 = require('./view1');
var HelloView2 = require('./view2');
var HelloView3 = require('./view3');
var HelloView4 = require('./view4');
var HelloView5 = require('./view5');
var HelloView6 = require('./view6');
var HelloView7 = require('./view7');
var HelloView8 = require('./view8');
var HelloView9 = require('./view9');
var HelloView10 = require('./view10');
var HelloView11 = require('./view11');
var HelloView12 = require('./view12');
var HelloView13 = require('./view13');
var HelloView14 = require('./view14');
var HelloView15 = require('./view15');
var HelloView16 = require('./view16');
var HelloView17 = require('./view17');
var HelloView18 = require('./view18');
var HelloView19 = require('./view19');
var HelloView20 = require('./view20');

var Single = React.createClass({
  render: function() {
    return (
      <Navigator initialRoute={{
        name: 'My First Scene',
        index: 0
      }} renderScene={this.renderScene}/>
    );
  },

  renderScene: function(route, navigator) {

    console.log('renderScene ' + route.index + ' called');
    var back = () => {
      if (route.index > 0) {
        navigator.pop();
      }
    };

    var forward = () => {
      var nextIndex = route.index + 1;
      navigator.push({
        name: 'Scene ' + nextIndex,
        index: nextIndex
      });
    };

    switch (route.index) {
    case 0 :
      return <HelloView1 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 1 :
      return <HelloView2 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 2 :
      return <HelloView3 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 3 :
      return <HelloView4 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 4 :
      return <HelloView5 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 5 :
      return <HelloView6 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 6 :
      return <HelloView7 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 7 :
      return <HelloView8 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 8 :
      return <HelloView9 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 9 :
      return <HelloView10 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 10 :
      return <HelloView11 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 11 :
      return <HelloView12 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 12 :
      return <HelloView13 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 13 :
      return <HelloView14 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 14 :
      return <HelloView15 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 15 :
      return <HelloView16 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 16 :
      return <HelloView17 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 17 :
      return <HelloView18 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 18 :
      return <HelloView19 name={route.name} onBack={back} onForward={forward}/>;
    break;
    case 19 :
      return <HelloView20 name={route.name} onBack={back} onForward={forward}/>;
    break;
    default :
      break;
    }
  }
});

AppRegistry.registerComponent('Single', () => Single);
