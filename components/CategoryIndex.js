import React from 'react';
import CategoryIndexItem from './CategoryIndexItem';


import {
  AppRegistry,
  ListView,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import { Artists } from '../MockData';


export default class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(Artists)
    };
  }


  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(category)=> (<CategoryIndexItem navigator={this.props.navigator} category={category}/>)}
        style={styles.listView}/>
    );
  }

}

const styles = StyleSheet.create({
  listView: {
     backgroundColor: '#F5FCFF'
  }
});
