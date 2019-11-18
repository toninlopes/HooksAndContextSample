import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const User = props => {
  return (
    <TouchableOpacity style={styles.viewItem} onPress={props.onPress}>
      <View style={styles.thumbnail} />
      <View>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.subtitle}>{props.username}</Text>
        <Text style={styles.subtitle}>{props.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  viewItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 18,
  },
  thumbnail: {
    width: 40,
    height: 40,
    backgroundColor: '#f5f5',
    marginEnd: 12,
    marginTop: 12,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});
