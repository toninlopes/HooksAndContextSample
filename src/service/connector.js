const POSTS_URI = 'https://jsonplaceholder.typicode.com';
const USER_PATH = `${POSTS_URI}/users`;
const POSTS_PATH = `${POSTS_URI}/posts`;

const fetchUsersAsync = async () => {
  try {
    const response = await fetch(`${USER_PATH}`);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(
      `fetchUsersAsync (ERROR) - ${JSON.stringify(error.message, null, 2)}`,
    );
  }
};

const fetchPostsAsync = async userId => {
  try {
    const endpoint = `${POSTS_PATH}?userId=${userId}`;
    const response = await fetch(endpoint);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log(
      `fetchPostsAsync (ERROR) - ${JSON.stringify(error.message, null, 2)}`,
    );
  }
};

const deletePostAsync = async postId => {
  try {
    const requestInit = {method: 'DELETE'};
    const response = await fetch(`${POSTS_PATH}/${postId}`, requestInit);
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(
      `deletePostAsync (ERROR) - ${JSON.stringify(error.message, null, 2)}`,
    );
  }
  return false;
};

const savePostAsync = async post => {
  try {
    const requestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(post),
    };
    const response = await fetch(`${POSTS_PATH}`, requestInit);
    const newPost = await response.json();
    return newPost;
  } catch (error) {
    console.log(
      `savePostAsync (ERROR) - ${JSON.stringify(error.message, null, 2)}`,
    );
  }
};

export {fetchUsersAsync, fetchPostsAsync, deletePostAsync, savePostAsync};
