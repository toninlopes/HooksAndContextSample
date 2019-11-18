import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, RefreshControl} from 'react-native';
import {User} from './components';
import {fetchUsersAsync} from '../../service/connector';

const Users = props => {
  const [users, setUsers] = useState([]);
  const [isRefresing, setRefresh] = useState(false);

  keyExtractor = item => item.id.toString();

  fetchDataAsync = async () => {
    setRefresh(true);
    const users = await fetchUsersAsync();
    setUsers(users);
    setRefresh(false);
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  navigateToPosts = async user => {
    props.navigation.navigate('posts', {user: user});
  };

  renderItem = ({item}) => {
    return (
      <User
        name={item.name}
        email={item.email}
        username={item.username}
        onPress={() => navigateToPosts(item)}
      />
    );
  };

  return (
    <FlatList
      data={users}
      refreshing={isRefresing}
      refreshControl={
        <RefreshControl
          refreshing={isRefresing}
          onRefresh={async () => await fetchDataAsync()}
        />
      }
      extraData={props}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default Users;

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginLeft: 12,
    marginRight: 12,
  },
});
