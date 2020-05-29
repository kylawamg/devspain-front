import React from "react";
import Card from "./card";

const Posts = ({ posts }) => {
  const leftPostsCount = Math.ceil(posts.length / 5);

  return (
    <div>
      <div
        className="uk-grid uk-grid-match uk-child-width-1-3@s uk-flex-left"
        uk-grid="true"
      >
        {posts.map((post, i) => {
          return <Card post={post} key={`post${post.id}`} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
