import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity, ListView } from 'react-native';
import Video from 'react-native-video';
import SongScreen from './SongScreen';



export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.selectSong = this.selectSong.bind(this);
  }

  // renderAudio(songUrl) {
  //   return <Video source={{uri: songUrl }}/>;
  // }

  selectSong(song) {
    this.props.navigator.push({
      title: song.title,
      component: SongScreen,
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
  background: {
    backgroundColor: "#000",
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    width: window.width,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  headerClose: {
    position: 'absolute',
    top: 5,
    left: 0,
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  stickySection: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stickySectionTitle: {
    color: "#FFF",
  },
  parallaxHeader: {
    alignItems: 'center',
    paddingTop: 40,
    width: window.width,
  },
  artistName: {
    fontSize: 23,
    color: "#FFF",
    fontFamily: "Helvetica Neue",
  },
  avatar: {
    marginBottom: 12,
  },
  playButton: {
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: "#f62976",
    borderRadius: 200,
  },
  playButtonText: {
    color: "#FFF",
    fontFamily: "Helvetica Neue",
    fontSize: 13,
  },
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
