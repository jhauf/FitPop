'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
var Sound = require('react-native-sound');

export default class Player extends Component {
  render() {
    return <View style={styles.container}>
             <TouchableOpacity onPress={this.playSound}>
               <Text style={styles.button}>play</Text>
             </TouchableOpacity>
           </View>;
  }

  playSound() {
    var s = new Sound(this.props.song.url, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', s.getDuration());
        s.play();
      }
    });
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
});
