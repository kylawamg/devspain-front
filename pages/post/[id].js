import React from "react";
import PostDetail from "../../components/postDetail";
import Query from "../../components/query";
import POST_BY_ID_QUERY from "../../apollo/queries/post/postById";
import { useRouter } from "next/router";

const PostDetailPage = () => {
  const router = useRouter();
  debugger;
  const { id } = router.query;
  return (
    <div>
      <div className="uk-section home-container">
        <div className="uk-container uk-container-large">
          <h2 className="home-title">Últimos articulos</h2>
          <Query query={POST_BY_ID_QUERY} id={id}>
            {({ data: { post } }) => {
              return <PostDetail post={post} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
