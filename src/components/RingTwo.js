import React, { Component } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// Images
import IMAGES from "./imports/ImagesImports";
import Logo from "../assets/images/logo-condensed.png";
import ShoppingCart from "../assets/images/shopping-cart.png";
import SaveIcon from "../assets/images/bookmark.png";
import SavedIcon from "../assets/images/bookmark-saved.png";
import DeleteIcon from "../assets/images/delete.png";

// Modals
import AlocationModal from "./modals/AlocationModal";
import ColorMaterialModal from "./modals/ColorMaterialModal";
import OrderRingModal from "./modals/OrderRingModal";

const options = [
  { value: "oval", label: "Ovalni" },
  // { value: "elipse", label: "Elipsiodni" },
  // { value: "parabel", label: "Parabolni" },
  // { value: "sidecut", label: "Isečeno sa strane" },
  // { value: "planar", label: "Planarni" },
  // { value: "forma", label: "Formalni" },
];

const seamOptions = [
  { value: "v-seam", label: "V-Porub", disabled: false },
  { value: "u-seam", label: "U-Porub", disabled: false },
];

class RingTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "oval",
      color: "white",
      color2: "white",
      color3: "white",
      measure: 3,
      size: 45,
      surface: "polished",
      surface2: "polished",
      surface3: "polished",
      seam: "seamless",
      stoneNum: 0,
      alocationModal: false,
      alocation: "single",
      colorMaterialModal1: false,
      colorMaterialModal2: false,
      colorMaterialModal3: false,
      orderRingModal: false,
      saved: false,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    const data = JSON.parse(window.localStorage.getItem("ringTwo"));
    if (data) {
      this.setState({
        ...data,
        alocationModal: false,
        colorMaterialModal1: false,
        colorMaterialModal2: false,
        colorMaterialModal3: false,
        orderRingModal: false,
      });
    }
  }

  handleSave() {
    const data = {
      profile: this.state.profile,
      color: this.state.color,
      color2: this.state.color2,
      color3: this.state.color3,
      measure: this.state.measure,
      size: this.state.size,
      surface: this.state.surface,
      surface2: this.state.surface2,
      surface3: this.state.surface3,
      seam: this.state.seam,
      stoneNum: this.state.stoneNum,
      alocation: this.state.alocation,
    };
    window.localStorage.setItem("ringTwo", JSON.stringify(data));
    this.setState({ ...this.state, saved: true });
  }

  handleClear() {
    const data = {
      profile: "oval",
      color: "white",
      color2: "white",
      color3: "white",
      measure: 3,
      size: 45,
      surface: "polished",
      surface2: "polished",
      surface3: "polished",
      seam: "seamless",
      stoneNum: 0,
      alocation: "single",
      saved: false,
    };
    this.setState({
      ...data,
      colorMaterialModal1: false,
      colorMaterialModal2: false,
      colorMaterialModal3: false,
      alocationModal: false,
      orderRingModal: false,
    });
  }

  handleSubmit() {
    this.setState({
      ...this.state,
      colorMaterialModal1: false,
      colorMaterialModal2: false,
      colorMaterialModal3: false,
      alocationModal: false,
      orderRingModal: !this.state.orderRingModal,
    });
  }

  render() {
    let ringImage = (
      <img
        style={{ height: "auto", marginTop: 200 }}
        src={Logo}
        alt="RingOne"
      />
    );
    let stoneImage = null;
    if (this.state.stoneNum === 0) {
      stoneImage = null;
    } else if (this.state.stoneNum > 0 && this.state.stoneNum < 8) {
      stoneImage = (
        <img
          className="stones"
          src={
            require(`../assets/images/stone-${this.state.stoneNum}.png`).default
          }
          alt="Stones"
        />
      );
    } else {
      stoneImage = (
        <img
          className="stones"
          src={require(`../assets/images/stone-7.png`).default}
          alt="Stones"
        />
      );
    }
    if (this.state.alocation === "single") {
      try {
        ringImage = (
          <img
            src={
              require(`../assets/images/single/oval/${this.state.profile}-${this.state.measure}-${this.state.color}-single-${this.state.surface}.jpg`)
                .default
            }
            alt="RingOne"
          />
        );
      } catch {
        ringImage = (
          <img
            style={{ height: "auto", marginTop: 200 }}
            src={Logo}
            alt="RingOne"
          />
        );
      }
    } else if (this.state.alocation === "bi-1") {
      try {
        if (this.state.color === this.state.color2) {
          ringImage = (
            <img
              src={
                require(`../assets/images/single/oval/${this.state.profile}-${this.state.measure}-${this.state.color}-single-${this.state.surface}.jpg`)
                  .default
              }
              alt="RingOne"
            />
          );
        } else {
          ringImage = (
            <img
              src={
                require(`../assets/images/b-1/oval/${this.state.profile}-${this.state.measure}-${this.state.color}-${this.state.color2}-gold-bi-1-${this.state.surface}-${this.state.surface2}-${this.state.seam}.jpg`)
                  .default
              }
              alt="RingOne"
            />
          );
        }
      } catch {
        ringImage = (
          <img
            style={{ height: "auto", marginTop: 200 }}
            src={Logo}
            alt="RingOne"
          />
        );
      }
    } else {
      try {
        if (this.state.color === this.state.color2) {
          ringImage = (
            <img
              src={
                require(`../assets/images/single/oval/${this.state.profile}-${this.state.measure}-${this.state.color}-single-${this.state.surface}.jpg`)
                  .default
              }
              alt="RingOne"
            />
          );
        } else {
          ringImage = (
            <img
              src={
                require(`../assets/images/b-2/oval/${this.state.profile}-${this.state.measure}-${this.state.color}-${this.state.color2}-gold-bi-2-${this.state.surface}-${this.state.surface2}-${this.state.seam}.jpg`)
                  .default
              }
              alt="RingOne"
            />
          );
        }
      } catch {
        ringImage = (
          <img
            style={{ height: "auto", marginTop: 200 }}
            src={Logo}
            alt="RingOne"
          />
        );
      }
    }
    return (
      <div className="ring-pair-container">
        <div className="ring-pair-order">
          {stoneImage}
          {ringImage}
          <div style={{ display: "flex" }}>
            <div
              className={`btn-submit ${this.state.saved ? "btn-saved" : ""}`}
              onClick={this.handleSave}
            >
              {this.state.saved ? "Sačuvano" : "Sačuvaj"}
              {this.state.saved ? (
                <img className="saved-icon" src={SavedIcon} alt="Saved" />
              ) : (
                <img className="save-icon" src={SaveIcon} alt="Save" />
              )}
            </div>
            <div className="btn-submit" onClick={this.handleSubmit}>
              <span>Poruči</span>
              <img className="order-icon" src={ShoppingCart} alt="Order" />
            </div>
            <div className="btn-submit" onClick={this.handleClear}>
              <span>Obriši</span>
              <img className="order-icon" src={DeleteIcon} alt="Delete" />
            </div>
          </div>
          {this.state.orderRingModal && (
            <OrderRingModal
              order={this.state}
              ringImg={ringImage}
              stoneImg={stoneImage}
            />
          )}
        </div>
        <div className="ring-profile-select">
          {/* <div className="ring-profile-select-container">
            <span className="ring-profile-select-span">Profil Prstena:</span>
            <div style={{ width: "100%" }}>
              <Select
                className="ring-profile-select-select"
                options={options}
                isClearable
                placeholder="Izaberi..."
                defaultValue={{ value: "oval", label: "Ovalni" }}
                onChange={(e) =>
                  this.setState({
                    ...this.state,
                    profile: e ? e.value : "oval",
                    saved: false,
                  })
                }
              />
            </div>
          </div> */}
          <div
            className="ring-measure-select-container"
            style={{ marginTop: 40 }}
          >
            <span className="ring-profile-select-span">
              Veličina prstena (u mm):
            </span>
            <Slider
              min={45}
              max={75}
              defaultValue={this.state.size}
              marks={{
                45: 45,
                50: 50,
                55: 55,
                60: 60,
                65: 65,
                70: 70,
                75: 75,
              }}
              step={5}
              onChange={(e) =>
                this.setState({ ...this.state, size: e, saved: false })
              }
            />
          </div>
          <div
            className="ring-measure-select-container"
            style={{ marginTop: 40 }}
          >
            <span className="ring-profile-select-span">
              Širina prstena (u mm):
            </span>
            <Slider
              min={3}
              max={10}
              defaultValue={this.state.measure}
              marks={{
                3: 3,
                3.5: 3.5,
                4: 4,
                4.5: 4.5,
                5: 5,
                5.5: 5.5,
                6: 6,
                6.5: 6.5,
                7: 7,
                7.5: 7.5,
                8: 8,
                8.5: 8.5,
                9: 9,
                9.5: 9.5,
                10: 10,
              }}
              step={0.5}
              onChange={(e) =>
                this.setState({ ...this.state, measure: e, saved: false })
              }
            />
          </div>

          <div
            className="ring-color-select-container"
            style={{ marginTop: 40, position: "relative" }}
          >
            <span className="ring-profile-select-span">
              Boja / Površina prstena:
            </span>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div
                className={`ring-color-tab ${this.state.color}-gold-color`}
                onClick={() =>
                  this.setState({
                    colorMaterialModal2: false,
                    colorMaterialModal3: false,
                    alocationModal: false,
                    colorMaterialModal1: !this.state.colorMaterialModal1,
                    saved: false,
                  })
                }
              >
                {this.state.colorMaterialModal1 && (
                  <ColorMaterialModal
                    onChangeColor={(color) => {
                      if (color === this.state.color2) {
                        this.setState({
                          alocation: "single",
                          color: color,
                          colorMaterialModal1: false,
                          saved: false,
                        });
                      } else {
                        this.setState({
                          color: color,
                          colorMaterialModal1: false,
                          saved: false,
                        });
                      }
                    }}
                    onChangeMaterial={(material) => {
                      if (material === "rock") {
                        this.setState({
                          surface: material,
                          surface2: material,
                          colorMaterialModal1: false,
                          saved: false,
                        });
                      } else {
                        this.setState({
                          surface: material,
                          colorMaterialModal1: false,
                          saved: false,
                        });
                      }
                    }}
                  />
                )}
                <span>1</span>
              </div>
              {this.state.alocation !== "single" && (
                <div
                  className={`ring-color-tab ${this.state.color2}-gold-color`}
                  onClick={() =>
                    this.setState({
                      colorMaterialModal1: false,
                      colorMaterialModal3: false,
                      alocationModal: false,
                      colorMaterialModal2: !this.state.colorMaterialModal2,
                      saved: false,
                    })
                  }
                >
                  {this.state.colorMaterialModal2 && (
                    <ColorMaterialModal
                      onChangeColor={(color) => {
                        if (color === this.state.color) {
                          this.setState({
                            alocation: "single",
                            color: color,
                            colorMaterialModal2: false,
                            saved: false,
                          });
                        } else {
                          this.setState({
                            color2: color,
                            colorMaterialModal2: false,
                            saved: false,
                          });
                        }
                      }}
                      onChangeMaterial={(material) => {
                        if (material === "rock") {
                          this.setState({
                            surface: material,
                            surface2: material,
                            colorMaterialModal2: false,
                            saved: false,
                          });
                        } else {
                          this.setState({
                            surface2: material,
                            colorMaterialModal2: false,
                            saved: false,
                          });
                        }
                      }}
                    />
                  )}
                  <span>2</span>
                </div>
              )}
              {this.state.alocation !== "single" &&
                this.state.alocation !== "bi-1" &&
                this.state.alocation !== "bi-2" &&
                this.state.alocation !== "bi-3" &&
                this.state.alocation !== "bi-4" && (
                  <div
                    className={`ring-color-tab ${this.state.color3}-gold-color`}
                    onClick={() =>
                      this.setState({
                        colorMaterialModal1: false,
                        colorMaterialModal2: false,
                        alocationModal: false,
                        colorMaterialModal3: !this.state.colorMaterialModal3,
                        saved: false,
                      })
                    }
                  >
                    {this.state.colorMaterialModal3 && (
                      <ColorMaterialModal
                        onChangeColor={(color) =>
                          this.setState({
                            color3: color,
                            colorMaterialModal3: false,
                            saved: false,
                          })
                        }
                        onChangeMaterial={(material) =>
                          this.setState({
                            surface3: material,
                            colorMaterialModal3: false,
                            saved: false,
                          })
                        }
                      />
                    )}
                    <span>3</span>
                  </div>
                )}
            </div>
          </div>
          <div
            className="ring-measure-select-container"
            style={{ marginTop: 40 }}
          >
            <span className="ring-profile-select-span">Broj kamena:</span>
            <Slider
              min={0}
              max={10}
              defaultValue={this.state.stoneNum}
              marks={{
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                10: 10,
              }}
              step={1}
              onChange={(e) => {
                this.setState({ ...this.state, stoneNum: e, saved: false });
              }}
            />
          </div>
          {this.state.alocation !== "single" && (
            <div
              className="ring-profile-select-container"
              style={{ marginTop: 60 }}
            >
              <span className="ring-profile-select-span">Porub Prstena:</span>
              <div style={{ width: "100%" }}>
                <Select
                  className="ring-profile-select-select"
                  options={seamOptions}
                  isOptionDisabled={(option) => option.disabled}
                  isClearable
                  placeholder="Izaberi..."
                  defaultValue={{ value: "v-seam", label: "V-Porub" }}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      seam: e ? e.value : "v-seam",
                      saved: false,
                    })
                  }
                />
              </div>
            </div>
          )}
          <div
            className="ring-profile-select-container alocation-container"
            style={{ marginTop: 40, position: "relative" }}
          >
            {this.state.alocationModal && (
              <AlocationModal
                onChangeAlocation={(alocation) => {
                  if (alocation === "single") {
                    this.setState({
                      colorMaterialModal1: false,
                      colorMaterialModal2: false,
                      colorMaterialModal3: false,
                      alocation: alocation,
                      seam: "seamless",
                      alocationModal: !this.state.alocationModal,
                      saved: false,
                    });
                  } else {
                    this.setState({
                      colorMaterialModal1: false,
                      colorMaterialModal2: false,
                      colorMaterialModal3: false,
                      alocation: alocation,
                      seam: "v-seam",
                      alocationModal: !this.state.alocationModal,
                      saved: false,
                    });
                  }
                }}
              />
            )}
            <span
              className="ring-profile-select-span"
              style={{ marginRight: 70 }}
            >
              Alokacija Prstena:
            </span>
            <img
              src={
                this.state.alocation === "single"
                  ? IMAGES.SingleColored
                  : this.state.alocation === "bi-1"
                  ? IMAGES.BiColored1
                  : this.state.alocation === "bi-2"
                  ? IMAGES.BiColored2
                  : this.state.alocation === "bi-3"
                  ? IMAGES.BiColored3
                  : this.state.alocation === "bi-4"
                  ? IMAGES.BiColored4
                  : this.state.alocation === "tri-1"
                  ? IMAGES.TriColored1
                  : this.state.alocation === "tri-2"
                  ? IMAGES.TriColored2
                  : this.state.alocation === "tri-3"
                  ? IMAGES.TriColored3
                  : this.state.alocation === "tri-4"
                  ? IMAGES.TriColored4
                  : this.state.alocation === "tri-5"
                  ? IMAGES.TriColored5
                  : this.state.alocation === "tri-6"
                  ? IMAGES.TriColored6
                  : this.state.alocation === "tri-7"
                  ? IMAGES.TriColored7
                  : this.state.alocation === "tri-8"
                  ? IMAGES.TriColored8
                  : IMAGES.SingleColored
              }
              alt="Alocation"
              onClick={() =>
                this.setState({
                  alocationModal: !this.state.alocationModal,
                  colorMaterialModal1: false,
                  colorMaterialModal2: false,
                  colorMaterialModal3: false,
                  saved: false,
                })
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RingTwo;
