import Link from "next/link";
import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div className="post-detail-content">
      <article>
        <div
          className="article__image"
          style={{
            width: "100%",
            backgroundImage: `url(http://64.225.72.200${post.image.url})`,
          }}
        ></div>
        <div className="article__content">
          <div className="article__header">
            <h1>{post.title}</h1>
            <span>{post.published_at}</span>
            <span className="divider-dot"></span>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a>
                <span>{post.category.name}</span>
              </a>
            </Link>
          </div>
          <div className="article__body">{post.content}</div>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
