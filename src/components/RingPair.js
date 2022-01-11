import React, { Component } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import IMAGES from "./imports/ImagesImports";
import Logo from "../assets/images/logo-condensed.png";

import AlocationModal from "./modals/AlocationModal";
import ColorMaterialModal from "./modals/ColorMaterialModal";

const options = [
  { value: "oval", label: "Ovalni" },
  // { value: "elipse", label: "Elipsiodni" },
  // { value: "parabel", label: "Parabolni" },
  // { value: "sidecut", label: "Isečeno sa strane" },
  // { value: "planar", label: "Planarni" },
  // { value: "forma", label: "Formalni" },
];

const seamOptions = [
  // { value: "seamless", label: "Bez poruba" },
  { value: "v-seam", label: "V-Porub" },
  { value: "u-seam", label: "U-Porub" },
];

class RingPair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "oval",
      color: "rose",
      color2: "white",
      color3: "white",
      measure: 3,
      size: 45,
      surface: "ice",
      surface2: "ice",
      surface3: "polished",
      seam: "v-seam",
      alocationModal: false,
      alocation: "bi-1",
      colorMaterialModal1: false,
      colorMaterialModal2: false,
      colorMaterialModal3: false,
    };
  }

  render() {
    let ringImage = <img style={{ height: "auto" }} src={Logo} alt="RingOne" />;
    try {
      ringImage = (
        <img
          src={
            require(`../assets/images/b-1/oval/${this.state.profile}-${this.state.measure}-${this.state.color}-${this.state.color2}-gold-bi-1-${this.state.surface}-${this.state.surface2}-${this.state.seam}.jpg`)
              .default
          }
          alt="RingOne"
        />
      );
    } catch {
      ringImage = <img style={{ height: "auto" }} src={Logo} alt="RingOne" />;
    }
    return (
      <div className="ring-pair-container">
        {ringImage}
        <div className="ring-profile-select">
          <div className="ring-profile-select-container">
            <span className="ring-profile-select-span">Profil Prstena:</span>
            <div style={{ width: "100%" }}>
              <Select
                className="ring-profile-select-select"
                options={options}
                isClearable
                placeholder="Izaberi..."
                defaultValue={{ value: "oval", label: "Ovalni" }}
                onChange={(e) =>
                  this.setState({ profile: e ? e.value : "oval" })
                }
              />
            </div>
          </div>
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
              onChange={(e) => this.setState({ size: e })}
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
              onChange={(e) => this.setState({ measure: e })}
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
                  })
                }
              >
                {this.state.colorMaterialModal1 && (
                  <ColorMaterialModal
                    onChangeColor={(color) =>
                      this.setState({
                        color: color,
                        colorMaterialModal1: false,
                      })
                    }
                    onChangeMaterial={(material) =>
                      this.setState({
                        surface: material,
                        colorMaterialModal1: false,
                      })
                    }
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
                    })
                  }
                >
                  {this.state.colorMaterialModal2 && (
                    <ColorMaterialModal
                      onChangeColor={(color) =>
                        this.setState({
                          color2: color,
                          colorMaterialModal2: false,
                        })
                      }
                      onChangeMaterial={(material) =>
                        this.setState({
                          surface2: material,
                          colorMaterialModal2: false,
                        })
                      }
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
                      })
                    }
                  >
                    {this.state.colorMaterialModal3 && (
                      <ColorMaterialModal
                        onChangeColor={(color) =>
                          this.setState({
                            color3: color,
                            colorMaterialModal3: false,
                          })
                        }
                        onChangeMaterial={(material) =>
                          this.setState({
                            surface3: material,
                            colorMaterialModal3: false,
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
            className="ring-profile-select-container"
            style={{ marginTop: 40 }}
          >
            <span className="ring-profile-select-span">Porub Prstena:</span>
            <div style={{ width: "100%" }}>
              <Select
                className="ring-profile-select-select"
                options={seamOptions}
                isClearable
                placeholder="Izaberi..."
                defaultValue={{ value: "v-seam", label: "V-Porub" }}
                onChange={(e) =>
                  this.setState({ seam: e ? e.value : "v-seam" })
                }
              />
            </div>
          </div>
          <div
            className="ring-profile-select-container alocation-container"
            style={{ marginTop: 40, position: "relative" }}
          >
            {this.state.alocationModal && (
              <AlocationModal
                onChangeAlocation={(alocation) =>
                  this.setState({
                    colorMaterialModal1: false,
                    colorMaterialModal2: false,
                    colorMaterialModal3: false,
                    alocation: alocation,
                    alocationModal: !this.state.alocationModal,
                  })
                }
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
                })
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RingPair;
