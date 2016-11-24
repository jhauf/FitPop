import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import Video from 'react-native-video';


export default class TrackScreen extends React.Component {
  render () {
    var largeImageUrl = this.props.track.background ? this.props.track.background.replace('-large', '-t300x300') : '';
    return (
      <View style={styles.trackScreen}>
       <Image
          style={styles.largeArtwork}
          source={{uri: largeImageUrl}}>
        </Image>
        <Text style={styles.trackTitle}>{this.props.track.songs[0].title}</Text>
          <Video source={{uri: this.props.track.songs[0].url }}/>
        <View style={styles.buttonRow}>
          <TouchableHighlight style={styles.playButton}>
            <Text style={styles.playButtonText}>Play Track</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  largeArtwork: {
    width: 300,
    height: 300
  },
  playButton: {
    backgroundColor: '#4472B9',
    margin: 4,
    padding: 4,
    borderRadius: 4,
    flex: 1
  },
  playButtonText: {
    color: 'white',
    fontSize: 20
  },
  trackScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  trackTitle: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  trackArtist: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: 'center',
  }
});
