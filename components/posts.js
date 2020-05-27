import React from "react";
import Card from "./card";

const Posts = ({ posts }) => {
  const leftPostsCount = Math.ceil(posts.length / 5);

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {posts.map((post, i) => {
            return <Card post={post} key={`post${post.id}`} />;
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Posts;
