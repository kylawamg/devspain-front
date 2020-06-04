import React from "react";
import PostDetail from "../../components/postDetail";
import POST_BY_ID_QUERY from "../../apollo/queries/post/postById";
import POSTS_QUERY from "../../apollo/queries/post/posts";

import { useRouter } from "next/router";
import { request } from "../../utils/api";
export async function getStaticPaths() {
  const data = await request({
    query: POSTS_QUERY,
  });
  const paths = data.posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const data = await request({
    query: POST_BY_ID_QUERY,
    variables: { id: params.id },
  });
  return {
    props: data,
  };
}

const PostDetailPage = ({ post }) => {
  return (
    <div>
      <div className="uk-section home-container">
        <div className="uk-container uk-container-large">
          <div uk-grid="true">
            <div className="uk-width-1 uk-width-2-3@m">
              <PostDetail post={post} />;
            </div>
            <div className="uk-width-1 uk-width-1-3@m">
              <h2>columns</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
