import React from "react";
import "../css/mobile.css";
import "../css/animation.css";
import logo from "../img/logo.png";
import "../css/index.css";

function Layout(props) {
  return (
    <>
      <nav className="fadeInDown">
        <div className="navLogo">
          <img src={logo} />
        </div>
        <div className="navOptions">
          <ul>
            <li>
              <a href="#">Faqs</a>
            </li>
            <li>
              <a href="#">Producto y Descripci&oacute;n</a>
            </li>
          </ul>
        </div>
      </nav>

      {props.children}

      <footer>
        <div>
          <span className="terminos">Terminos y Condiciones</span>
          <span className="email"><a href="mailto:abj951122@gmail.com">abj951122@gmail.com</a></span>
        </div>
      </footer>
    </>
  );
}

export default Layout;
