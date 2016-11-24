import React from 'react';


import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const NowPlayingFooterView = ({nowPlaying}) => {
      return !nowPlaying ? (  <View style={styles.nowPlayingFooter}>
          <Text style={styles.trackTitle}>Welcome!</Text>
          <Text style={styles.trackArtist}>No Track Right Now</Text>
        </View>) :
      (<View style={styles.nowPlayingFooter}>
       <Text style={styles.trackTitle}>{nowPlaying.title}</Text>
     </View>);
};



export default NowPlayingFooterView;

const styles = StyleSheet.create({
  nowPlayingFooter: {
    flex: 0,
    borderTopWidth: 1
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
