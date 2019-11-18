import React, {Component} from 'react';
import {StyleSheet, FlatList, View, RefreshControl} from 'react-native';
import {User} from './components';
import {fetchUsersAsync} from '../../service/connector';

export default class Users extends Component {
  state = {
    users: [],
    isRefresing: false,
  };

  render() {
    return (
      <FlatList
        data={this.state.users}
        refreshing={this.state.isRefresing}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefresing}
            onRefresh={async () => await this.fetchDataAsync()}
          />
        }
        extraData={this.props}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }

  keyExtractor = item => item.id.toString();

  renderItem = ({item}) => {
    return (
      <User
        name={item.name}
        email={item.email}
        username={item.username}
        onPress={() => this.navigateToPosts(item)}
      />
    );
  };

  fetchDataAsync = async () => {
    this.setState({isRefresing: true});
    const users = await fetchUsersAsync();
    this.setState({users, isRefresing: false});
  };

  navigateToPosts = async user => {
    this.props.navigation.navigate('posts', {user: user});
  };

  componentDidMount() {
    this.fetchDataAsync();
  }
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginLeft: 12,
    marginRight: 12,
  },
});
