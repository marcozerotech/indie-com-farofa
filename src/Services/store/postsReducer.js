const INITIAL_STATE = {
  posts: null,
  loading: false,
  error: false,
};

function reducer(store = INITIAL_STATE, action) {
  if (action.type === "POSTS_STATUS") {
    return { ...store, loading: action.loading, error: action.error };
  }
  if (action.type === "SET_POSTS") {
    return { ...store, posts: action.postsArr };
  }
  return store;
}

export default reducer;
