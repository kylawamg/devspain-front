import React from "react";
import Link from "next/link";
import Query from "../components/query";
import CATEGORIES_QUERY from "../apollo/queries/category/categories";
import "../assets/scss/nav.scss";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div data-uk-sticky="show-on-up: true">
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <a className="uk-navbar-item uk-logo" href="/">
                    DevSpain Blog
                  </a>
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link href="/articles">
                        <a>Categorías</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>Quien somos</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Cursos</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <div className="uk-navbar-item">
                    <div>
                      <a
                        className="uk-navbar-toggle"
                        uk-search-icon="true"
                        href="#"
                      ></a>
                      <div
                        className="uk-drop"
                        uk-drop="mode: click; pos: left-center; offset: 0"
                      >
                        <form className="uk-search uk-search-navbar uk-width-1-1">
                          <input
                            className="uk-search-input"
                            type="search"
                            placeholder="Buscar..."
                            autoFocus
                          ></input>
                        </form>
                      </div>
                    </div>
                    <button className="uk-button btn-nav-bar">
                      Suscribete!
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;
