import React, { Component } from "react";

class ColorMaterialModal extends Component {
  render() {
    return (
      <div className="color-material-modal-container">
        <div className="ring-color-select-container">
          <span className="ring-profile-select-span">Boja:</span>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              className={`color-tab white-gold-color`}
              onClick={() => this.props.onChangeColor("white")}
            ></div>
            <div
              className={`color-tab yellow-gold-color`}
              onClick={() => this.props.onChangeColor("yellow")}
            ></div>
            <div
              className={`color-tab rose-gold-color`}
              onClick={() => this.props.onChangeColor("rose")}
            ></div>
          </div>
        </div>
        <div className="ring-color-select-container" style={{ marginTop: 40 }}>
          <span className="ring-profile-select-span">Površina:</span>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              className={`color-tab polished-texture`}
              onClick={() => this.props.onChangeMaterial("polished")}
            ></div>
            <div
              className={`color-tab silk-texture`}
              onClick={() => this.props.onChangeMaterial("silk")}
            ></div>
            <div
              className={`color-tab sand-texture`}
              onClick={() => this.props.onChangeMaterial("sand")}
            ></div>
            <div
              className={`color-tab ice-texture`}
              onClick={() => this.props.onChangeMaterial("ice")}
            ></div>
            <div
              className={`color-tab rock-texture`}
              onClick={() => this.props.onChangeMaterial("rock")}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorMaterialModal;
