
import {
  AppRegistry,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import Slider from 'react-native-slider';
var TimerMixin = require('react-timer-mixin');

const window = Dimensions.get('window');

var Player = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
   return {
     playing: false,
     muted: false,
     songDuration: this.props.song.songDuration,
     currentTime: 0,
     timer: 0,
 };
},

componentWillUnmount: function () {
  this.clearInterval(this.timer);
},

 Play: function() {
   this.setState({ playing: true });
   this.timer = this.setInterval( () => {
     this.setState({
       currentTime: this.state.currentTime + 1
     });
   }, 1000);
 },

 Pause: function() {
  this.setState({ playing: false });
   this.clearInterval(this.timer);
   this.timer = 0;
 },
 withLeadingZero(amount){
  if (amount < 10 ){
    return `0${ amount }`;
  } else {
    return `${ amount }`;
  }
},

formattedTime( timeInSeconds ){
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds - minutes * 60;

  if( isNaN(minutes) || isNaN(seconds) ){
    return "";
  } else {
    return(`${ this.withLeadingZero( minutes ) }:${ this.withLeadingZero( seconds.toFixed(0) ) }`);
  }
},


    toggleVolume: function(){
      this.setState({ muted: !this.state.muted });
    },

    render: function () {
      let songPlaying = this.props.song;
      let songPercentage;
      if( this.state.songDuration !== undefined ){
        songPercentage = this.state.currentTime / this.state.songDuration;
      } else {
        songPercentage = 0;
      }

      let playButton;
      if( this.state.playing ){
        playButton = <Icon onPress={ this.Pause} style={ styles.play } name="ios-pause" size={70} color="#fff" />;
      } else {
        playButton = <Icon onPress={ this.Play } style={ styles.play } name="ios-play" size={70} color="#fff" />;
      }

      let volumeButton;
      if( this.state.muted ){
        volumeButton = <Icon onPress={ this.toggleVolume } style={ styles.volume } name="ios-volume-off" size={18} color="#fff" />;
      } else {
        volumeButton = <Icon onPress={ this.toggleVolume } style={ styles.volume } name="ios-volume-up" size={18} color="#fff" />;
      }

      let image = songPlaying.albumImage;
      return (
        <View style={styles.container}>
          <View>
          <Video source={{uri: songPlaying.url }}
            ref = "audio"
              volume={ this.state.muted ? 0 : 1.0}
              muted={false}
              paused={!this.state.playing}
              resizeMode="cover"
              />
            </View>
          <View style={ styles.header }>
          </View>
          <Image
            style={ styles.songImage }
            source={{uri: image,
                          width: window.width - 30,
                          height: 300}}/>
          <Text style={ styles.songTitle }>
            { songPlaying.title }
          </Text>
          <Text style={ styles.albumTitle }>
            { songPlaying.album }
          </Text>
          <View style={ styles.sliderContainer }>
            <Slider
              minimumTrackTintColor='#851c44'
              style={ styles.slider }
              trackStyle={ styles.sliderTrack }
              thumbStyle={ styles.sliderThumb }
              value={ songPercentage }/>
              <View style={ styles.timeInfo }>
             <Text style={ styles.time }>{ this.formattedTime(this.state.currentTime)  }</Text>
             <Text style={ styles.timeRight }>- { this.formattedTime( this.state.songDuration - this.state.currentTime ) }</Text>
           </View>
          </View>
          <View style={ styles.controls }>
            { playButton }
            { volumeButton }
          </View>
        </View>
      );
    }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    marginTop: 17,
    marginBottom: 17,
    width: window.width,
  },
  headerClose: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 20,
  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
  shuffle: {
    marginTop: 26,
  },
  volume: {
    marginTop: 26,
  },
  sliderContainer: {
    width: window.width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#f62976',
    borderRadius: 10 / 2,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

module.exports = Player;
