import React from 'react';
import TrackCell from './TrackCell';
import TimerMixin from 'react-timer-mixin';

import {
  AppRegistry,
  ListView,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

let SOUNDCLOUD_CLIENT_ID = 'ff3108ddadaeeea1c2cd56d0b3617255';
import { Artists } from '../MockData';

// let mockedData = [{
//   "genre":"Deep House",
//   title: "Coffee (Manhattoes Remix)",
//   user:  {
//     username: "manhattoes"
//   },
//   artwork_url: "https://i1.sndcdn.com/artworks-000107004661-v4xg0d-large.jpg",
//   stream_url: "https://api.soundcloud.com/tracks/191554493/stream"
//   },
//   {genre: "Bass",
//   title: "Threadsafe",
//   user: {
//     username: "manhattoes"
//   },
//   artwork_url: "https://i1.sndcdn.com/artworks-000104588970-5kyi09-large.jpg",
//   stream_url: "https://api.soundcloud.com/tracks/187885871/stream"
// }];
//

// this.onSearchChange = this.onSearchChange.bind(this);
// this.fetchEndpoint = 'https://api.soundcloud.com/tracks.json?client_id=' + SOUNDCLOUD_CLIENT_ID;
// this.renderSearchBar = this.renderSearchBar.bind(this);
// this.fetchData = this.fetchData.bind(this);

export default class BrowseTracksView extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.renderTrack = this.renderTrack.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(Artists)
    };
    this.timeoutID = null;
    this.mixins = [TimerMixin];
  }

  // onSearchChange (e) {
  //   let q = e.nativeEvent.text.toLowerCase();
  //   clearTimeout(this.timeoutID);
  //   this.timeoutID = setTimeout(() => this.fetchData(q), 100);
  // }





  // fetchData() {
  //   this.setState({
  //     dataSource: this.state.dataSource.cloneWithRows(mockedData)
  //   });
  // }


// renderSearchBar () {
//   return (
//     <View style={styles.searchCell}>
//       <TextInput onChange={this.onSearchChange} placeholder={'Search Here'} style={styles.searchContainer}/>
//     </View>
//   );
// }




  renderTrack(track) {
    return (
      <TrackCell navigator={this.props.navigator} track={track}/>
    );
  }


  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTrack}
        style={styles.listView}/>
    );
  }

}
// renderHeader={this.renderSearchBar}

const styles = StyleSheet.create({
  listView: {
     backgroundColor: '#F5FCFF'
  },
  searchCell: {
    flex: 1,
    flexDirection: 'row'
  },
    searchContainer: {
    height: 40,
    width: 100,
    flex: 1,
    margin: 4,
    padding: 4,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1
 },
});
