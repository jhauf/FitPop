import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import Slider from 'react-native-slider';
import TimerMixin from 'react-timer-mixin';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Player = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function () {
    return {
      playing: false,
      muted: false,
      songDuration: this.props.song.songDuration,
      currentTime: 0,
      timer: 0
    };
  },

  componentWillUnmount: function () {
    this.clearInterval(this.timer);
  },

  Play: function () {
    this.setState({ playing: true });
    this.timer = this.setInterval( () => {
      this.setState({
        currentTime: this.state.currentTime + 1
      });
    }, 1000);
  },

  Pause: function () {
    this.setState({ playing: false });
    this.clearInterval(this.timer);
    this.timer = 0;
  },


  toggleVolume: function (){
    this.setState({ muted: !this.state.muted });
  },

  zeroFormatter: function (amount){
    return amount < 10 ? `0${ amount }` : `${ amount }`;
  },

  formattedTime: function (sec){
    let minutes = Math.floor(sec / 60);
    let seconds = sec - minutes * 60;
    return(`${this.zeroFormatter(minutes)}:${ this.zeroFormatter(seconds.toFixed(0)) }`);
  },

  render: function () {
    let songPercentage = this.state.currentTime / this.state.songDuration;

    return (
      <View style={styles.container}>
        <View>
          <Video source={{uri: this.props.song.url}}
              volume={ this.state.muted ? 0 : 1.0}
              muted={false}
              paused={!this.state.playing}
              resizeMode="cover"/>
        </View>
      <Image
        style={styles.songImage}
        source={{uri: this.props.song.albumImage, width: 300, height: 260}}/>
      <Text style={styles.songText}>
        {this.props.song.title}
      </Text>
      <View style={styles.sliderContainer}>
        <Slider
          minimumTrackTintColor='#2196f3'
          style={styles.slider}
          value={songPercentage}
          trackStyle={styles.sliderTrack}
          thumbStyle={styles.sliderThumb}/>
          <View style={styles.timeInfo}>
         <Text style={styles.time}>{this.formattedTime(this.state.currentTime)}</Text>
         <Text style={styles.timeRight}>- {this.formattedTime(this.state.songDuration - this.state.currentTime)}</Text>
       </View>
      </View>
      <View style={styles.controls}>
        {this.state.playing ? <Icon onPress={this.Pause} style={styles.play} name="ios-pause" size={70} color="#fff" /> :
        <Icon onPress={this.Play} style={styles.play} name="ios-play" size={70} color="#fff" />}

        {this.state.muted ? <Icon onPress={this.toggleVolume} style={styles.volume} name="ios-volume-off" size={40} color="#fff" /> :
        <Icon onPress={this.toggleVolume} style={styles.volume} name="ios-volume-up" size={40} color="#fff" />}
      </View>
    </View>);
  }
  });



  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  songImage: {
    marginTop: 100,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black'


  },
  songText: {
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19,
    color: "black",
    fontFamily: "Helvetica Neue",
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  play: {
    marginRight: 50,
    marginLeft: 50,
  },
  volume: {
    marginTop: 15,
  },
  sliderContainer: {
    width: 300,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#fff',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#fff',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#442082',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: "#ff5722",
    borderRadius: 5,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

module.exports = Player;
