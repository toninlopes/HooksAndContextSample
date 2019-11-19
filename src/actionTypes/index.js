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
