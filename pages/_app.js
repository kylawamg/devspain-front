import React from "react";
import Head from "next/head";
import "../assets/scss/style.scss";
import Nav from "../components/nav";
import Footer from "../components/footer";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <>
      <Head>
        <title>DevSpain blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <Nav></Nav>
      <div className="uk-container">
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
