import { createStore, applyMiddleware, combineReducers } from "redux";
import Thunk from "redux-thunk";
import artistReducer from "./artistsReducer";
import songReducer from "./songReducer";
import postsReducer from "./postsReducer";

const store = createStore(
  combineReducers({
    artists: artistReducer,
    songs: songReducer,
    posts: postsReducer,
  }),
  applyMiddleware(Thunk)
);

export default store;
