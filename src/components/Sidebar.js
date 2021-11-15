import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RingWithDiamond from "../assets/images/ring-with-a-diamond.png";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar-container">
          <NavLink
            to="/"
            exact
            className="sidebar-tab"
            activeClassName="is-active"
          >
            <img src={RingWithDiamond} alt="Prsten 1" /> Prsten 1
          </NavLink>
          <NavLink
            to="/one-ring"
            className="sidebar-tab"
            activeClassName="is-active"
          >
            <img src={RingWithDiamond} alt="Prsten 2" /> Prsten 2
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
