import {GET_POSTS, ADD_POST} from '../actionTypes';

const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case ADD_POST:
      const newPosts = state.posts;
      newPosts.unshift(action.post);
      return {
        ...state,
        posts: newPosts,
      };
    default:
      return state;
  }
};

export default postsReducer;
