import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.scss";

const dummy =
  "https://www.indieweek.com/wp-content/uploads/2020/06/4f0b8bd4-d265-4a3f-9e51-fc28991d61a0-e1593531395203.png";

const blogPostCard = (props) => (
  <article
    className="PostCard"
    style={{
      backgroundImage: `url(${props.thumbnail || dummy})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Link to={"/novidades/" + props.id}>
      <h4>{props.title}</h4>
      <p>{props.date || "XX/XX/2020"}</p>
    </Link>
  </article>
);

export default blogPostCard;
