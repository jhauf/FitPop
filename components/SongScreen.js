import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, ListView } from 'react-native';
import Video from 'react-native-video';
import PlayerUI from './Player';





export default class SongScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <PlayerUI song={this.props.song}/>
        <Text style={ styles.songTitle }>{this.props.song.title}</Text>
      </View>
    );
  }
}
// <Image
//   source={{ uri: this.props.song.albumImage }}>
// </Image>
// <Video source={{uri: this.props.song.url }}/>


const styles = StyleSheet.create({
  songTitle: {
    color: "black",
    fontFamily: "Helvetica Neue",
    marginBottom: 5,
  }
});
