import React, { Component } from 'react';
import CategoryIndex from './components/CategoryIndex';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class FitPop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.appContainer}>
        <NavigatorIOS style={styles.navContainer}
          barTintColor='#F5FCFF'
          initialRoute={{
            title: 'FitPop',
            component: CategoryIndex
          }} />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
  navContainer: {
    flex: 1
  }
});

AppRegistry.registerComponent('FitPop', () => FitPop);
