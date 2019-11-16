import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class Post extends PureComponent {
  render() {
    return (
      <View style={styles.viewItem}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text>{this.props.body}</Text>
        <Text>{this.props.email}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={this.props.onDelete}>
          <Image
            source={require('../assets/rubbish-bin.png')}
            style={styles.imgStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewItem: {
    flex: 1,
    padding: 18,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  deleteButton: {
    alignItems: 'flex-end',
  },
  imgStyle: {
    width: 24,
    height: 24,
  },
});
