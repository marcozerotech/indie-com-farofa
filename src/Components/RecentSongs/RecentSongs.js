import React from "react";

import SongCard from "../SongCard/SongCard";

function RecentSongs(props) {
  return (
    <section className="RecentSongs">
      <h2>Lançamentos Recentes</h2>
      <p className="SectionDescription">
        Cada novidade musical mexe com alguma pessoa, e nessa seção você pode
        descobrir seu próximo xodó musical. Veja aqui os últimos lançamentos dos
        artístas associados à Indie com Farofa.
      </p>
      <div className="SongList">
        {props.songs.map((song, index) =>
          song ? (
            <SongCard
              key={song.id + index}
              title={song.title}
              thumbnail={props.thumbnail}
              date={props.date}
              spotifyLink={song.spotifyLink}
            />
          ) : null
        )}
      </div>
    </section>
  );
}

export default RecentSongs;
