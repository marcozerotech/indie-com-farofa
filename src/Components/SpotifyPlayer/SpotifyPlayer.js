import React from "react";

const spotifyPlayer = (props) => (
  <section className="SpotifyPlayerSection">
    <h2>Nossa Playlist</h2>
    <iframe
      title="Nossa Playlist"
      src="https://open.spotify.com/embed/playlist/1da5KMUBSpMni2OwcUW115?si=P4crKgnRRnWExgQWAYOCsw"
      width="550"
      height="620"
      frameBorder="0"
      allow="encrypted-media"
      style={{
        padding: "1px",
        border: "5px solid #d1c89e",
        borderRadius: "5px",
        backgroundColor: "black",
      }}
    ></iframe>
  </section>
);

export default spotifyPlayer;
