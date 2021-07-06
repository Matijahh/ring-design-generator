import React, { Component } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import IMAGES from "./imports/ImagesImports";

import AlocationModal from "./modals/AlocationModal";
import ColorMaterialModal from "./modals/ColorMaterialModal";

const options = [
  { value: "oval", label: "Ovalni" },
  { value: "elipse", label: "Elipsiodni" },
  { value: "parabel", label: "Parabolni" },
  { value: "sidecut", label: "Isečeno sa strane" },
  { value: "planar", label: "Planarni" },
  { value: "forma", label: "Formalni" },
];

const seamOptions = [
  { value: "seamless", label: "Bez poruba" },
  { value: "v-seam", label: "V-Porub" },
  { value: "u-seam", label: "U-Porub" },
];

const IMAGESCOMB = {
  "oval2yellow-goldsinglepolished": (
    <img src={IMAGES.Oval2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval2.5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval3yellow-goldsinglepolished": (
    <img src={IMAGES.Oval3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval3.5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval4yellow-goldsinglepolished": (
    <img src={IMAGES.Oval4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval4.5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval5.5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval6yellow-goldsinglepolished": (
    <img src={IMAGES.Oval6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval6.5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval7yellow-goldsinglepolished": (
    <img src={IMAGES.Oval7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval7.5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval8yellow-goldsinglepolished": (
    <img src={IMAGES.Oval8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval8.5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval9yellow-goldsinglepolished": (
    <img src={IMAGES.Oval9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval9.5yellow-goldsinglepolished": (
    <img src={IMAGES.Oval95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval10yellow-goldsinglepolished": (
    <img src={IMAGES.Oval10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval2rose-goldsinglepolished": (
    <img src={IMAGES.Oval2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval2.5rose-goldsinglepolished": (
    <img src={IMAGES.Oval25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval3rose-goldsinglepolished": (
    <img src={IMAGES.Oval3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval3.5rose-goldsinglepolished": (
    <img src={IMAGES.Oval35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval4rose-goldsinglepolished": (
    <img src={IMAGES.Oval4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval4.5rose-goldsinglepolished": (
    <img src={IMAGES.Oval45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval5rose-goldsinglepolished": (
    <img src={IMAGES.Oval5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval5.5rose-goldsinglepolished": (
    <img src={IMAGES.Oval55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval6rose-goldsinglepolished": (
    <img src={IMAGES.Oval6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval6.5rose-goldsinglepolished": (
    <img src={IMAGES.Oval65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval7rose-goldsinglepolished": (
    <img src={IMAGES.Oval7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval7.5rose-goldsinglepolished": (
    <img src={IMAGES.Oval75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval8rose-goldsinglepolished": (
    <img src={IMAGES.Oval8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval8.5rose-goldsinglepolished": (
    <img src={IMAGES.Oval85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval9rose-goldsinglepolished": (
    <img src={IMAGES.Oval9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval9.5rose-goldsinglepolished": (
    <img src={IMAGES.Oval95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval10rose-goldsinglepolished": (
    <img src={IMAGES.Oval10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval2white-goldsinglepolished": (
    <img src={IMAGES.Oval2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval2.5white-goldsinglepolished": (
    <img src={IMAGES.Oval25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval3white-goldsinglepolished": (
    <img src={IMAGES.Oval3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval3.5white-goldsinglepolished": (
    <img src={IMAGES.Oval35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval4white-goldsinglepolished": (
    <img src={IMAGES.Oval4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval4.5white-goldsinglepolished": (
    <img src={IMAGES.Oval45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval5white-goldsinglepolished": (
    <img src={IMAGES.Oval5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval5.5white-goldsinglepolished": (
    <img src={IMAGES.Oval55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval6white-goldsinglepolished": (
    <img src={IMAGES.Oval6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval6.5white-goldsinglepolished": (
    <img src={IMAGES.Oval65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval7white-goldsinglepolished": (
    <img src={IMAGES.Oval7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval7.5white-goldsinglepolished": (
    <img src={IMAGES.Oval75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval8white-goldsinglepolished": (
    <img src={IMAGES.Oval8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval8.5white-goldsinglepolished": (
    <img src={IMAGES.Oval85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval9white-goldsinglepolished": (
    <img src={IMAGES.Oval9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval9.5white-goldsinglepolished": (
    <img src={IMAGES.Oval95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval10white-goldsinglepolished": (
    <img src={IMAGES.Oval10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10yellow-goldsinglepolished": (
    <img src={IMAGES.Elipse10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2rose-goldsinglepolished": (
    <img src={IMAGES.Elipse2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3rose-goldsinglepolished": (
    <img src={IMAGES.Elipse3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4rose-goldsinglepolished": (
    <img src={IMAGES.Elipse4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6rose-goldsinglepolished": (
    <img src={IMAGES.Elipse6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7rose-goldsinglepolished": (
    <img src={IMAGES.Elipse7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8rose-goldsinglepolished": (
    <img src={IMAGES.Elipse8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9rose-goldsinglepolished": (
    <img src={IMAGES.Elipse9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5rose-goldsinglepolished": (
    <img src={IMAGES.Elipse95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10rose-goldsinglepolished": (
    <img src={IMAGES.Elipse10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2white-goldsinglepolished": (
    <img src={IMAGES.Elipse2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5white-goldsinglepolished": (
    <img src={IMAGES.Elipse25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3white-goldsinglepolished": (
    <img src={IMAGES.Elipse3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5white-goldsinglepolished": (
    <img src={IMAGES.Elipse35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4white-goldsinglepolished": (
    <img src={IMAGES.Elipse4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5white-goldsinglepolished": (
    <img src={IMAGES.Elipse45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5white-goldsinglepolished": (
    <img src={IMAGES.Elipse5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5white-goldsinglepolished": (
    <img src={IMAGES.Elipse55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6white-goldsinglepolished": (
    <img src={IMAGES.Elipse6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5white-goldsinglepolished": (
    <img src={IMAGES.Elipse65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7white-goldsinglepolished": (
    <img src={IMAGES.Elipse7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5white-goldsinglepolished": (
    <img src={IMAGES.Elipse75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8white-goldsinglepolished": (
    <img src={IMAGES.Elipse8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5white-goldsinglepolished": (
    <img src={IMAGES.Elipse85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9white-goldsinglepolished": (
    <img src={IMAGES.Elipse9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5white-goldsinglepolished": (
    <img src={IMAGES.Elipse95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10white-goldsinglepolished": (
    <img src={IMAGES.Elipse10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10yellow-goldsinglepolished": (
    <img src={IMAGES.Parabel10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2rose-goldsinglepolished": (
    <img src={IMAGES.Parabel2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3rose-goldsinglepolished": (
    <img src={IMAGES.Parabel3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4rose-goldsinglepolished": (
    <img src={IMAGES.Parabel4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6rose-goldsinglepolished": (
    <img src={IMAGES.Parabel6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7rose-goldsinglepolished": (
    <img src={IMAGES.Parabel7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8rose-goldsinglepolished": (
    <img src={IMAGES.Parabel8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9rose-goldsinglepolished": (
    <img src={IMAGES.Parabel9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5rose-goldsinglepolished": (
    <img src={IMAGES.Parabel95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10rose-goldsinglepolished": (
    <img src={IMAGES.Parabel10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2white-goldsinglepolished": (
    <img src={IMAGES.Parabel2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5white-goldsinglepolished": (
    <img src={IMAGES.Parabel25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3white-goldsinglepolished": (
    <img src={IMAGES.Parabel3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5white-goldsinglepolished": (
    <img src={IMAGES.Parabel35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4white-goldsinglepolished": (
    <img src={IMAGES.Parabel4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5white-goldsinglepolished": (
    <img src={IMAGES.Parabel45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5white-goldsinglepolished": (
    <img src={IMAGES.Parabel5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5white-goldsinglepolished": (
    <img src={IMAGES.Parabel55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6white-goldsinglepolished": (
    <img src={IMAGES.Parabel6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5white-goldsinglepolished": (
    <img src={IMAGES.Parabel65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7white-goldsinglepolished": (
    <img src={IMAGES.Parabel7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5white-goldsinglepolished": (
    <img src={IMAGES.Parabel75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8white-goldsinglepolished": (
    <img src={IMAGES.Parabel8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5white-goldsinglepolished": (
    <img src={IMAGES.Parabel85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9white-goldsinglepolished": (
    <img src={IMAGES.Parabel9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5white-goldsinglepolished": (
    <img src={IMAGES.Parabel95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10white-goldsinglepolished": (
    <img src={IMAGES.Parabel10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10yellow-goldsinglepolished": (
    <img src={IMAGES.Sidecut10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10rose-goldsinglepolished": (
    <img src={IMAGES.Sidecut10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2white-goldsinglepolished": (
    <img src={IMAGES.Sidecut2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3white-goldsinglepolished": (
    <img src={IMAGES.Sidecut3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4white-goldsinglepolished": (
    <img src={IMAGES.Sidecut4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6white-goldsinglepolished": (
    <img src={IMAGES.Sidecut6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7white-goldsinglepolished": (
    <img src={IMAGES.Sidecut7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8white-goldsinglepolished": (
    <img src={IMAGES.Sidecut8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9white-goldsinglepolished": (
    <img src={IMAGES.Sidecut9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5white-goldsinglepolished": (
    <img src={IMAGES.Sidecut95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10white-goldsinglepolished": (
    <img src={IMAGES.Sidecut10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar2yellow-goldsinglepolished": (
    <img src={IMAGES.Planar2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar3yellow-goldsinglepolished": (
    <img src={IMAGES.Planar3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar4yellow-goldsinglepolished": (
    <img src={IMAGES.Planar4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar6yellow-goldsinglepolished": (
    <img src={IMAGES.Planar6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar7yellow-goldsinglepolished": (
    <img src={IMAGES.Planar7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar8yellow-goldsinglepolished": (
    <img src={IMAGES.Planar8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar9yellow-goldsinglepolished": (
    <img src={IMAGES.Planar9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5yellow-goldsinglepolished": (
    <img src={IMAGES.Planar95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar10yellow-goldsinglepolished": (
    <img src={IMAGES.Planar10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar2rose-goldsinglepolished": (
    <img src={IMAGES.Planar2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5rose-goldsinglepolished": (
    <img src={IMAGES.Planar25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar3rose-goldsinglepolished": (
    <img src={IMAGES.Planar3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5rose-goldsinglepolished": (
    <img src={IMAGES.Planar35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar4rose-goldsinglepolished": (
    <img src={IMAGES.Planar4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5rose-goldsinglepolished": (
    <img src={IMAGES.Planar45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar5rose-goldsinglepolished": (
    <img src={IMAGES.Planar5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5rose-goldsinglepolished": (
    <img src={IMAGES.Planar55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar6rose-goldsinglepolished": (
    <img src={IMAGES.Planar6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5rose-goldsinglepolished": (
    <img src={IMAGES.Planar65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar7rose-goldsinglepolished": (
    <img src={IMAGES.Planar7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5rose-goldsinglepolished": (
    <img src={IMAGES.Planar75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar8rose-goldsinglepolished": (
    <img src={IMAGES.Planar8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5rose-goldsinglepolished": (
    <img src={IMAGES.Planar85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar9rose-goldsinglepolished": (
    <img src={IMAGES.Planar9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5rose-goldsinglepolished": (
    <img src={IMAGES.Planar95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar10rose-goldsinglepolished": (
    <img src={IMAGES.Planar10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar2white-goldsinglepolished": (
    <img src={IMAGES.Planar2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5white-goldsinglepolished": (
    <img src={IMAGES.Planar25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar3white-goldsinglepolished": (
    <img src={IMAGES.Planar3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5white-goldsinglepolished": (
    <img src={IMAGES.Planar35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar4white-goldsinglepolished": (
    <img src={IMAGES.Planar4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5white-goldsinglepolished": (
    <img src={IMAGES.Planar45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar5white-goldsinglepolished": (
    <img src={IMAGES.Planar5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5white-goldsinglepolished": (
    <img src={IMAGES.Planar55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar6white-goldsinglepolished": (
    <img src={IMAGES.Planar6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5white-goldsinglepolished": (
    <img src={IMAGES.Planar65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar7white-goldsinglepolished": (
    <img src={IMAGES.Planar7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5white-goldsinglepolished": (
    <img src={IMAGES.Planar75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar8white-goldsinglepolished": (
    <img src={IMAGES.Planar8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5white-goldsinglepolished": (
    <img src={IMAGES.Planar85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar9white-goldsinglepolished": (
    <img src={IMAGES.Planar9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5white-goldsinglepolished": (
    <img src={IMAGES.Planar95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar10white-goldsinglepolished": (
    <img src={IMAGES.Planar10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma2yellow-goldsinglepolished": (
    <img src={IMAGES.Forma2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma2.5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma3yellow-goldsinglepolished": (
    <img src={IMAGES.Forma3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma3.5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma4yellow-goldsinglepolished": (
    <img src={IMAGES.Forma4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma4.5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma5.5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma6yellow-goldsinglepolished": (
    <img src={IMAGES.Forma6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma6.5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma7yellow-goldsinglepolished": (
    <img src={IMAGES.Forma7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma7.5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma8yellow-goldsinglepolished": (
    <img src={IMAGES.Forma8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma8.5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma9yellow-goldsinglepolished": (
    <img src={IMAGES.Forma9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma9.5yellow-goldsinglepolished": (
    <img src={IMAGES.Forma95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma10yellow-goldsinglepolished": (
    <img src={IMAGES.Forma10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma2rose-goldsinglepolished": (
    <img src={IMAGES.Forma2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma2.5rose-goldsinglepolished": (
    <img src={IMAGES.Forma25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma3rose-goldsinglepolished": (
    <img src={IMAGES.Forma3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma3.5rose-goldsinglepolished": (
    <img src={IMAGES.Forma35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma4rose-goldsinglepolished": (
    <img src={IMAGES.Forma4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma4.5rose-goldsinglepolished": (
    <img src={IMAGES.Forma45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma5rose-goldsinglepolished": (
    <img src={IMAGES.Forma5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma5.5rose-goldsinglepolished": (
    <img src={IMAGES.Forma55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma6rose-goldsinglepolished": (
    <img src={IMAGES.Forma6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma6.5rose-goldsinglepolished": (
    <img src={IMAGES.Forma65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma7rose-goldsinglepolished": (
    <img src={IMAGES.Forma7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma7.5rose-goldsinglepolished": (
    <img src={IMAGES.Forma75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma8rose-goldsinglepolished": (
    <img src={IMAGES.Forma8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma8.5rose-goldsinglepolished": (
    <img src={IMAGES.Forma85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma9rose-goldsinglepolished": (
    <img src={IMAGES.Forma9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma9.5rose-goldsinglepolished": (
    <img src={IMAGES.Forma95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma10rose-goldsinglepolished": (
    <img src={IMAGES.Forma10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma2white-goldsinglepolished": (
    <img src={IMAGES.Forma2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma2.5white-goldsinglepolished": (
    <img src={IMAGES.Forma25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma3white-goldsinglepolished": (
    <img src={IMAGES.Forma3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma3.5white-goldsinglepolished": (
    <img src={IMAGES.Forma35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma4white-goldsinglepolished": (
    <img src={IMAGES.Forma4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma4.5white-goldsinglepolished": (
    <img src={IMAGES.Forma45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma5white-goldsinglepolished": (
    <img src={IMAGES.Forma5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma5.5white-goldsinglepolished": (
    <img src={IMAGES.Forma55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma6white-goldsinglepolished": (
    <img src={IMAGES.Forma6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma6.5white-goldsinglepolished": (
    <img src={IMAGES.Forma65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma7white-goldsinglepolished": (
    <img src={IMAGES.Forma7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma7.5white-goldsinglepolished": (
    <img src={IMAGES.Forma75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma8white-goldsinglepolished": (
    <img src={IMAGES.Forma8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma8.5white-goldsinglepolished": (
    <img src={IMAGES.Forma85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma9white-goldsinglepolished": (
    <img src={IMAGES.Forma9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma9.5white-goldsinglepolished": (
    <img src={IMAGES.Forma95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma10white-goldsinglepolished": (
    <img src={IMAGES.Forma10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval2yellow-goldsinglesilk": (
    <img src={IMAGES.Oval2YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval2.5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval25YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval3yellow-goldsinglesilk": (
    <img src={IMAGES.Oval3YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval3.5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval35YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval4yellow-goldsinglesilk": (
    <img src={IMAGES.Oval4YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval4.5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval45YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval5YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval5.5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval55YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval6yellow-goldsinglesilk": (
    <img src={IMAGES.Oval6YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval6.5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval65YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval7yellow-goldsinglesilk": (
    <img src={IMAGES.Oval7YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval7.5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval75YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval8yellow-goldsinglesilk": (
    <img src={IMAGES.Oval8YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval8.5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval85YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval9yellow-goldsinglesilk": (
    <img src={IMAGES.Oval9YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval9.5yellow-goldsinglesilk": (
    <img src={IMAGES.Oval95YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval10yellow-goldsinglesilk": (
    <img src={IMAGES.Oval10YellowGoldSingleSilk} alt="RingPair" />
  ),
  "oval2rose-goldsinglesilk": (
    <img src={IMAGES.Oval2RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval2.5rose-goldsinglesilk": (
    <img src={IMAGES.Oval25RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval3rose-goldsinglesilk": (
    <img src={IMAGES.Oval3RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval3.5rose-goldsinglesilk": (
    <img src={IMAGES.Oval35RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval4rose-goldsinglesilk": (
    <img src={IMAGES.Oval4RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval4.5rose-goldsinglesilk": (
    <img src={IMAGES.Oval45RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval5rose-goldsinglesilk": (
    <img src={IMAGES.Oval5RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval5.5rose-goldsinglesilk": (
    <img src={IMAGES.Oval55RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval6rose-goldsinglesilk": (
    <img src={IMAGES.Oval6RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval6.5rose-goldsinglesilk": (
    <img src={IMAGES.Oval65RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval7rose-goldsinglesilk": (
    <img src={IMAGES.Oval7RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval7.5rose-goldsinglesilk": (
    <img src={IMAGES.Oval75RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval8rose-goldsinglesilk": (
    <img src={IMAGES.Oval8RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval8.5rose-goldsinglesilk": (
    <img src={IMAGES.Oval85RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval9rose-goldsinglesilk": (
    <img src={IMAGES.Oval9RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval9.5rose-goldsinglesilk": (
    <img src={IMAGES.Oval95RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval10rose-goldsinglesilk": (
    <img src={IMAGES.Oval10RoseGoldSingleSilk} alt="RingPair" />
  ),
  "oval2white-goldsinglesilk": (
    <img src={IMAGES.Oval2WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval2.5white-goldsinglesilk": (
    <img src={IMAGES.Oval25WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval3white-goldsinglesilk": (
    <img src={IMAGES.Oval3WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval3.5white-goldsinglesilk": (
    <img src={IMAGES.Oval35WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval4white-goldsinglesilk": (
    <img src={IMAGES.Oval4WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval4.5white-goldsinglesilk": (
    <img src={IMAGES.Oval45WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval5white-goldsinglesilk": (
    <img src={IMAGES.Oval5WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval5.5white-goldsinglesilk": (
    <img src={IMAGES.Oval55WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval6white-goldsinglesilk": (
    <img src={IMAGES.Oval6WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval6.5white-goldsinglesilk": (
    <img src={IMAGES.Oval65WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval7white-goldsinglesilk": (
    <img src={IMAGES.Oval7WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval7.5white-goldsinglesilk": (
    <img src={IMAGES.Oval75WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval8white-goldsinglesilk": (
    <img src={IMAGES.Oval8WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval8.5white-goldsinglesilk": (
    <img src={IMAGES.Oval85WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval9white-goldsinglesilk": (
    <img src={IMAGES.Oval9WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval9.5white-goldsinglesilk": (
    <img src={IMAGES.Oval95WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "oval10white-goldsinglesilk": (
    <img src={IMAGES.Oval10WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse2yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse2YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse2.5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse25YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse3yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse3YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse3.5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse35YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse4yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse4YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse4.5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse45YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse5YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse5.5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse55YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse6yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse6YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse6.5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse65YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse7yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse7YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse7.5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse75YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse8yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse8YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse8.5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse85YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse9yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse9YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse9.5yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse95YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse10yellow-goldsinglesilk": (
    <img src={IMAGES.Elipse10YellowGoldSingleSilk} alt="RingPair" />
  ),
  "elipse2rose-goldsinglesilk": (
    <img src={IMAGES.Elipse2RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse2.5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse25RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse3rose-goldsinglesilk": (
    <img src={IMAGES.Elipse3RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse3.5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse35RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse4rose-goldsinglesilk": (
    <img src={IMAGES.Elipse4RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse4.5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse45RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse5RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse5.5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse55RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse6rose-goldsinglesilk": (
    <img src={IMAGES.Elipse6RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse6.5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse65RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse7rose-goldsinglesilk": (
    <img src={IMAGES.Elipse7RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse7.5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse75RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse8rose-goldsinglesilk": (
    <img src={IMAGES.Elipse8RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse8.5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse85RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse9rose-goldsinglesilk": (
    <img src={IMAGES.Elipse9RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse9.5rose-goldsinglesilk": (
    <img src={IMAGES.Elipse95RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse10rose-goldsinglesilk": (
    <img src={IMAGES.Elipse10RoseGoldSingleSilk} alt="RingPair" />
  ),
  "elipse2white-goldsinglesilk": (
    <img src={IMAGES.Elipse2WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse2.5white-goldsinglesilk": (
    <img src={IMAGES.Elipse25WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse3white-goldsinglesilk": (
    <img src={IMAGES.Elipse3WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse3.5white-goldsinglesilk": (
    <img src={IMAGES.Elipse35WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse4white-goldsinglesilk": (
    <img src={IMAGES.Elipse4WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse4.5white-goldsinglesilk": (
    <img src={IMAGES.Elipse45WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse5white-goldsinglesilk": (
    <img src={IMAGES.Elipse5WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse5.5white-goldsinglesilk": (
    <img src={IMAGES.Elipse55WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse6white-goldsinglesilk": (
    <img src={IMAGES.Elipse6WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse6.5white-goldsinglesilk": (
    <img src={IMAGES.Elipse65WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse7white-goldsinglesilk": (
    <img src={IMAGES.Elipse7WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse7.5white-goldsinglesilk": (
    <img src={IMAGES.Elipse75WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse8white-goldsinglesilk": (
    <img src={IMAGES.Elipse8WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse8.5white-goldsinglesilk": (
    <img src={IMAGES.Elipse85WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse9white-goldsinglesilk": (
    <img src={IMAGES.Elipse9WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse9.5white-goldsinglesilk": (
    <img src={IMAGES.Elipse95WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "elipse10white-goldsinglesilk": (
    <img src={IMAGES.Elipse10WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel2yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel2YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel2.5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel25YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel3yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel3YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel3.5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel35YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel4yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel4YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel4.5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel45YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel5YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel5.5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel55YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel6yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel6YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel6.5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel65YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel7yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel7YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel7.5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel75YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel8yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel8YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel8.5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel85YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel9yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel9YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel9.5yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel95YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel10yellow-goldsinglesilk": (
    <img src={IMAGES.Parabel10YellowGoldSingleSilk} alt="RingPair" />
  ),
  "parabel2rose-goldsinglesilk": (
    <img src={IMAGES.Parabel2RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel2.5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel25RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel3rose-goldsinglesilk": (
    <img src={IMAGES.Parabel3RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel3.5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel35RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel4rose-goldsinglesilk": (
    <img src={IMAGES.Parabel4RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel4.5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel45RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel5RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel5.5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel55RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel6rose-goldsinglesilk": (
    <img src={IMAGES.Parabel6RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel6.5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel65RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel7rose-goldsinglesilk": (
    <img src={IMAGES.Parabel7RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel7.5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel75RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel8rose-goldsinglesilk": (
    <img src={IMAGES.Parabel8RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel8.5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel85RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel9rose-goldsinglesilk": (
    <img src={IMAGES.Parabel9RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel9.5rose-goldsinglesilk": (
    <img src={IMAGES.Parabel95RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel10rose-goldsinglesilk": (
    <img src={IMAGES.Parabel10RoseGoldSingleSilk} alt="RingPair" />
  ),
  "parabel2white-goldsinglesilk": (
    <img src={IMAGES.Parabel2WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel2.5white-goldsinglesilk": (
    <img src={IMAGES.Parabel25WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel3white-goldsinglesilk": (
    <img src={IMAGES.Parabel3WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel3.5white-goldsinglesilk": (
    <img src={IMAGES.Parabel35WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel4white-goldsinglesilk": (
    <img src={IMAGES.Parabel4WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel4.5white-goldsinglesilk": (
    <img src={IMAGES.Parabel45WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel5white-goldsinglesilk": (
    <img src={IMAGES.Parabel5WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel5.5white-goldsinglesilk": (
    <img src={IMAGES.Parabel55WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel6white-goldsinglesilk": (
    <img src={IMAGES.Parabel6WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel6.5white-goldsinglesilk": (
    <img src={IMAGES.Parabel65WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel7white-goldsinglesilk": (
    <img src={IMAGES.Parabel7WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel7.5white-goldsinglesilk": (
    <img src={IMAGES.Parabel75WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel8white-goldsinglesilk": (
    <img src={IMAGES.Parabel8WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel8.5white-goldsinglesilk": (
    <img src={IMAGES.Parabel85WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel9white-goldsinglesilk": (
    <img src={IMAGES.Parabel9WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel9.5white-goldsinglesilk": (
    <img src={IMAGES.Parabel95WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "parabel10white-goldsinglesilk": (
    <img src={IMAGES.Parabel10WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut2yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut2YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut2.5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut25YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut3yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut3YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut3.5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut35YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut4yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut4YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut4.5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut45YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut5YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut5.5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut55YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut6yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut6YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut6.5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut65YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut7yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut7YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut7.5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut75YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut8yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut8YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut8.5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut85YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut9yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut9YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut9.5yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut95YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut10yellow-goldsinglesilk": (
    <img src={IMAGES.Sidecut10YellowGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut2rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut2RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut2.5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut25RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut3rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut3RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut3.5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut35RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut4rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut4RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut4.5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut45RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut5RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut5.5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut55RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut6rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut6RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut6.5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut65RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut7rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut7RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut7.5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut75RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut8rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut8RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut8.5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut85RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut9rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut9RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut9.5rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut95RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut10rose-goldsinglesilk": (
    <img src={IMAGES.Sidecut10RoseGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut2white-goldsinglesilk": (
    <img src={IMAGES.Sidecut2WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut2.5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut25WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut3white-goldsinglesilk": (
    <img src={IMAGES.Sidecut3WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut3.5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut35WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut4white-goldsinglesilk": (
    <img src={IMAGES.Sidecut4WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut4.5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut45WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut5WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut5.5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut55WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut6white-goldsinglesilk": (
    <img src={IMAGES.Sidecut6WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut6.5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut65WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut7white-goldsinglesilk": (
    <img src={IMAGES.Sidecut7WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut7.5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut75WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut8white-goldsinglesilk": (
    <img src={IMAGES.Sidecut8WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut8.5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut85WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut9white-goldsinglesilk": (
    <img src={IMAGES.Sidecut9WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut9.5white-goldsinglesilk": (
    <img src={IMAGES.Sidecut95WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "sidecut10white-goldsinglesilk": (
    <img src={IMAGES.Sidecut10WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar2yellow-goldsinglesilk": (
    <img src={IMAGES.Planar2YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar2.5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar25YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar3yellow-goldsinglesilk": (
    <img src={IMAGES.Planar3YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar3.5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar35YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar4yellow-goldsinglesilk": (
    <img src={IMAGES.Planar4YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar4.5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar45YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar5YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar5.5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar55YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar6yellow-goldsinglesilk": (
    <img src={IMAGES.Planar6YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar6.5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar65YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar7yellow-goldsinglesilk": (
    <img src={IMAGES.Planar7YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar7.5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar75YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar8yellow-goldsinglesilk": (
    <img src={IMAGES.Planar8YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar8.5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar85YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar9yellow-goldsinglesilk": (
    <img src={IMAGES.Planar9YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar9.5yellow-goldsinglesilk": (
    <img src={IMAGES.Planar95YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar10yellow-goldsinglesilk": (
    <img src={IMAGES.Planar10YellowGoldSingleSilk} alt="RingPair" />
  ),
  "planar2rose-goldsinglesilk": (
    <img src={IMAGES.Planar2RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar2.5rose-goldsinglesilk": (
    <img src={IMAGES.Planar25RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar3rose-goldsinglesilk": (
    <img src={IMAGES.Planar3RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar3.5rose-goldsinglesilk": (
    <img src={IMAGES.Planar35RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar4rose-goldsinglesilk": (
    <img src={IMAGES.Planar4RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar4.5rose-goldsinglesilk": (
    <img src={IMAGES.Planar45RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar5rose-goldsinglesilk": (
    <img src={IMAGES.Planar5RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar5.5rose-goldsinglesilk": (
    <img src={IMAGES.Planar55RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar6rose-goldsinglesilk": (
    <img src={IMAGES.Planar6RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar6.5rose-goldsinglesilk": (
    <img src={IMAGES.Planar65RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar7rose-goldsinglesilk": (
    <img src={IMAGES.Planar7RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar7.5rose-goldsinglesilk": (
    <img src={IMAGES.Planar75RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar8rose-goldsinglesilk": (
    <img src={IMAGES.Planar8RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar8.5rose-goldsinglesilk": (
    <img src={IMAGES.Planar85RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar9rose-goldsinglesilk": (
    <img src={IMAGES.Planar9RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar9.5rose-goldsinglesilk": (
    <img src={IMAGES.Planar95RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar10rose-goldsinglesilk": (
    <img src={IMAGES.Planar10RoseGoldSingleSilk} alt="RingPair" />
  ),
  "planar2white-goldsinglesilk": (
    <img src={IMAGES.Planar2WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar2.5white-goldsinglesilk": (
    <img src={IMAGES.Planar25WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar3white-goldsinglesilk": (
    <img src={IMAGES.Planar3WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar3.5white-goldsinglesilk": (
    <img src={IMAGES.Planar35WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar4white-goldsinglesilk": (
    <img src={IMAGES.Planar4WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar4.5white-goldsinglesilk": (
    <img src={IMAGES.Planar45WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar5white-goldsinglesilk": (
    <img src={IMAGES.Planar5WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar5.5white-goldsinglesilk": (
    <img src={IMAGES.Planar55WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar6white-goldsinglesilk": (
    <img src={IMAGES.Planar6WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar6.5white-goldsinglesilk": (
    <img src={IMAGES.Planar65WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar7white-goldsinglesilk": (
    <img src={IMAGES.Planar7WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar7.5white-goldsinglesilk": (
    <img src={IMAGES.Planar75WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar8white-goldsinglesilk": (
    <img src={IMAGES.Planar8WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar8.5white-goldsinglesilk": (
    <img src={IMAGES.Planar85WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar9white-goldsinglesilk": (
    <img src={IMAGES.Planar9WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar9.5white-goldsinglesilk": (
    <img src={IMAGES.Planar95WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "planar10white-goldsinglesilk": (
    <img src={IMAGES.Planar10WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma2yellow-goldsinglesilk": (
    <img src={IMAGES.Forma2YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma2.5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma25YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma3yellow-goldsinglesilk": (
    <img src={IMAGES.Forma3YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma3.5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma35YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma4yellow-goldsinglesilk": (
    <img src={IMAGES.Forma4YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma4.5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma45YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma5YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma5.5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma55YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma6yellow-goldsinglesilk": (
    <img src={IMAGES.Forma6YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma6.5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma65YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma7yellow-goldsinglesilk": (
    <img src={IMAGES.Forma7YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma7.5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma75YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma8yellow-goldsinglesilk": (
    <img src={IMAGES.Forma8YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma8.5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma85YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma9yellow-goldsinglesilk": (
    <img src={IMAGES.Forma9YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma9.5yellow-goldsinglesilk": (
    <img src={IMAGES.Forma95YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma10yellow-goldsinglesilk": (
    <img src={IMAGES.Forma10YellowGoldSingleSilk} alt="RingPair" />
  ),
  "forma2rose-goldsinglesilk": (
    <img src={IMAGES.Forma2RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma2.5rose-goldsinglesilk": (
    <img src={IMAGES.Forma25RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma3rose-goldsinglesilk": (
    <img src={IMAGES.Forma3RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma3.5rose-goldsinglesilk": (
    <img src={IMAGES.Forma35RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma4rose-goldsinglesilk": (
    <img src={IMAGES.Forma4RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma4.5rose-goldsinglesilk": (
    <img src={IMAGES.Forma45RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma5rose-goldsinglesilk": (
    <img src={IMAGES.Forma5RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma5.5rose-goldsinglesilk": (
    <img src={IMAGES.Forma55RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma6rose-goldsinglesilk": (
    <img src={IMAGES.Forma6RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma6.5rose-goldsinglesilk": (
    <img src={IMAGES.Forma65RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma7rose-goldsinglesilk": (
    <img src={IMAGES.Forma7RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma7.5rose-goldsinglesilk": (
    <img src={IMAGES.Forma75RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma8rose-goldsinglesilk": (
    <img src={IMAGES.Forma8RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma8.5rose-goldsinglesilk": (
    <img src={IMAGES.Forma85RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma9rose-goldsinglesilk": (
    <img src={IMAGES.Forma9RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma9.5rose-goldsinglesilk": (
    <img src={IMAGES.Forma95RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma10rose-goldsinglesilk": (
    <img src={IMAGES.Forma10RoseGoldSingleSilk} alt="RingPair" />
  ),
  "forma2white-goldsinglesilk": (
    <img src={IMAGES.Forma2WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma2.5white-goldsinglesilk": (
    <img src={IMAGES.Forma25WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma3white-goldsinglesilk": (
    <img src={IMAGES.Forma3WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma3.5white-goldsinglesilk": (
    <img src={IMAGES.Forma35WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma4white-goldsinglesilk": (
    <img src={IMAGES.Forma4WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma4.5white-goldsinglesilk": (
    <img src={IMAGES.Forma45WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma5white-goldsinglesilk": (
    <img src={IMAGES.Forma5WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma5.5white-goldsinglesilk": (
    <img src={IMAGES.Forma55WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma6white-goldsinglesilk": (
    <img src={IMAGES.Forma6WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma6.5white-goldsinglesilk": (
    <img src={IMAGES.Forma65WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma7white-goldsinglesilk": (
    <img src={IMAGES.Forma7WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma7.5white-goldsinglesilk": (
    <img src={IMAGES.Forma75WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma8white-goldsinglesilk": (
    <img src={IMAGES.Forma8WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma8.5white-goldsinglesilk": (
    <img src={IMAGES.Forma85WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma9white-goldsinglesilk": (
    <img src={IMAGES.Forma9WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma9.5white-goldsinglesilk": (
    <img src={IMAGES.Forma95WhiteGoldSingleSilk} alt="RingPair" />
  ),
  "forma10white-goldsinglesilk": (
    <img src={IMAGES.Forma10WhiteGoldSingleSilk} alt="RingPair" />
  ),
};

class RingPair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "oval",
      color: "white-gold",
      color2: "white-gold",
      color3: "white-gold",
      measure: 4,
      size: 45,
      surface: "polished",
      surface2: "polished",
      surface3: "polished",
      seam: "seamless",
      alocationModal: false,
      alocation: "single",
      colorMaterialModal1: false,
      colorMaterialModal2: false,
      colorMaterialModal3: false,
    };
  }
  render() {
    return (
      <div className="ring-pair-container">
        {
          IMAGESCOMB[
            `${this.state.profile}${this.state.measure}${this.state.color}${this.state.alocation}${this.state.surface}`
          ]
        }
        <div className="ring-profile-select">
          <div className="ring-profile-select-container">
            <span className="ring-profile-select-span">Profil Prstena:</span>
            <div style={{ width: "100%" }}>
              <Select
                className="ring-profile-select-select"
                options={options}
                isClearable
                placeholder="Izaberi..."
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
              min={2}
              max={10}
              defaultValue={this.state.measure}
              marks={{
                2: 2,
                2.5: 2.5,
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
                className={`ring-color-tab ${this.state.color}-color`}
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
                  className={`ring-color-tab ${this.state.color2}-color`}
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
                    className={`ring-color-tab ${this.state.color3}-color`}
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
                onChange={(e) =>
                  this.setState({ seam: e ? e.value : "seamless" })
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
