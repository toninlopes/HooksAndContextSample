import postsReducer from './postsReducer';

const mainReducers = (state, action) => ({
  //users: usersReducer(state.users, action),
  posts: postsReducer(state.posts, action),
});

export default mainReducers;
