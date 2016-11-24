import React from 'react';
import TrackCell from './TrackCell';

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
    this.renderTrack = this.renderTrack.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(Artists)
    };
  }


  renderTrack(track) {
    return (
      <TrackCell navigator={this.props.navigator} track={track}/>
    );
  }


  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTrack}
        style={styles.listView}/>
    );
  }

}

const styles = StyleSheet.create({
  listView: {
     backgroundColor: '#F5FCFF'
  }
});
