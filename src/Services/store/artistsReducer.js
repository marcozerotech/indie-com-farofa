const INITIAL_STATE = {
  artists: null,
  loading: false,
  error: false,
};

function reducer(store = INITIAL_STATE, action) {
  if (action.type === "ARTISTS_STATUS") {
    return { ...store, loading: action.loading, error: action.error };
  }
  if (action.type === "SET_ARTISTS") {
    return { ...store, artists: action.artistsArr };
  }
  return store;
}

export default reducer;
