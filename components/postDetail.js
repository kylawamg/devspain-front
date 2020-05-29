import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div>
      <img src={`http://localhost:1337${post.image.url}`} alt=""></img>
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostDetail;
