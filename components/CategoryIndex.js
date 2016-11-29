import React from 'react';
import CategoryIndexItem from './CategoryIndexItem';
import { Categories } from '../WorkoutData';

import {
  ListView,
  StyleSheet
} from 'react-native';



export default class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(Categories)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(category)=> (<CategoryIndexItem navigator={this.props.navigator} category={category}/>)}
        />
    );
  }

}
