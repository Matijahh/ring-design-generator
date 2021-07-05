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
  "oval2yellow-gold": (
    <img src={IMAGES.Oval2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval2.5yellow-gold": (
    <img src={IMAGES.Oval25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval3yellow-gold": (
    <img src={IMAGES.Oval3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval3.5yellow-gold": (
    <img src={IMAGES.Oval35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval4yellow-gold": (
    <img src={IMAGES.Oval4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval4.5yellow-gold": (
    <img src={IMAGES.Oval45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval5yellow-gold": (
    <img src={IMAGES.Oval5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval5.5yellow-gold": (
    <img src={IMAGES.Oval55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval6yellow-gold": (
    <img src={IMAGES.Oval6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval6.5yellow-gold": (
    <img src={IMAGES.Oval65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval7yellow-gold": (
    <img src={IMAGES.Oval7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval7.5yellow-gold": (
    <img src={IMAGES.Oval75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval8yellow-gold": (
    <img src={IMAGES.Oval8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval8.5yellow-gold": (
    <img src={IMAGES.Oval85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval9yellow-gold": (
    <img src={IMAGES.Oval9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval9.5yellow-gold": (
    <img src={IMAGES.Oval95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval10yellow-gold": (
    <img src={IMAGES.Oval10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval2rose-gold": (
    <img src={IMAGES.Oval2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval2.5rose-gold": (
    <img src={IMAGES.Oval25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval3rose-gold": (
    <img src={IMAGES.Oval3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval3.5rose-gold": (
    <img src={IMAGES.Oval35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval4rose-gold": (
    <img src={IMAGES.Oval4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval4.5rose-gold": (
    <img src={IMAGES.Oval45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval5rose-gold": (
    <img src={IMAGES.Oval5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval5.5rose-gold": (
    <img src={IMAGES.Oval55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval6rose-gold": (
    <img src={IMAGES.Oval6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval6.5rose-gold": (
    <img src={IMAGES.Oval65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval7rose-gold": (
    <img src={IMAGES.Oval7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval7.5rose-gold": (
    <img src={IMAGES.Oval75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval8rose-gold": (
    <img src={IMAGES.Oval8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval8.5rose-gold": (
    <img src={IMAGES.Oval85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval9rose-gold": (
    <img src={IMAGES.Oval9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval9.5rose-gold": (
    <img src={IMAGES.Oval95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval10rose-gold": (
    <img src={IMAGES.Oval10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "oval2white-gold": (
    <img src={IMAGES.Oval2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval2.5white-gold": (
    <img src={IMAGES.Oval25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval3white-gold": (
    <img src={IMAGES.Oval3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval3.5white-gold": (
    <img src={IMAGES.Oval35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval4white-gold": (
    <img src={IMAGES.Oval4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval4.5white-gold": (
    <img src={IMAGES.Oval45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval5white-gold": (
    <img src={IMAGES.Oval5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval5.5white-gold": (
    <img src={IMAGES.Oval55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval6white-gold": (
    <img src={IMAGES.Oval6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval6.5white-gold": (
    <img src={IMAGES.Oval65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval7white-gold": (
    <img src={IMAGES.Oval7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval7.5white-gold": (
    <img src={IMAGES.Oval75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval8white-gold": (
    <img src={IMAGES.Oval8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval8.5white-gold": (
    <img src={IMAGES.Oval85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval9white-gold": (
    <img src={IMAGES.Oval9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval9.5white-gold": (
    <img src={IMAGES.Oval95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval10white-gold": (
    <img src={IMAGES.Oval10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2yellow-gold": (
    <img src={IMAGES.Elipse2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5yellow-gold": (
    <img src={IMAGES.Elipse25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3yellow-gold": (
    <img src={IMAGES.Elipse3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5yellow-gold": (
    <img src={IMAGES.Elipse35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4yellow-gold": (
    <img src={IMAGES.Elipse4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5yellow-gold": (
    <img src={IMAGES.Elipse45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5yellow-gold": (
    <img src={IMAGES.Elipse5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5yellow-gold": (
    <img src={IMAGES.Elipse55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6yellow-gold": (
    <img src={IMAGES.Elipse6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5yellow-gold": (
    <img src={IMAGES.Elipse65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7yellow-gold": (
    <img src={IMAGES.Elipse7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5yellow-gold": (
    <img src={IMAGES.Elipse75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8yellow-gold": (
    <img src={IMAGES.Elipse8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5yellow-gold": (
    <img src={IMAGES.Elipse85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9yellow-gold": (
    <img src={IMAGES.Elipse9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5yellow-gold": (
    <img src={IMAGES.Elipse95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10yellow-gold": (
    <img src={IMAGES.Elipse10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2rose-gold": (
    <img src={IMAGES.Elipse2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5rose-gold": (
    <img src={IMAGES.Elipse25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3rose-gold": (
    <img src={IMAGES.Elipse3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5rose-gold": (
    <img src={IMAGES.Elipse35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4rose-gold": (
    <img src={IMAGES.Elipse4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5rose-gold": (
    <img src={IMAGES.Elipse45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5rose-gold": (
    <img src={IMAGES.Elipse5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5rose-gold": (
    <img src={IMAGES.Elipse55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6rose-gold": (
    <img src={IMAGES.Elipse6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5rose-gold": (
    <img src={IMAGES.Elipse65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7rose-gold": (
    <img src={IMAGES.Elipse7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5rose-gold": (
    <img src={IMAGES.Elipse75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8rose-gold": (
    <img src={IMAGES.Elipse8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5rose-gold": (
    <img src={IMAGES.Elipse85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9rose-gold": (
    <img src={IMAGES.Elipse9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5rose-gold": (
    <img src={IMAGES.Elipse95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10rose-gold": (
    <img src={IMAGES.Elipse10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2white-gold": (
    <img src={IMAGES.Elipse2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5white-gold": (
    <img src={IMAGES.Elipse25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3white-gold": (
    <img src={IMAGES.Elipse3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5white-gold": (
    <img src={IMAGES.Elipse35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4white-gold": (
    <img src={IMAGES.Elipse4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5white-gold": (
    <img src={IMAGES.Elipse45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5white-gold": (
    <img src={IMAGES.Elipse5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5white-gold": (
    <img src={IMAGES.Elipse55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6white-gold": (
    <img src={IMAGES.Elipse6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5white-gold": (
    <img src={IMAGES.Elipse65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7white-gold": (
    <img src={IMAGES.Elipse7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5white-gold": (
    <img src={IMAGES.Elipse75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8white-gold": (
    <img src={IMAGES.Elipse8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5white-gold": (
    <img src={IMAGES.Elipse85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9white-gold": (
    <img src={IMAGES.Elipse9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5white-gold": (
    <img src={IMAGES.Elipse95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10white-gold": (
    <img src={IMAGES.Elipse10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2yellow-gold": (
    <img src={IMAGES.Parabel2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5yellow-gold": (
    <img src={IMAGES.Parabel25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3yellow-gold": (
    <img src={IMAGES.Parabel3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5yellow-gold": (
    <img src={IMAGES.Parabel35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4yellow-gold": (
    <img src={IMAGES.Parabel4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5yellow-gold": (
    <img src={IMAGES.Parabel45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5yellow-gold": (
    <img src={IMAGES.Parabel5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5yellow-gold": (
    <img src={IMAGES.Parabel55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6yellow-gold": (
    <img src={IMAGES.Parabel6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5yellow-gold": (
    <img src={IMAGES.Parabel65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7yellow-gold": (
    <img src={IMAGES.Parabel7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5yellow-gold": (
    <img src={IMAGES.Parabel75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8yellow-gold": (
    <img src={IMAGES.Parabel8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5yellow-gold": (
    <img src={IMAGES.Parabel85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9yellow-gold": (
    <img src={IMAGES.Parabel9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5yellow-gold": (
    <img src={IMAGES.Parabel95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10yellow-gold": (
    <img src={IMAGES.Parabel10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2rose-gold": (
    <img src={IMAGES.Parabel2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5rose-gold": (
    <img src={IMAGES.Parabel25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3rose-gold": (
    <img src={IMAGES.Parabel3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5rose-gold": (
    <img src={IMAGES.Parabel35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4rose-gold": (
    <img src={IMAGES.Parabel4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5rose-gold": (
    <img src={IMAGES.Parabel45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5rose-gold": (
    <img src={IMAGES.Parabel5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5rose-gold": (
    <img src={IMAGES.Parabel55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6rose-gold": (
    <img src={IMAGES.Parabel6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5rose-gold": (
    <img src={IMAGES.Parabel65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7rose-gold": (
    <img src={IMAGES.Parabel7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5rose-gold": (
    <img src={IMAGES.Parabel75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8rose-gold": (
    <img src={IMAGES.Parabel8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5rose-gold": (
    <img src={IMAGES.Parabel85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9rose-gold": (
    <img src={IMAGES.Parabel9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5rose-gold": (
    <img src={IMAGES.Parabel95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10rose-gold": (
    <img src={IMAGES.Parabel10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2white-gold": (
    <img src={IMAGES.Parabel2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5white-gold": (
    <img src={IMAGES.Parabel25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3white-gold": (
    <img src={IMAGES.Parabel3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5white-gold": (
    <img src={IMAGES.Parabel35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4white-gold": (
    <img src={IMAGES.Parabel4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5white-gold": (
    <img src={IMAGES.Parabel45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5white-gold": (
    <img src={IMAGES.Parabel5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5white-gold": (
    <img src={IMAGES.Parabel55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6white-gold": (
    <img src={IMAGES.Parabel6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5white-gold": (
    <img src={IMAGES.Parabel65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7white-gold": (
    <img src={IMAGES.Parabel7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5white-gold": (
    <img src={IMAGES.Parabel75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8white-gold": (
    <img src={IMAGES.Parabel8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5white-gold": (
    <img src={IMAGES.Parabel85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9white-gold": (
    <img src={IMAGES.Parabel9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5white-gold": (
    <img src={IMAGES.Parabel95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10white-gold": (
    <img src={IMAGES.Parabel10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2yellow-gold": (
    <img src={IMAGES.Sidecut2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5yellow-gold": (
    <img src={IMAGES.Sidecut25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3yellow-gold": (
    <img src={IMAGES.Sidecut3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5yellow-gold": (
    <img src={IMAGES.Sidecut35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4yellow-gold": (
    <img src={IMAGES.Sidecut4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5yellow-gold": (
    <img src={IMAGES.Sidecut45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5yellow-gold": (
    <img src={IMAGES.Sidecut5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5yellow-gold": (
    <img src={IMAGES.Sidecut55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6yellow-gold": (
    <img src={IMAGES.Sidecut6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5yellow-gold": (
    <img src={IMAGES.Sidecut65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7yellow-gold": (
    <img src={IMAGES.Sidecut7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5yellow-gold": (
    <img src={IMAGES.Sidecut75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8yellow-gold": (
    <img src={IMAGES.Sidecut8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5yellow-gold": (
    <img src={IMAGES.Sidecut85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9yellow-gold": (
    <img src={IMAGES.Sidecut9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5yellow-gold": (
    <img src={IMAGES.Sidecut95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10yellow-gold": (
    <img src={IMAGES.Sidecut10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2rose-gold": (
    <img src={IMAGES.Sidecut2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5rose-gold": (
    <img src={IMAGES.Sidecut25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3rose-gold": (
    <img src={IMAGES.Sidecut3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5rose-gold": (
    <img src={IMAGES.Sidecut35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4rose-gold": (
    <img src={IMAGES.Sidecut4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5rose-gold": (
    <img src={IMAGES.Sidecut45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5rose-gold": (
    <img src={IMAGES.Sidecut5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5rose-gold": (
    <img src={IMAGES.Sidecut55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6rose-gold": (
    <img src={IMAGES.Sidecut6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5rose-gold": (
    <img src={IMAGES.Sidecut65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7rose-gold": (
    <img src={IMAGES.Sidecut7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5rose-gold": (
    <img src={IMAGES.Sidecut75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8rose-gold": (
    <img src={IMAGES.Sidecut8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5rose-gold": (
    <img src={IMAGES.Sidecut85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9rose-gold": (
    <img src={IMAGES.Sidecut9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5rose-gold": (
    <img src={IMAGES.Sidecut95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10rose-gold": (
    <img src={IMAGES.Sidecut10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2white-gold": (
    <img src={IMAGES.Sidecut2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5white-gold": (
    <img src={IMAGES.Sidecut25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3white-gold": (
    <img src={IMAGES.Sidecut3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5white-gold": (
    <img src={IMAGES.Sidecut35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4white-gold": (
    <img src={IMAGES.Sidecut4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5white-gold": (
    <img src={IMAGES.Sidecut45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5white-gold": (
    <img src={IMAGES.Sidecut5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5white-gold": (
    <img src={IMAGES.Sidecut55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6white-gold": (
    <img src={IMAGES.Sidecut6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5white-gold": (
    <img src={IMAGES.Sidecut65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7white-gold": (
    <img src={IMAGES.Sidecut7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5white-gold": (
    <img src={IMAGES.Sidecut75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8white-gold": (
    <img src={IMAGES.Sidecut8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5white-gold": (
    <img src={IMAGES.Sidecut85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9white-gold": (
    <img src={IMAGES.Sidecut9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5white-gold": (
    <img src={IMAGES.Sidecut95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10white-gold": (
    <img src={IMAGES.Sidecut10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar2yellow-gold": (
    <img src={IMAGES.Planar2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5yellow-gold": (
    <img src={IMAGES.Planar25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar3yellow-gold": (
    <img src={IMAGES.Planar3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5yellow-gold": (
    <img src={IMAGES.Planar35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar4yellow-gold": (
    <img src={IMAGES.Planar4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5yellow-gold": (
    <img src={IMAGES.Planar45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar5yellow-gold": (
    <img src={IMAGES.Planar5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5yellow-gold": (
    <img src={IMAGES.Planar55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar6yellow-gold": (
    <img src={IMAGES.Planar6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5yellow-gold": (
    <img src={IMAGES.Planar65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar7yellow-gold": (
    <img src={IMAGES.Planar7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5yellow-gold": (
    <img src={IMAGES.Planar75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar8yellow-gold": (
    <img src={IMAGES.Planar8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5yellow-gold": (
    <img src={IMAGES.Planar85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar9yellow-gold": (
    <img src={IMAGES.Planar9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5yellow-gold": (
    <img src={IMAGES.Planar95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar10yellow-gold": (
    <img src={IMAGES.Planar10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar2rose-gold": (
    <img src={IMAGES.Planar2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5rose-gold": (
    <img src={IMAGES.Planar25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar3rose-gold": (
    <img src={IMAGES.Planar3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5rose-gold": (
    <img src={IMAGES.Planar35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar4rose-gold": (
    <img src={IMAGES.Planar4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5rose-gold": (
    <img src={IMAGES.Planar45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar5rose-gold": (
    <img src={IMAGES.Planar5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5rose-gold": (
    <img src={IMAGES.Planar55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar6rose-gold": (
    <img src={IMAGES.Planar6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5rose-gold": (
    <img src={IMAGES.Planar65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar7rose-gold": (
    <img src={IMAGES.Planar7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5rose-gold": (
    <img src={IMAGES.Planar75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar8rose-gold": (
    <img src={IMAGES.Planar8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5rose-gold": (
    <img src={IMAGES.Planar85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar9rose-gold": (
    <img src={IMAGES.Planar9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5rose-gold": (
    <img src={IMAGES.Planar95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar10rose-gold": (
    <img src={IMAGES.Planar10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar2white-gold": (
    <img src={IMAGES.Planar2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5white-gold": (
    <img src={IMAGES.Planar25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar3white-gold": (
    <img src={IMAGES.Planar3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5white-gold": (
    <img src={IMAGES.Planar35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar4white-gold": (
    <img src={IMAGES.Planar4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5white-gold": (
    <img src={IMAGES.Planar45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar5white-gold": (
    <img src={IMAGES.Planar5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5white-gold": (
    <img src={IMAGES.Planar55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar6white-gold": (
    <img src={IMAGES.Planar6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5white-gold": (
    <img src={IMAGES.Planar65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar7white-gold": (
    <img src={IMAGES.Planar7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5white-gold": (
    <img src={IMAGES.Planar75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar8white-gold": (
    <img src={IMAGES.Planar8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5white-gold": (
    <img src={IMAGES.Planar85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar9white-gold": (
    <img src={IMAGES.Planar9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5white-gold": (
    <img src={IMAGES.Planar95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar10white-gold": (
    <img src={IMAGES.Planar10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma2yellow-gold": (
    <img src={IMAGES.Forma2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma2.5yellow-gold": (
    <img src={IMAGES.Forma25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma3yellow-gold": (
    <img src={IMAGES.Forma3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma3.5yellow-gold": (
    <img src={IMAGES.Forma35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma4yellow-gold": (
    <img src={IMAGES.Forma4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma4.5yellow-gold": (
    <img src={IMAGES.Forma45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma5yellow-gold": (
    <img src={IMAGES.Forma5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma5.5yellow-gold": (
    <img src={IMAGES.Forma55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma6yellow-gold": (
    <img src={IMAGES.Forma6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma6.5yellow-gold": (
    <img src={IMAGES.Forma65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma7yellow-gold": (
    <img src={IMAGES.Forma7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma7.5yellow-gold": (
    <img src={IMAGES.Forma75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma8yellow-gold": (
    <img src={IMAGES.Forma8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma8.5yellow-gold": (
    <img src={IMAGES.Forma85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma9yellow-gold": (
    <img src={IMAGES.Forma9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma9.5yellow-gold": (
    <img src={IMAGES.Forma95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma10yellow-gold": (
    <img src={IMAGES.Forma10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma2rose-gold": (
    <img src={IMAGES.Forma2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma2.5rose-gold": (
    <img src={IMAGES.Forma25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma3rose-gold": (
    <img src={IMAGES.Forma3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma3.5rose-gold": (
    <img src={IMAGES.Forma35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma4rose-gold": (
    <img src={IMAGES.Forma4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma4.5rose-gold": (
    <img src={IMAGES.Forma45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma5rose-gold": (
    <img src={IMAGES.Forma5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma5.5rose-gold": (
    <img src={IMAGES.Forma55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma6rose-gold": (
    <img src={IMAGES.Forma6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma6.5rose-gold": (
    <img src={IMAGES.Forma65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma7rose-gold": (
    <img src={IMAGES.Forma7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma7.5rose-gold": (
    <img src={IMAGES.Forma75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma8rose-gold": (
    <img src={IMAGES.Forma8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma8.5rose-gold": (
    <img src={IMAGES.Forma85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma9rose-gold": (
    <img src={IMAGES.Forma9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma9.5rose-gold": (
    <img src={IMAGES.Forma95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma10rose-gold": (
    <img src={IMAGES.Forma10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma2white-gold": (
    <img src={IMAGES.Forma2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma2.5white-gold": (
    <img src={IMAGES.Forma25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma3white-gold": (
    <img src={IMAGES.Forma3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma3.5white-gold": (
    <img src={IMAGES.Forma35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma4white-gold": (
    <img src={IMAGES.Forma4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma4.5white-gold": (
    <img src={IMAGES.Forma45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma5white-gold": (
    <img src={IMAGES.Forma5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma5.5white-gold": (
    <img src={IMAGES.Forma55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma6white-gold": (
    <img src={IMAGES.Forma6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma6.5white-gold": (
    <img src={IMAGES.Forma65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma7white-gold": (
    <img src={IMAGES.Forma7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma7.5white-gold": (
    <img src={IMAGES.Forma75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma8white-gold": (
    <img src={IMAGES.Forma8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma8.5white-gold": (
    <img src={IMAGES.Forma85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma9white-gold": (
    <img src={IMAGES.Forma9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma9.5white-gold": (
    <img src={IMAGES.Forma95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma10white-gold": (
    <img src={IMAGES.Forma10WhiteGoldSinglePolished} alt="RingPair" />
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
            `${this.state.profile}${this.state.measure}${this.state.color}`
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
                className="ring-color-tab"
                onClick={() =>
                  this.setState({
                    colorMaterialModal2: false,
                    colorMaterialModal3: false,
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
                  className="ring-color-tab"
                  onClick={() =>
                    this.setState({
                      colorMaterialModal1: false,
                      colorMaterialModal3: false,
                      colorMaterialModal2: !this.state.colorMaterialModal2,
                    })
                  }
                >
                  {this.state.colorMaterialModal2 && (
                    <ColorMaterialModal
                      onChangeColor={(color) =>
                        this.setState({
                          color2: color,
                          colorMaterialModal1: false,
                        })
                      }
                      onChangeMaterial={(material) =>
                        this.setState({
                          surface2: material,
                          colorMaterialModal1: false,
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
                    className="ring-color-tab"
                    onClick={() =>
                      this.setState({
                        colorMaterialModal1: false,
                        colorMaterialModal2: false,
                        colorMaterialModal3: !this.state.colorMaterialModal3,
                      })
                    }
                  >
                    {this.state.colorMaterialModal3 && (
                      <ColorMaterialModal
                        onChangeColor={(color) =>
                          this.setState({
                            color3: color,
                            colorMaterialModal1: false,
                          })
                        }
                        onChangeMaterial={(material) =>
                          this.setState({
                            surface3: material,
                            colorMaterialModal1: false,
                          })
                        }
                      />
                    )}
                    <span>3</span>
                  </div>
                )}
              {/* <div
                className={`ring-color-tab white-gold-color ${
                  this.state.color === "white-gold" && "selected"
                }`}
                onClick={() => this.setState({ color: "white-gold" })}
              ></div>
              <div
                className={`ring-color-tab yellow-gold-color ${
                  this.state.color === "yellow-gold" && "selected"
                }`}
                onClick={() => this.setState({ color: "yellow-gold" })}
              ></div>
              <div
                className={`ring-color-tab rose-gold-color ${
                  this.state.color === "rose-gold" && "selected"
                }`}
                onClick={() => this.setState({ color: "rose-gold" })}
              ></div> */}
            </div>
          </div>
          {/* <div
            className="ring-color-select-container"
            style={{ marginTop: 40 }}
          >
            <span className="ring-profile-select-span">Površina prstena:</span>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div
                className={`ring-color-tab polished-texture ${
                  this.state.surface === "polished" && "selected"
                }`}
                onClick={() => this.setState({ surface: "polished" })}
              ></div>
              <div
                className={`ring-color-tab silk-texture ${
                  this.state.surface === "silk" && "selected"
                }`}
                onClick={() => this.setState({ surface: "silk" })}
              ></div>
              <div
                className={`ring-color-tab sand-texture ${
                  this.state.surface === "sand" && "selected"
                }`}
                onClick={() => this.setState({ surface: "sand" })}
              ></div>
              <div
                className={`ring-color-tab ice-texture ${
                  this.state.surface === "ice" && "selected"
                }`}
                onClick={() => this.setState({ surface: "ice" })}
              ></div>
              <div
                className={`ring-color-tab rock-texture ${
                  this.state.surface === "rock" && "selected"
                }`}
                onClick={() => this.setState({ surface: "rock" })}
              ></div>
            </div>
          </div> */}
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
                this.setState({ alocationModal: !this.state.alocationModal })
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RingPair;
