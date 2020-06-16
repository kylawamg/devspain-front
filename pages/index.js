import React from "react";
import Posts from "../components/posts";
import POSTS_QUERY from "../apollo/queries/post/posts";
import { request } from "../utils/api";
export async function getStaticProps() {
  const data = await request({
    query: POSTS_QUERY,
  });
  return {
    props: data,
  };
}
const Home = ({ posts }) => {
  return (
    <div>
      <div className="uk-section home-container">
        <div className="uk-container uk-container-large">
          <h2 className="home-title">Últimos articulosssssss</h2>
          <Posts posts={posts} />
          <a href="/articles" className="uk-button btn-load-more">
            Ver todos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
