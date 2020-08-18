import React from "react";
import { NavLink } from "react-router-dom";

const instaLogo =
  "https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/Instagram.webp";
const spotifyLogo =
  "https://static.wixstatic.com/media/d3ee8f_a21cd4b9e8c0499fb0a2f235b6b6d9b0~mv2.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/d3ee8f_a21cd4b9e8c0499fb0a2f235b6b6d9b0~mv2.webp";

const header = (props) => {
  return (
    <header className="AppHeader">
      <div className="HeaderMedia">
        <div className="IndieComFarofa">
          <div className="IndieComFarofaLogo"></div>
          <div className="IndieComFarofaText">
            <h1>Indie Com Farofa</h1>
            <h2>O Nordeste escuta</h2>
          </div>
        </div>
      </div>
      <div className="HeaderContent">
        <nav className="HeaderNavigation">
          <ul>
            <li className="NavLink">
              <NavLink>Início</NavLink>
            </li>
            <li className="NavLink">
              <NavLink>Novidades</NavLink>
            </li>
          </ul>
        </nav>
        <div className="SocialMedia">
          <p className="SocialEmail" aria-label="indie com farofa email">
            indiecomfarofa@gmail.com
          </p>
          <a href="http://instagram.com/indiecomfarofa">
            <img src={instaLogo} alt="instagram logo" />
          </a>
          <a href="https://open.spotify.com/playlist/1da5KMUBSpMni2OwcUW115?si=nVxkT1NfTvO67q61x3BxjA">
            <img src={spotifyLogo} alt="anchor link" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;
