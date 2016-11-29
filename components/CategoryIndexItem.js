import React from 'react';
import CategoryItemDetail from './CategoryItemDetail';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  selectCategory(category) {
   this.props.navigator.push({
     title: category.name,
     component: CategoryItemDetail,
     passProps: {category}
    });
  }

render() {
 return (
   <TouchableHighlight onPress={() => this.selectCategory(this.props.category)}>
     <Image
      resizeMode='cover'
      source={{ uri: this.props.category.background }}
      >
   <View style={ styles.container }>
     <Text style={styles.categoryName}>{this.props.category.name}</Text>
     <Text style={styles.categorySongs}>{this.props.category.songs.length} workouts</Text>
   </View>
   </Image>
   </TouchableHighlight>
 );
}
}

const styles = StyleSheet.create({
 container: {
   paddingTop: 20,
   paddingBottom: 60,
   paddingLeft: 20,
   paddingRight: 20,
   backgroundColor: 'rgba(0,0,0,0.5)'
 },
 categoryName: {
   fontSize: 20,
   color: "#FFFFFF",
   fontFamily: "Helvetica Neue",
   fontWeight: "500",
 },
 categorySongs: {
   fontSize: 16,
   color: "#CCCCCC",
   fontFamily: "Helvetica Neue",
   fontWeight: "300",
 }
});
