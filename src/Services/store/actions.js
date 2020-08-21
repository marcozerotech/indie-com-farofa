import axios from "axios";

// export function INITIAL_FETCH() {
//   return function (dispatch) {};
// }

export function fetchArtits() {
  return function (dispatch) {
    dispatch({ type: "ARTISTS_STATUS", loading: true, error: false });
    axios
      .get("https://indie-com-farofa-demo.firebaseio.com/artists.json")
      .then((res) => {
        dispatch({ type: "ARTISTS_STATUS", loading: false, error: false });
        dispatch({ type: "SET_ARTISTS", artistsArr: res.data || [] });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ARTISTS_STATUS", loading: false, error: err });
      });
  };
}

export function fetchPosts() {
  return function (dispatch) {
    dispatch({ type: "POSTS_STATUS", loading: true, error: false });
    axios
      .get("https://indie-com-farofa-demo.firebaseio.com/posts.json")
      .then((res) => {
        dispatch({ type: "POSTS_STATUS", loading: false, error: false });
        dispatch({
          type: "SET_POSTS",
          postsArr: Object.values(res.data || []),
        });
      })
      .catch((err) => {
        dispatch({ type: "POSTS_STATUS", loading: false, error: err });
      });
  };
}

export function fetchSongs() {
  return function (dispatch) {
    dispatch({ type: "SONGS_STATUS", loading: true, error: false });
    axios
      .get("https://indie-com-farofa-demo.firebaseio.com/songs.json")
      .then((res) => {
        dispatch({ type: "SONGS_STATUS", loading: false, error: false });
        dispatch({ type: "SET_SONGS", songsArr: res.data || [] });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "SONGS_STATUS", loading: false, error: err });
      });
  };
}
