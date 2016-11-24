import React from 'react';
import CategoryCell from './CategoryCell';


import {
  AppRegistry,
  ListView,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

let SOUNDCLOUD_CLIENT_ID = 'ff3108ddadaeeea1c2cd56d0b3617255';
import { Artists } from '../MockData';


export default class BrowseCategoriesView extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.renderCategory = this.renderCategory.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(Artists)
    };
  }


  renderCategory(category) {
    return (
      <CategoryCell navigator={this.props.navigator} category={category}/>
    );
  }


  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCategory}
        style={styles.listView}/>
    );
  }

}

const styles = StyleSheet.create({
  listView: {
     backgroundColor: '#F5FCFF'
  }
});
