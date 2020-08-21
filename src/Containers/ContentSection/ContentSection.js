import React from "react";
import "./ContentSection.scss";

import SpotifyPlayer from "../../Components/SpotifyPlayer/SpotifyPlayer";
import RecentPosts from "../../Components/RecentPosts/RecentPosts";
import RecentSongs from "../../Components/RecentSongs/RecentSongs";

function ContentSection(props) {
  return (
    <div className="ContentSection">
      <SpotifyPlayer />
      <RecentPosts posts={props.recentPosts} />
      <RecentSongs songs={props.recentSongs} />
      {
        //recent posts
        //Spotify player
        //Recent Releases
      }
    </div>
  );
}

export default ContentSection;
