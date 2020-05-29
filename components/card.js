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
        </div>
        <div className="uk-card-foot">
          <span className="secondary-card-text">
            By:{" "}
            <a className="secondary-card-text blue-text" href="#">
              {post.user.username}
            </a>
          </span>
          <a className="secondary-card-text blue-text right" href="#">
            {post.category.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
