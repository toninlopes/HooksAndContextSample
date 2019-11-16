import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  RefreshControl,
  TouchableOpacity,
  Text,
  Button,
  Platform,
} from 'react-native';
import {Post} from './components';
import {fetchPostsAsync, deletePostAsync} from '../../service/connector';

export default class Posts extends Component {
  static navigationOptions = ({navigation}) => {
    const {user} = navigation.state.params || {};
    const navigateTo = () => navigation.navigate('savePost', {user: user});

    return {
      title: `Posts of ${user.name}`,
      headerRight: () => {
        if (Platform.OS === 'ios') {
          return <Button onPress={navigateTo} title="New Post" />;
        } else {
          return (
            <TouchableOpacity
              style={styles.statusBarButton}
              onPress={navigateTo}>
              <Text>{'New Post'}</Text>
            </TouchableOpacity>
          );
        }
      },
    };
  };

  state = {
    posts: [],
    isRefresing: false,
  };

  render() {
    return (
      <FlatList
        data={this.state.posts}
        refreshing={true}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefresing}
            onRefresh={async () => await this.fetchDataAsync()}
          />
        }
        extraData={this.state}
        keyExtractor={this.keyExtractor.bind(this)}
        renderItem={this.renderItem.bind(this)}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }

  keyExtractor = item => item.id.toString();

  renderItem = ({item}) => {
    return (
      <Post
        {...item}
        key={item.id}
        deleting={item.deleting}
        onDelete={async () => await this.deletingPostAsync(item)}
      />
    );
  };

  fetchDataAsync = async () => {
    this.setState({isRefresing: true});
    const {user} = this.props.navigation.state.params;
    const posts = await fetchPostsAsync(user.id);
    this.setState({posts: posts, isRefresing: false});
  };

  deletingPostAsync = async post => {
    if (await deletePostAsync(post.id)) {
      const newPosts = this.state.posts.filter(item => item.id !== post.id);
      this.setState({posts: newPosts});
    }
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
  statusBarButton: {
    margin: 12,
  },
});
