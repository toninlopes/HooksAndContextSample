import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Users, Posts, SavePost} from '../scenes/';

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
