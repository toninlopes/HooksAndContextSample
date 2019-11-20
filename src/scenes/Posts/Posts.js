import React, {useState, useEffect, useContext} from 'react';
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
import {postsContext} from '../../contexts';
import {
  getPostsAction,
  updatePostAction,
  deletePostAction,
} from '../../actionTypes';

const Posts = props => {
  const [{posts}, dispatch] = useContext(postsContext);
  const [isRefresing, setRefresh] = useState(false);

  keyExtractor = item => item.id.toString();

  fetchDataAsync = async () => {
    setRefresh(true);
    const {user} = props.navigation.state.params;
    const posts = await fetchPostsAsync(user.id);
    dispatch(getPostsAction(posts));
    setRefresh(false);
  };

  deletingPostAsync = async post => {
    const newPost = Object.assign({}, post, {
      deleting: true,
    });
    dispatch(updatePostAction(newPost));
    if (await deletePostAsync(post.id)) {
      dispatch(deletePostAction(post));
    }
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  renderItem = ({item}) => {
    return (
      <Post
        key={item.id}
        title={item.title}
        body={item.body}
        email={item.email}
        deleting={item.deleting}
        onDelete={async () => await deletingPostAsync(item)}
      />
    );
  };

  return (
    <FlatList
      data={posts.posts}
      refreshing={true}
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

Posts.navigationOptions = ({navigation}) => {
  const {user} = navigation.state.params || {};
  const navigateTo = () => navigation.navigate('savePost', {user: user});

  return {
    title: `Posts of ${user.name}`,
    headerRight: () => {
      if (Platform.OS === 'ios') {
        return <Button onPress={navigateTo} title="New Post" />;
      } else {
        return (
          <TouchableOpacity style={styles.statusBarButton} onPress={navigateTo}>
            <Text>{'New Post'}</Text>
          </TouchableOpacity>
        );
      }
    },
  };
};

export default Posts;

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
