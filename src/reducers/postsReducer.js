import {GET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST} from '../actionTypes';

const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    case ADD_POST: {
      const newPosts = state.posts;
      newPosts.unshift(action.post);
      return {
        ...state,
        posts: newPosts,
      };
    }
    case UPDATE_POST: {
      const updatePosts = state.posts;
      const updatePostFiltered = updatePosts.filter(
        p => p.id === action.post.id,
      );
      const index = updatePosts.indexOf(updatePostFiltered[0]);
      if (index > -1) {
        updatePosts[index] = action.post;
      }
      return {
        ...state,
        posts: updatePosts,
      };
    }
    case DELETE_POST: {
      const deletePosts = state.posts;
      const deletePostFiltered = deletePosts.filter(
        p => p.id === action.post.id,
      );
      const index = deletePosts.indexOf(deletePostFiltered[0]);
      if (index > -1) {
        deletePosts.splice(index, 1);
      }
      return {
        ...state,
        posts: deletePosts,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
