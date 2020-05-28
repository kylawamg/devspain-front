import React from "react";
import Link from "next/link";
import "../assets/scss/card.scss";
const Card = ({ post }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? post.image.url
      : process.env.API_URL + post.image.url;
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img src={`http://localhost:1337${post.image.url}`} alt=""></img>
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{post.title}</h3>
          <a className="category-text" href="#">
            {post.category.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
