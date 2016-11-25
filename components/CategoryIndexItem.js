import React from 'react';
import CategoryItemDetail from './CategoryItemDetail';
import { TouchableHighlight } from 'react-native';


import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  selectCategory(category) {
   this.props.navigator.push({
     title: category.title,
     component: CategoryItemDetail,
     passProps: {category}
    });
  }

render() {
 return (
   <TouchableHighlight onPress={() => this.selectCategory(this.props.category)} activeOpacity={ 100 } underlayColor="#ea4b54">
     <Image
          resizeMode='cover'
          source={{ uri: this.props.category.background }}>
   <View style={ styles.container }>
   <Text style={ styles.artistName }>{ this.props.category.name }</Text>
   <Text style={ styles.artistSongs }>{ this.props.category.songs.length } workouts</Text>
   </View>
   </Image>
   </TouchableHighlight>
 );
}
}

const styles = StyleSheet.create({
 container: {
   backgroundColor: 'rgba(0,0,0,0.7)',
   paddingTop: 20,
   paddingBottom: 60,
   paddingLeft: 20,
   paddingRight: 20,
 },
 artistName: {
   color: "#FFF",
   backgroundColor: 'transparent',
   fontFamily: "Helvetica Neue",
   fontWeight: "500",
   fontSize: 18,
   marginBottom: 5
 },
 artistSongs: {
   color: "#CCC",
   backgroundColor: 'transparent',
   fontFamily: "Helvetica Neue",
   fontWeight: "300",
   fontSize: 14
 }
});
