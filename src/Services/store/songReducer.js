const INITIAL_STATE = {
  songs: null,
  loading: false,
  error: false,
};

function reducer(store = INITIAL_STATE, action) {
  if (action.type === "SONGS_STATUS") {
    return { ...store, loading: action.loading, error: action.error };
  }
  if (action.type === "SET_SONGS") {
    return { ...store, songs: action.songsArr };
  }
  //ADDING & DELETING => UI UPDATES + DATABASE UPDATES W/ THUNK
  return store;
}

export default reducer;
