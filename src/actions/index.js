import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  // Bad!!! cannot be done like this.
  // Action creators must return plain objects
  const response = await jsonPlaceholder.get('/posts');
  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};
