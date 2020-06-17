import React from "react";
import Link from "next/link";
import "../assets/scss/card.scss";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const Card = ({ post }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? post.image.url
      : process.env.API_URL + post.image.url;
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <Link
            href={`${publicRuntimeConfig.basePath || ""}/post/[id]`}
            as={`/post/${post.id}`}
          >
            <a>
              <img
                className="img-card"
                src={`http://64.225.72.200${post.image.url}`}
                alt=""
              ></img>
            </a>
          </Link>
        </div>

        <div className="uk-card-body">
          <Link
            href={`${publicRuntimeConfig.basePath || ""}/post/[id]`}
            as={`/post/${post.id}`}
          >
            <a>
              <h3 className="uk-card-title">{post.title}</h3>
            </a>
          </Link>
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
