import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

const Post = props => {
  const disableStyle = props.deleting ? styles.disable : null;

  return (
    <View style={[styles.viewItem, disableStyle]}>
      {props.deleting && (
        <ActivityIndicator size="large" style={styles.activity} />
      )}
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
  deleting: PropTypes.bool,
};

const styles = StyleSheet.create({
  viewItem: {
    flex: 1,
    padding: 18,
  },
  disable: {
    backgroundColor: '#F5F5F5',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
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
