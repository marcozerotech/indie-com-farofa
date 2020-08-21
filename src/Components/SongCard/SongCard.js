import React from "react";
import "./SongCard.scss";

const dummy =
  "https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip";

const songCard = (props) => (
  <article className="SongCard">
    <div
      className="SongCardImg"
      onClick={() => window.location.assign(props.spotifyLink)}
    >
      {/* <a href={props.spotifyLink}></a> */}
      <img
        height="70px"
        width="100px"
        src={props.thumbnail || dummy}
        alt={props.title}
      />
    </div>
    <div className="SongInfo">
      <h4>{props.title}</h4>
      <p>{props.artist || "Vinicius Marçal"}</p>
    </div>
  </article>
);

export default songCard;
