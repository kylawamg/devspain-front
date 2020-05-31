import React from "react";
import PostDetail from "../../components/postDetail";
import Query from "../../components/query";
import POST_BY_ID_QUERY from "../../apollo/queries/post/postById";
import { useRouter } from "next/router";

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <div className="uk-section home-container">
        <div className="uk-container uk-container-large">
          <div uk-grid="true">
            <div className="uk-width-1 uk-width-2-3@m">
              <Query query={POST_BY_ID_QUERY} id={id}>
                {({ data: { post } }) => {
                  return <PostDetail post={post} />;
                }}
              </Query>
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
