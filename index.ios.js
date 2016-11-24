import React, { Component } from 'react';
import BrowseCategoriesView from './components/BrowseCategoriesView';
import NowPlayingFooterView from './components/NowPlayingFooterView';
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
    this.state = {
      nowPlaying: null
    };
  }
  render() {
    return (
      <View style={styles.appContainer}>
        <NavigatorIOS style={styles.navContainer}
          barTintColor='#F5FCFF'
          initialRoute={{
            title: 'FitPop',
            component: BrowseCategoriesView
          }} />
     </View>
    );
  }
}
// <NowPlayingFooterView />

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
  navContainer: {
    flex: 1
  },
  listView: {
     backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('FitPop', () => FitPop);
