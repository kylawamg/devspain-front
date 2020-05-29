import React from "react";
import Link from "next/link";
import "../assets/scss/footer.scss";

const Footer = () => {
  return (
    <footer className="footer" uk-sticky="bottom: true">
      <div className="uk-container uk-container-large">
        <div className="">
          <ul className="uk-subnav uk-subnav-divider" uk-margin="true">
            <li>
              <a href="#">Aviso Legal</a>
            </li>
            <li>
              <a href="#">Terminos y condiciones</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div>
            <p>Copyright © Holi. All Rights Reserved.</p>
          </div>
          <div>
            <p>
              Siguenos en: <span uk-icon="uikit"></span>
              <span uk-icon="github-alt"></span> <span uk-icon="youtube"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
