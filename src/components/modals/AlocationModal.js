import React, { Component } from "react";
import SingleColored from "../../assets/images/single-colored.jpg";
import BiColored1 from "../../assets/images/bi-colored-1.jpg";
import BiColored2 from "../../assets/images/bi-colored-2.jpg";
import BiColored3 from "../../assets/images/bi-colored-3.jpg";
import BiColored4 from "../../assets/images/bi-colored-4.jpg";
import TriColored1 from "../../assets/images/tri-colored-1.jpg";
import TriColored2 from "../../assets/images/tri-colored-2.jpg";
import TriColored3 from "../../assets/images/tri-colored-3.jpg";
import TriColored4 from "../../assets/images/tri-colored-4.jpg";
import TriColored5 from "../../assets/images/tri-colored-5.jpg";
import TriColored6 from "../../assets/images/tri-colored-6.jpg";
import TriColored7 from "../../assets/images/tri-colored-7.jpg";
import TriColored8 from "../../assets/images/tri-colored-8.jpg";

class AlocationModal extends Component {
  render() {
    return (
      <div className="alocation-modal-container">
        <div className="single-colored" style={{ paddingBottom: 0 }}>
          <span>Jednobojni</span>
          <img
            src={SingleColored}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("single")}
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className="single-colored" style={{ paddingBottom: 0 }}>
          <span>Dvobojni</span>
          <img
            src={BiColored1}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("bi-1")}
            style={{ margin: "0 auto" }}
          />
          {/* <img
            src={BiColored2}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("bi-2")}
            style={{ margin: 0 }}
          /> */}
        </div>
        {/* <div
          className="single-colored"
          style={{ paddingLeft: 150, paddingTop: 0, paddingBottom: 0 }}
        >
          <img
            src={BiColored3}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("bi-3")}
            style={{ margin: 0 }}
          />
          <img
            src={BiColored4}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("bi-4")}
            style={{ margin: 0 }}
          />
        </div> */}
        <div
          className="single-colored"
          style={{ border: "none", paddingBottom: 0 }}
        >
          <span>Trobojni</span>
          <img
            src={TriColored1}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("tri-1")}
            style={{ margin: "0 auto" }}
          />
          {/* <img
            src={TriColored2}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("tri-2")}
            style={{ margin: 0 }}
          /> */}
        </div>
        {/* <div
          className="single-colored"
          style={{
            border: "none",
            paddingLeft: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <img
            src={TriColored3}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("tri-3")}
            style={{ margin: 0 }}
          />
          <img
            src={TriColored4}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("tri-4")}
            style={{ margin: 0 }}
          />
          <img
            src={TriColored5}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("tri-5")}
            style={{ margin: 0 }}
          />
        </div> */}
        {/* <div
          className="single-colored"
          style={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
        >
          <img
            src={TriColored6}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("tri-6")}
            style={{ margin: 0 }}
          />
          <img
            src={TriColored7}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("tri-7")}
            style={{ margin: 0 }}
          />
          <img
            src={TriColored8}
            alt="alocation-tab"
            onClick={() => this.props.onChangeAlocation("tri-8")}
            style={{ margin: 0 }}
          />
        </div> */}
      </div>
    );
  }
}

export default AlocationModal;
