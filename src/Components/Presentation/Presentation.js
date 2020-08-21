import React from "react";
import "./Presentation.scss";

const presentation = (props) => {
  return (
    <div className="MainPresentation">
      <div className="PresentArea">
        <div className="PresentContent">
          <article className="PresentText">
            <h1>
              Indie com
              <br />
              Farofa
            </h1>
            <h2>
              Uma união dos artistas da cena independente nordestina alternativa
            </h2>
            <p>
              O indie é muito mais que um estilo musical, é uma estética, um
              estilo de vida. Uma mistura de vários ritmos, várias cores, vários
              formatos, várias músicas.
              <br /> Com o intuito de mostrar o que surge no Nordeste, a
              iniciativa Indie com Farofa juntou artistas e bandas dessa região,
              que trás em sua veia xaxado, baião, frevo, maracatu, choro, samba,
              rock... e Indie.
              <br /> Música boa, música de nossa gente, música de hoje em dia,
              música com farofa; <br />
              Indie com Farofa
            </p>
          </article>
          <div className="PresentLinks">
            <a
              className="PlaylistLink"
              href="https://open.spotify.com/playlist/1da5KMUBSpMni2OwcUW115?si=Zw6C6vzhQzWe0I4mRXt03w"
              target="blank"
            >
              Playlist no Spotify
            </a>
            <a
              className="DesignerLink"
              href="https://www.instagram.com/designmeloleticia/"
              target="blank"
            >
              Arte de Leticia Melo
            </a>
            {/* <iframe
              title="Siga Nossa Playlist"
              src="https://open.spotify.com/follow/1/?uri=spotify:artist:6sFIWsNpZYqfjUpaCgueju&size=detail&theme=dark"
              width="300"
              height="56"
              scrolling="no"
              frameborder="0"
              style={{ border: "none", overflow: "hidden" }}
              allowtransparency="true"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default presentation;
