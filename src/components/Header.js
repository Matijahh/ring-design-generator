import React, { Component } from "react";
import Logo from "../assets/images/logo.png";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          <img className="header-logo-image" src={Logo} alt="Logo" />
          <span
            className="header-link"
            onClick={() => (window.location.href = "https://zlatarajovan.com/")}
          >
            Nazad na sajt
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
