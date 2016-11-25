import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity, ListView } from 'react-native';
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
      passProps: {song}
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
              <Text style={ styles.albumTitle }>
                { song.album }
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
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#111",

  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 5,
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 12
  },
});
