import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ListView } from 'react-native';
import Player from './Player';


export default class CategoryItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.selectSong = this.selectSong.bind(this);
  }

  selectSong(song) {
    this.props.navigator.push({
      title: song.title,
      component: Player,
      passProps: { song },
      barTintColor: '#F5FCFF',
      backgroundColor: '#F5FCFF',
     });
  }

  render() {
    let songsDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows( this.props.category.songs );
    return(
      <ListView
        dataSource={ songsDataSource }
        style={ styles.songsList }
        renderRow={(song, sectionId, rowId) => {
          return (
            <TouchableOpacity onPress={() => this.selectSong(song)}>
            <View key={song} style={ styles.song }>
            <Text style={ styles.songTitle } >
              { song.title }
            </Text>
          </View>
        </TouchableOpacity>);
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  songsList: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 5,
  },
  song: {
    borderBottomWidth: 1,
    borderBottomColor: "#111",
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 5,
  },
});
