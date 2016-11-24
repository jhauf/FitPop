import React from 'react';
import TrackScreen from './TrackScreen';
import { TouchableOpacity } from 'react-native';
import Video from 'react-native-video';


import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class TrackCell extends React.Component {
  constructor(props) {
    super(props);
  }

  selectTrack (track) {
   this.props.navigator.push({
     title: track.title,
     component: TrackScreen,
     passProps: {track}
    });
  }

render() {
 return (
   <TouchableOpacity onPress={() => this.selectTrack(this.props.track)} style={styles.rightContainer}>
     <View style={styles.trackCell}>
       <Image
         source={{uri: this.props.track.songs[0].albumImage}}
         style={styles.thumbnail} />
       <View style={styles.rightContainer}>
         <Text style={styles.trackTitle}>{this.props.track.songs[0].title}</Text>
       </View>
     </View>
   </TouchableOpacity>
 );
}
}
// <Video source={{uri: this.props.track.songs[0].url }}/>
// <Text style={styles.trackArtist}>{this.props.track.user.username}</Text>

const styles = StyleSheet.create({
  thumbnail: {
    width: 50,
    height: 50,
  },
  trackCell: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: 4,
   marginRight: 4,
   padding: 4,
   borderBottomWidth: .5,
   borderColor: 'lightgray'
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
 },
 rightContainer: {
   flex: 1,
 }
});
