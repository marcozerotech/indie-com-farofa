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
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/indie-com-farofa-demo.appspot.com/o/planner.jpg?alt=media&token=27bee52d-d6c4-409b-94a6-a2fdc6afb9dc"
          }
          alt="planner"
        />
      </div>
    );
  }
  return display;
}

export default HomePage;
