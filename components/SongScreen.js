import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, ListView } from 'react-native';
import Video from 'react-native-video';



export default class SongScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Image
             source={{ uri: this.props.song.albumImage }}>
        </Image>
        <Text style={ styles.songTitle }>{this.props.song.title}</Text>
        <Video source={{uri: this.props.song.url }}/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  songTitle: {
    color: "black",
    fontFamily: "Helvetica Neue",
    marginBottom: 5,
  }
});
