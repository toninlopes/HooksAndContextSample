export const GET_POSTS = 'GET_POSTS';
export const getPostsAction = posts => ({
  type: GET_POSTS,
  posts,
});

export const ADD_POST = 'ADD_POST';
export const addPostAction = post => ({
  type: ADD_POST,
  post,
});

export const UPDATE_POST = 'UPDATE_POST';
export const updatePostAction = post => ({
  type: UPDATE_POST,
  post,
});

export const DELETE_POST = 'DELETE_POST';
export const deletePostAction = post => ({
  type: DELETE_POST,
  post,
});
