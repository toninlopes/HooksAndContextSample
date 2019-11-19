import {GET_POSTS} from '../actionTypes';

const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default postsReducer;
