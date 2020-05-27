import React from "react";
import Link from "next/link";

const Card = ({ post }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? post.image.url
      : process.env.API_URL + post.image.url;
  return <div>{post.title}</div>;
};

export default Card;
