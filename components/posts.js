import React from "react";
import Card from "./card";

const Posts = ({ posts }) => {
  const leftPostsCount = Math.ceil(posts.length / 5);

  return (
    <div>
<<<<<<< Updated upstream
      <div
        className="uk-grid uk-grid-match uk-child-width-1-3@s uk-flex"
=======
<<<<<<< Updated upstream
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {posts.map((post, i) => {
            return <Card post={post} key={`post${post.id}`} />;
          })}
        </div>
        <div></div>
=======
      <div
        className="uk-grid uk-grid-match uk-child-width-1-3@s uk-flex-left"
>>>>>>> Stashed changes
        uk-grid="true"
      >
        {posts.map((post, i) => {
          return <Card post={post} key={`post${post.id}`} />;
        })}
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Posts;
