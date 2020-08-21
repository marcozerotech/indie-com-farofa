import React, { useEffect, useState } from "react";

import Presentation from "../../Components/Presentation/Presentation";
import ContentSection from "../ContentSection/ContentSection";

function HomePage(props) {
  let display = <h2>Loading...</h2>;
  console.log(props.posts);
  if (props.artists && props.posts && props.songs) {
    display = (
      <div className="HomePage">
        <Presentation />
        <ContentSection
          recentPosts={props.posts.reverse().filter((post, index) => index < 2)}
          recentSongs={props.songs.reverse().filter((song, index) => index < 2)}
        />
      </div>
    );
  }
  return display;
}

export default HomePage;
