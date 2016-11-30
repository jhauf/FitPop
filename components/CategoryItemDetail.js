import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  ListView
} from 'react-native';

import Player from './Player';


export default class CategoryItemDetail extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.category.songs)
    };
    this.selectSong = this.selectSong.bind(this);
  }

  selectSong(song) {
    this.props.navigator.push({
      title: song.title,
      component: Player,
      passProps: { song },
      barTintColor: '#FFFFFF',
     });
  }

  render() {
    return(
      <ListView
        style={styles.songsList}
        dataSource={this.state.dataSource}
        renderRow={(song, sectionId, rowId) => {
          return (
            <TouchableHighlight onPress={() => this.selectSong(song)} activeOpacity={50} underlayColor="#ff5722">
            <View key={song} style={styles.song}>
            <Text style={styles.songText} >
              {song.title}
            </Text>
          </View>
        </TouchableHighlight>);
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  songsList: {
    flex: 1,
    backgroundColor: "#e2dcd9",
    paddingTop: 5,
  },
  song: {
    borderBottomWidth: .5,
    borderBottomColor: "#00bcd4",
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  songText: {
    color: "#FFFFFF",
    fontFamily: "Helvetica Neue",
    fontSize: 18,
    marginBottom: 5,
  },
});
