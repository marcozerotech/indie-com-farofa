import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import * as actions from "./Services/store/actions";
import Header from "./Components/Header/Header";
import HomePage from "./Containers/HomePage/HomePage";

function App(props) {
  const { artists, posts, songs, fetchArtists, fetchPosts, fetchSongs } = props;

  useEffect(() => {
    fetchArtists();
    fetchPosts();
    fetchSongs();
  }, [fetchArtists, fetchPosts, fetchSongs]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/eventos" component={""} />
        <Route path="/novidades" render={(props) => <h2>NEWS SECTION</h2>} />
        <Route
          path="/"
          render={(props) => (
            <HomePage
              {...props}
              artists={artists}
              songs={songs}
              posts={posts}
            />
          )}
        />
      </Switch>
    </div>
  );
}

const mapStoreToProps = (store) => ({
  artists: store.artists.artists,
  songs: store.songs.songs,
  posts: store.posts.posts,
});

const mapActionsToProps = (dispatch) => ({
  fetchArtists: () => dispatch(actions.fetchArtits()),
  fetchPosts: () => dispatch(actions.fetchPosts()),
  fetchSongs: () => dispatch(actions.fetchSongs()),
});
export default connect(mapStoreToProps, mapActionsToProps)(App);
