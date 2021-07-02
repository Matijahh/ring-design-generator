import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WeddingRings from "../assets/images/wedding-rings.png";
import RingWithDiamond from "../assets/images/ring-with-a-diamond.png";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar-container">
          <NavLink
            to="/pair"
            className="sidebar-tab"
            activeClassName="is-active"
          >
            <img src={WeddingRings} alt="Par Prstenova" /> Par Prstenova
          </NavLink>
          <NavLink
            to="/with-solitaire"
            className="sidebar-tab"
            activeClassName="is-active"
          >
            <img src={RingWithDiamond} alt="Pasijans" /> Pasijans
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
