import React from 'react';
import CategoryIndex from './components/CategoryIndex';


import {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native';

export default class FitPop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS style={styles.container}
          initialRoute={{
            title: 'FitPop',
            component: CategoryIndex,
             barTintColor: "#FFFFFF"
          }} />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('FitPop', () => FitPop);
