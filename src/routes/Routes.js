import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Users from '../scenes/Users';
import Posts from '../scenes/Posts';
import SavePost from '../scenes/SavePost';

const AppNavigator = createStackNavigator({
  users: {
    screen: Users,
    navigationOptions: {
      title: 'Users',
    },
  },
  posts: {
    screen: Posts,
  },
  savePost: {
    screen: SavePost,
  },
});

export default createAppContainer(AppNavigator);
