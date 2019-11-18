import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <View style={styles.viewItem}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>{props.body}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
        <Image
          source={require('../../../assets/rubbish-bin.png')}
          style={styles.imgStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Post;

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

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
