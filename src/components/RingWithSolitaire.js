import React, { Component } from "react";
import RingWithSolitaireImage from "../assets/images/ring-with-solitaire.jpg";

class RingWithSolitaire extends Component {
  render() {
    return (
      <div className="ring-pair-container">
        <img src={RingWithSolitaireImage} alt="RingPair" />
      </div>
    );
  }
}

export default RingWithSolitaire;
