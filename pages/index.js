import React from "react";
import Posts from "../components/posts";
import Query from "../components/query";
import POSTS_QUERY from "../apollo/queries/post/posts";

const Home = () => {
  return (
    <div>
      <div className="uk-section home-container">
        <div className="uk-container uk-container-large">
<<<<<<< Updated upstream
          <h2>Últimos articulos</h2>
=======
<<<<<<< Updated upstream
          <h1>Strapi blog</h1>
=======
          <h2 class="home-title">Últimos articulos</h2>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
          <Query query={POSTS_QUERY}>
            {({ data: { posts } }) => {
              return <Posts posts={posts} />;
            }}
          </Query>
          <button className="uk-button btn-load-more">Ver todos</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
