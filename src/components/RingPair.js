import React, { Component } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// Oval Yellow Gold Single Polished
import Oval2YellowGoldSinglePolished from "../assets/images/oval-2-yellow-gold-single-polished.jpg";
import Oval25YellowGoldSinglePolished from "../assets/images/oval-2.5-yellow-gold-single-polished.jpg";
import Oval3YellowGoldSinglePolished from "../assets/images/oval-3-yellow-gold-single-polished.jpg";
import Oval35YellowGoldSinglePolished from "../assets/images/oval-3.5-yellow-gold-single-polished.jpg";
import Oval4YellowGoldSinglePolished from "../assets/images/oval-4-yellow-gold-single-polished.jpg";
import Oval45YellowGoldSinglePolished from "../assets/images/oval-4.5-yellow-gold-single-polished.jpg";
import Oval5YellowGoldSinglePolished from "../assets/images/oval-5-yellow-gold-single-polished.jpg";
import Oval55YellowGoldSinglePolished from "../assets/images/oval-5.5-yellow-gold-single-polished.jpg";
import Oval6YellowGoldSinglePolished from "../assets/images/oval-6-yellow-gold-single-polished.jpg";
import Oval65YellowGoldSinglePolished from "../assets/images/oval-6.5-yellow-gold-single-polished.jpg";
import Oval7YellowGoldSinglePolished from "../assets/images/oval-7-yellow-gold-single-polished.jpg";
import Oval75YellowGoldSinglePolished from "../assets/images/oval-7.5-yellow-gold-single-polished.jpg";
import Oval8YellowGoldSinglePolished from "../assets/images/oval-8-yellow-gold-single-polished.jpg";
import Oval85YellowGoldSinglePolished from "../assets/images/oval-8.5-yellow-gold-single-polished.jpg";
import Oval9YellowGoldSinglePolished from "../assets/images/oval-9-yellow-gold-single-polished.jpg";
import Oval95YellowGoldSinglePolished from "../assets/images/oval-9.5-yellow-gold-single-polished.jpg";
import Oval10YellowGoldSinglePolished from "../assets/images/oval-10-yellow-gold-single-polished.jpg";

// Oval Rose Gold Single Polished
import Oval2RoseGoldSinglePolished from "../assets/images/oval-2-rose-gold-single-polished.jpg";
import Oval25RoseGoldSinglePolished from "../assets/images/oval-2.5-rose-gold-single-polished.jpg";
import Oval3RoseGoldSinglePolished from "../assets/images/oval-3-rose-gold-single-polished.jpg";
import Oval35RoseGoldSinglePolished from "../assets/images/oval-3.5-rose-gold-single-polished.jpg";
import Oval4RoseGoldSinglePolished from "../assets/images/oval-4-rose-gold-single-polished.jpg";
import Oval45RoseGoldSinglePolished from "../assets/images/oval-4.5-rose-gold-single-polished.jpg";
import Oval5RoseGoldSinglePolished from "../assets/images/oval-5-rose-gold-single-polished.jpg";
import Oval55RoseGoldSinglePolished from "../assets/images/oval-5.5-rose-gold-single-polished.jpg";
import Oval6RoseGoldSinglePolished from "../assets/images/oval-6-rose-gold-single-polished.jpg";
import Oval65RoseGoldSinglePolished from "../assets/images/oval-6.5-rose-gold-single-polished.jpg";
import Oval7RoseGoldSinglePolished from "../assets/images/oval-7-rose-gold-single-polished.jpg";
import Oval75RoseGoldSinglePolished from "../assets/images/oval-7.5-rose-gold-single-polished.jpg";
import Oval8RoseGoldSinglePolished from "../assets/images/oval-8-rose-gold-single-polished.jpg";
import Oval85RoseGoldSinglePolished from "../assets/images/oval-8.5-rose-gold-single-polished.jpg";
import Oval9RoseGoldSinglePolished from "../assets/images/oval-9-rose-gold-single-polished.jpg";
import Oval95RoseGoldSinglePolished from "../assets/images/oval-9.5-rose-gold-single-polished.jpg";
import Oval10RoseGoldSinglePolished from "../assets/images/oval-10-rose-gold-single-polished.jpg";

// Oval White Gold Single Polished
import Oval2WhiteGoldSinglePolished from "../assets/images/oval-2-white-gold-single-polished.jpg";
import Oval25WhiteGoldSinglePolished from "../assets/images/oval-2.5-white-gold-single-polished.jpg";
import Oval3WhiteGoldSinglePolished from "../assets/images/oval-3-white-gold-single-polished.jpg";
import Oval35WhiteGoldSinglePolished from "../assets/images/oval-3.5-white-gold-single-polished.jpg";
import Oval4WhiteGoldSinglePolished from "../assets/images/oval-4-white-gold-single-polished.jpg";
import Oval45WhiteGoldSinglePolished from "../assets/images/oval-4.5-white-gold-single-polished.jpg";
import Oval5WhiteGoldSinglePolished from "../assets/images/oval-5-white-gold-single-polished.jpg";
import Oval55WhiteGoldSinglePolished from "../assets/images/oval-5.5-white-gold-single-polished.jpg";
import Oval6WhiteGoldSinglePolished from "../assets/images/oval-6-white-gold-single-polished.jpg";
import Oval65WhiteGoldSinglePolished from "../assets/images/oval-6.5-white-gold-single-polished.jpg";
import Oval7WhiteGoldSinglePolished from "../assets/images/oval-7-white-gold-single-polished.jpg";
import Oval75WhiteGoldSinglePolished from "../assets/images/oval-7.5-white-gold-single-polished.jpg";
import Oval8WhiteGoldSinglePolished from "../assets/images/oval-8-white-gold-single-polished.jpg";
import Oval85WhiteGoldSinglePolished from "../assets/images/oval-8.5-white-gold-single-polished.jpg";
import Oval9WhiteGoldSinglePolished from "../assets/images/oval-9-white-gold-single-polished.jpg";
import Oval95WhiteGoldSinglePolished from "../assets/images/oval-9.5-white-gold-single-polished.jpg";
import Oval10WhiteGoldSinglePolished from "../assets/images/oval-10-white-gold-single-polished.jpg";

// Elipse Yellow Gold Single Polished
import Elipse2YellowGoldSinglePolished from "../assets/images/elipse-2-yellow-gold-single-polished.jpg";
import Elipse25YellowGoldSinglePolished from "../assets/images/elipse-2.5-yellow-gold-single-polished.jpg";
import Elipse3YellowGoldSinglePolished from "../assets/images/elipse-3-yellow-gold-single-polished.jpg";
import Elipse35YellowGoldSinglePolished from "../assets/images/elipse-3.5-yellow-gold-single-polished.jpg";
import Elipse4YellowGoldSinglePolished from "../assets/images/elipse-4-yellow-gold-single-polished.jpg";
import Elipse45YellowGoldSinglePolished from "../assets/images/elipse-4.5-yellow-gold-single-polished.jpg";
import Elipse5YellowGoldSinglePolished from "../assets/images/elipse-5-yellow-gold-single-polished.jpg";
import Elipse55YellowGoldSinglePolished from "../assets/images/elipse-5.5-yellow-gold-single-polished.jpg";
import Elipse6YellowGoldSinglePolished from "../assets/images/elipse-6-yellow-gold-single-polished.jpg";
import Elipse65YellowGoldSinglePolished from "../assets/images/elipse-6.5-yellow-gold-single-polished.jpg";
import Elipse7YellowGoldSinglePolished from "../assets/images/elipse-7-yellow-gold-single-polished.jpg";
import Elipse75YellowGoldSinglePolished from "../assets/images/elipse-7.5-yellow-gold-single-polished.jpg";
import Elipse8YellowGoldSinglePolished from "../assets/images/elipse-8-yellow-gold-single-polished.jpg";
import Elipse85YellowGoldSinglePolished from "../assets/images/elipse-8.5-yellow-gold-single-polished.jpg";
import Elipse9YellowGoldSinglePolished from "../assets/images/elipse-9-yellow-gold-single-polished.jpg";
import Elipse95YellowGoldSinglePolished from "../assets/images/elipse-9.5-yellow-gold-single-polished.jpg";
import Elipse10YellowGoldSinglePolished from "../assets/images/elipse-10-yellow-gold-single-polished.jpg";

// Elipse Rose Gold Single Polished
import Elipse2RoseGoldSinglePolished from "../assets/images/elipse-2-rose-gold-single-polished.jpg";
import Elipse25RoseGoldSinglePolished from "../assets/images/elipse-2.5-rose-gold-single-polished.jpg";
import Elipse3RoseGoldSinglePolished from "../assets/images/elipse-3-rose-gold-single-polished.jpg";
import Elipse35RoseGoldSinglePolished from "../assets/images/elipse-3.5-rose-gold-single-polished.jpg";
import Elipse4RoseGoldSinglePolished from "../assets/images/elipse-4-rose-gold-single-polished.jpg";
import Elipse45RoseGoldSinglePolished from "../assets/images/elipse-4.5-rose-gold-single-polished.jpg";
import Elipse5RoseGoldSinglePolished from "../assets/images/elipse-5-rose-gold-single-polished.jpg";
import Elipse55RoseGoldSinglePolished from "../assets/images/elipse-5.5-rose-gold-single-polished.jpg";
import Elipse6RoseGoldSinglePolished from "../assets/images/elipse-6-rose-gold-single-polished.jpg";
import Elipse65RoseGoldSinglePolished from "../assets/images/elipse-6.5-rose-gold-single-polished.jpg";
import Elipse7RoseGoldSinglePolished from "../assets/images/elipse-7-rose-gold-single-polished.jpg";
import Elipse75RoseGoldSinglePolished from "../assets/images/elipse-7.5-rose-gold-single-polished.jpg";
import Elipse8RoseGoldSinglePolished from "../assets/images/elipse-8-rose-gold-single-polished.jpg";
import Elipse85RoseGoldSinglePolished from "../assets/images/elipse-8.5-rose-gold-single-polished.jpg";
import Elipse9RoseGoldSinglePolished from "../assets/images/elipse-9-rose-gold-single-polished.jpg";
import Elipse95RoseGoldSinglePolished from "../assets/images/elipse-9.5-rose-gold-single-polished.jpg";
import Elipse10RoseGoldSinglePolished from "../assets/images/elipse-10-rose-gold-single-polished.jpg";

// Elipse White Gold Single Polished
import Elipse2WhiteGoldSinglePolished from "../assets/images/elipse-2-white-gold-single-polished.jpg";
import Elipse25WhiteGoldSinglePolished from "../assets/images/elipse-2.5-white-gold-single-polished.jpg";
import Elipse3WhiteGoldSinglePolished from "../assets/images/elipse-3-white-gold-single-polished.jpg";
import Elipse35WhiteGoldSinglePolished from "../assets/images/elipse-3.5-white-gold-single-polished.jpg";
import Elipse4WhiteGoldSinglePolished from "../assets/images/elipse-4-white-gold-single-polished.jpg";
import Elipse45WhiteGoldSinglePolished from "../assets/images/elipse-4.5-white-gold-single-polished.jpg";
import Elipse5WhiteGoldSinglePolished from "../assets/images/elipse-5-white-gold-single-polished.jpg";
import Elipse55WhiteGoldSinglePolished from "../assets/images/elipse-5.5-white-gold-single-polished.jpg";
import Elipse6WhiteGoldSinglePolished from "../assets/images/elipse-6-white-gold-single-polished.jpg";
import Elipse65WhiteGoldSinglePolished from "../assets/images/elipse-6.5-white-gold-single-polished.jpg";
import Elipse7WhiteGoldSinglePolished from "../assets/images/elipse-7-white-gold-single-polished.jpg";
import Elipse75WhiteGoldSinglePolished from "../assets/images/elipse-7.5-white-gold-single-polished.jpg";
import Elipse8WhiteGoldSinglePolished from "../assets/images/elipse-8-white-gold-single-polished.jpg";
import Elipse85WhiteGoldSinglePolished from "../assets/images/elipse-8.5-white-gold-single-polished.jpg";
import Elipse9WhiteGoldSinglePolished from "../assets/images/elipse-9-white-gold-single-polished.jpg";
import Elipse95WhiteGoldSinglePolished from "../assets/images/elipse-9.5-white-gold-single-polished.jpg";
import Elipse10WhiteGoldSinglePolished from "../assets/images/elipse-10-white-gold-single-polished.jpg";

// Parabel Yellow Gold Single Polished
import Parabel2YellowGoldSinglePolished from "../assets/images/parabel-2-yellow-gold-single-polished.jpg";
import Parabel25YellowGoldSinglePolished from "../assets/images/parabel-2.5-yellow-gold-single-polished.jpg";
import Parabel3YellowGoldSinglePolished from "../assets/images/parabel-3-yellow-gold-single-polished.jpg";
import Parabel35YellowGoldSinglePolished from "../assets/images/parabel-3.5-yellow-gold-single-polished.jpg";
import Parabel4YellowGoldSinglePolished from "../assets/images/parabel-4-yellow-gold-single-polished.jpg";
import Parabel45YellowGoldSinglePolished from "../assets/images/parabel-4.5-yellow-gold-single-polished.jpg";
import Parabel5YellowGoldSinglePolished from "../assets/images/parabel-5-yellow-gold-single-polished.jpg";
import Parabel55YellowGoldSinglePolished from "../assets/images/parabel-5.5-yellow-gold-single-polished.jpg";
import Parabel6YellowGoldSinglePolished from "../assets/images/parabel-6-yellow-gold-single-polished.jpg";
import Parabel65YellowGoldSinglePolished from "../assets/images/parabel-6.5-yellow-gold-single-polished.jpg";
import Parabel7YellowGoldSinglePolished from "../assets/images/parabel-7-yellow-gold-single-polished.jpg";
import Parabel75YellowGoldSinglePolished from "../assets/images/parabel-7.5-yellow-gold-single-polished.jpg";
import Parabel8YellowGoldSinglePolished from "../assets/images/parabel-8-yellow-gold-single-polished.jpg";
import Parabel85YellowGoldSinglePolished from "../assets/images/parabel-8.5-yellow-gold-single-polished.jpg";
import Parabel9YellowGoldSinglePolished from "../assets/images/parabel-9-yellow-gold-single-polished.jpg";
import Parabel95YellowGoldSinglePolished from "../assets/images/parabel-9.5-yellow-gold-single-polished.jpg";
import Parabel10YellowGoldSinglePolished from "../assets/images/parabel-10-yellow-gold-single-polished.jpg";

// Parabel Rose Gold Single Polished
import Parabel2RoseGoldSinglePolished from "../assets/images/parabel-2-rose-gold-single-polished.jpg";
import Parabel25RoseGoldSinglePolished from "../assets/images/parabel-2.5-rose-gold-single-polished.jpg";
import Parabel3RoseGoldSinglePolished from "../assets/images/parabel-3-rose-gold-single-polished.jpg";
import Parabel35RoseGoldSinglePolished from "../assets/images/parabel-3.5-rose-gold-single-polished.jpg";
import Parabel4RoseGoldSinglePolished from "../assets/images/parabel-4-rose-gold-single-polished.jpg";
import Parabel45RoseGoldSinglePolished from "../assets/images/parabel-4.5-rose-gold-single-polished.jpg";
import Parabel5RoseGoldSinglePolished from "../assets/images/parabel-5-rose-gold-single-polished.jpg";
import Parabel55RoseGoldSinglePolished from "../assets/images/parabel-5.5-rose-gold-single-polished.jpg";
import Parabel6RoseGoldSinglePolished from "../assets/images/parabel-6-rose-gold-single-polished.jpg";
import Parabel65RoseGoldSinglePolished from "../assets/images/parabel-6.5-rose-gold-single-polished.jpg";
import Parabel7RoseGoldSinglePolished from "../assets/images/parabel-7-rose-gold-single-polished.jpg";
import Parabel75RoseGoldSinglePolished from "../assets/images/parabel-7.5-rose-gold-single-polished.jpg";
import Parabel8RoseGoldSinglePolished from "../assets/images/parabel-8-rose-gold-single-polished.jpg";
import Parabel85RoseGoldSinglePolished from "../assets/images/parabel-8.5-rose-gold-single-polished.jpg";
import Parabel9RoseGoldSinglePolished from "../assets/images/parabel-9-rose-gold-single-polished.jpg";
import Parabel95RoseGoldSinglePolished from "../assets/images/parabel-9.5-rose-gold-single-polished.jpg";
import Parabel10RoseGoldSinglePolished from "../assets/images/parabel-10-rose-gold-single-polished.jpg";

// Parabel White Gold Single Polished
import Parabel2WhiteGoldSinglePolished from "../assets/images/parabel-2-white-gold-single-polished.jpg";
import Parabel25WhiteGoldSinglePolished from "../assets/images/parabel-2.5-white-gold-single-polished.jpg";
import Parabel3WhiteGoldSinglePolished from "../assets/images/parabel-3-white-gold-single-polished.jpg";
import Parabel35WhiteGoldSinglePolished from "../assets/images/parabel-3.5-white-gold-single-polished.jpg";
import Parabel4WhiteGoldSinglePolished from "../assets/images/parabel-4-white-gold-single-polished.jpg";
import Parabel45WhiteGoldSinglePolished from "../assets/images/parabel-4.5-white-gold-single-polished.jpg";
import Parabel5WhiteGoldSinglePolished from "../assets/images/parabel-5-white-gold-single-polished.jpg";
import Parabel55WhiteGoldSinglePolished from "../assets/images/parabel-5.5-white-gold-single-polished.jpg";
import Parabel6WhiteGoldSinglePolished from "../assets/images/parabel-6-white-gold-single-polished.jpg";
import Parabel65WhiteGoldSinglePolished from "../assets/images/parabel-6.5-white-gold-single-polished.jpg";
import Parabel7WhiteGoldSinglePolished from "../assets/images/parabel-7-white-gold-single-polished.jpg";
import Parabel75WhiteGoldSinglePolished from "../assets/images/parabel-7.5-white-gold-single-polished.jpg";
import Parabel8WhiteGoldSinglePolished from "../assets/images/parabel-8-white-gold-single-polished.jpg";
import Parabel85WhiteGoldSinglePolished from "../assets/images/parabel-8.5-white-gold-single-polished.jpg";
import Parabel9WhiteGoldSinglePolished from "../assets/images/parabel-9-white-gold-single-polished.jpg";
import Parabel95WhiteGoldSinglePolished from "../assets/images/parabel-9.5-white-gold-single-polished.jpg";
import Parabel10WhiteGoldSinglePolished from "../assets/images/parabel-10-white-gold-single-polished.jpg";

// Sidecut Yellow Gold Single Polished
import Sidecut2YellowGoldSinglePolished from "../assets/images/sidecut-2-yellow-gold-single-polished.jpg";
import Sidecut25YellowGoldSinglePolished from "../assets/images/sidecut-2.5-yellow-gold-single-polished.jpg";
import Sidecut3YellowGoldSinglePolished from "../assets/images/sidecut-3-yellow-gold-single-polished.jpg";
import Sidecut35YellowGoldSinglePolished from "../assets/images/sidecut-3.5-yellow-gold-single-polished.jpg";
import Sidecut4YellowGoldSinglePolished from "../assets/images/sidecut-4-yellow-gold-single-polished.jpg";
import Sidecut45YellowGoldSinglePolished from "../assets/images/sidecut-4.5-yellow-gold-single-polished.jpg";
import Sidecut5YellowGoldSinglePolished from "../assets/images/sidecut-5-yellow-gold-single-polished.jpg";
import Sidecut55YellowGoldSinglePolished from "../assets/images/sidecut-5.5-yellow-gold-single-polished.jpg";
import Sidecut6YellowGoldSinglePolished from "../assets/images/sidecut-6-yellow-gold-single-polished.jpg";
import Sidecut65YellowGoldSinglePolished from "../assets/images/sidecut-6.5-yellow-gold-single-polished.jpg";
import Sidecut7YellowGoldSinglePolished from "../assets/images/sidecut-7-yellow-gold-single-polished.jpg";
import Sidecut75YellowGoldSinglePolished from "../assets/images/sidecut-7.5-yellow-gold-single-polished.jpg";
import Sidecut8YellowGoldSinglePolished from "../assets/images/sidecut-8-yellow-gold-single-polished.jpg";
import Sidecut85YellowGoldSinglePolished from "../assets/images/sidecut-8.5-yellow-gold-single-polished.jpg";
import Sidecut9YellowGoldSinglePolished from "../assets/images/sidecut-9-yellow-gold-single-polished.jpg";
import Sidecut95YellowGoldSinglePolished from "../assets/images/sidecut-9.5-yellow-gold-single-polished.jpg";
import Sidecut10YellowGoldSinglePolished from "../assets/images/sidecut-10-yellow-gold-single-polished.jpg";

// Sidecut Rose Gold Single Polished
import Sidecut2RoseGoldSinglePolished from "../assets/images/sidecut-2-rose-gold-single-polished.jpg";
import Sidecut25RoseGoldSinglePolished from "../assets/images/sidecut-2.5-rose-gold-single-polished.jpg";
import Sidecut3RoseGoldSinglePolished from "../assets/images/sidecut-3-rose-gold-single-polished.jpg";
import Sidecut35RoseGoldSinglePolished from "../assets/images/sidecut-3.5-rose-gold-single-polished.jpg";
import Sidecut4RoseGoldSinglePolished from "../assets/images/sidecut-4-rose-gold-single-polished.jpg";
import Sidecut45RoseGoldSinglePolished from "../assets/images/sidecut-4.5-rose-gold-single-polished.jpg";
import Sidecut5RoseGoldSinglePolished from "../assets/images/sidecut-5-rose-gold-single-polished.jpg";
import Sidecut55RoseGoldSinglePolished from "../assets/images/sidecut-5.5-rose-gold-single-polished.jpg";
import Sidecut6RoseGoldSinglePolished from "../assets/images/sidecut-6-rose-gold-single-polished.jpg";
import Sidecut65RoseGoldSinglePolished from "../assets/images/sidecut-6.5-rose-gold-single-polished.jpg";
import Sidecut7RoseGoldSinglePolished from "../assets/images/sidecut-7-rose-gold-single-polished.jpg";
import Sidecut75RoseGoldSinglePolished from "../assets/images/sidecut-7.5-rose-gold-single-polished.jpg";
import Sidecut8RoseGoldSinglePolished from "../assets/images/sidecut-8-rose-gold-single-polished.jpg";
import Sidecut85RoseGoldSinglePolished from "../assets/images/sidecut-8.5-rose-gold-single-polished.jpg";
import Sidecut9RoseGoldSinglePolished from "../assets/images/sidecut-9-rose-gold-single-polished.jpg";
import Sidecut95RoseGoldSinglePolished from "../assets/images/sidecut-9.5-rose-gold-single-polished.jpg";
import Sidecut10RoseGoldSinglePolished from "../assets/images/sidecut-10-rose-gold-single-polished.jpg";

// Sidecut White Gold Single Polished
import Sidecut2WhiteGoldSinglePolished from "../assets/images/sidecut-2-white-gold-single-polished.jpg";
import Sidecut25WhiteGoldSinglePolished from "../assets/images/sidecut-2.5-white-gold-single-polished.jpg";
import Sidecut3WhiteGoldSinglePolished from "../assets/images/sidecut-3-white-gold-single-polished.jpg";
import Sidecut35WhiteGoldSinglePolished from "../assets/images/sidecut-3.5-white-gold-single-polished.jpg";
import Sidecut4WhiteGoldSinglePolished from "../assets/images/sidecut-4-white-gold-single-polished.jpg";
import Sidecut45WhiteGoldSinglePolished from "../assets/images/sidecut-4.5-white-gold-single-polished.jpg";
import Sidecut5WhiteGoldSinglePolished from "../assets/images/sidecut-5-white-gold-single-polished.jpg";
import Sidecut55WhiteGoldSinglePolished from "../assets/images/sidecut-5.5-white-gold-single-polished.jpg";
import Sidecut6WhiteGoldSinglePolished from "../assets/images/sidecut-6-white-gold-single-polished.jpg";
import Sidecut65WhiteGoldSinglePolished from "../assets/images/sidecut-6.5-white-gold-single-polished.jpg";
import Sidecut7WhiteGoldSinglePolished from "../assets/images/sidecut-7-white-gold-single-polished.jpg";
import Sidecut75WhiteGoldSinglePolished from "../assets/images/sidecut-7.5-white-gold-single-polished.jpg";
import Sidecut8WhiteGoldSinglePolished from "../assets/images/sidecut-8-white-gold-single-polished.jpg";
import Sidecut85WhiteGoldSinglePolished from "../assets/images/sidecut-8.5-white-gold-single-polished.jpg";
import Sidecut9WhiteGoldSinglePolished from "../assets/images/sidecut-9-white-gold-single-polished.jpg";
import Sidecut95WhiteGoldSinglePolished from "../assets/images/sidecut-9.5-white-gold-single-polished.jpg";
import Sidecut10WhiteGoldSinglePolished from "../assets/images/sidecut-10-white-gold-single-polished.jpg";

// Planar Yellow Gold Single Polished
import Planar2YellowGoldSinglePolished from "../assets/images/planar-2-yellow-gold-single-polished.jpg";
import Planar25YellowGoldSinglePolished from "../assets/images/planar-2.5-yellow-gold-single-polished.jpg";
import Planar3YellowGoldSinglePolished from "../assets/images/planar-3-yellow-gold-single-polished.jpg";
import Planar35YellowGoldSinglePolished from "../assets/images/planar-3.5-yellow-gold-single-polished.jpg";
import Planar4YellowGoldSinglePolished from "../assets/images/planar-4-yellow-gold-single-polished.jpg";
import Planar45YellowGoldSinglePolished from "../assets/images/planar-4.5-yellow-gold-single-polished.jpg";
import Planar5YellowGoldSinglePolished from "../assets/images/planar-5-yellow-gold-single-polished.jpg";
import Planar55YellowGoldSinglePolished from "../assets/images/planar-5.5-yellow-gold-single-polished.jpg";
import Planar6YellowGoldSinglePolished from "../assets/images/planar-6-yellow-gold-single-polished.jpg";
import Planar65YellowGoldSinglePolished from "../assets/images/planar-6.5-yellow-gold-single-polished.jpg";
import Planar7YellowGoldSinglePolished from "../assets/images/planar-7-yellow-gold-single-polished.jpg";
import Planar75YellowGoldSinglePolished from "../assets/images/planar-7.5-yellow-gold-single-polished.jpg";
import Planar8YellowGoldSinglePolished from "../assets/images/planar-8-yellow-gold-single-polished.jpg";
import Planar85YellowGoldSinglePolished from "../assets/images/planar-8.5-yellow-gold-single-polished.jpg";
import Planar9YellowGoldSinglePolished from "../assets/images/planar-9-yellow-gold-single-polished.jpg";
import Planar95YellowGoldSinglePolished from "../assets/images/planar-9.5-yellow-gold-single-polished.jpg";
import Planar10YellowGoldSinglePolished from "../assets/images/planar-10-yellow-gold-single-polished.jpg";

// Planar Rose Gold Single Polished
import Planar2RoseGoldSinglePolished from "../assets/images/planar-2-rose-gold-single-polished.jpg";
import Planar25RoseGoldSinglePolished from "../assets/images/planar-2.5-rose-gold-single-polished.jpg";
import Planar3RoseGoldSinglePolished from "../assets/images/planar-3-rose-gold-single-polished.jpg";
import Planar35RoseGoldSinglePolished from "../assets/images/planar-3.5-rose-gold-single-polished.jpg";
import Planar4RoseGoldSinglePolished from "../assets/images/planar-4-rose-gold-single-polished.jpg";
import Planar45RoseGoldSinglePolished from "../assets/images/planar-4.5-rose-gold-single-polished.jpg";
import Planar5RoseGoldSinglePolished from "../assets/images/planar-5-rose-gold-single-polished.jpg";
import Planar55RoseGoldSinglePolished from "../assets/images/planar-5.5-rose-gold-single-polished.jpg";
import Planar6RoseGoldSinglePolished from "../assets/images/planar-6-rose-gold-single-polished.jpg";
import Planar65RoseGoldSinglePolished from "../assets/images/planar-6.5-rose-gold-single-polished.jpg";
import Planar7RoseGoldSinglePolished from "../assets/images/planar-7-rose-gold-single-polished.jpg";
import Planar75RoseGoldSinglePolished from "../assets/images/planar-7.5-rose-gold-single-polished.jpg";
import Planar8RoseGoldSinglePolished from "../assets/images/planar-8-rose-gold-single-polished.jpg";
import Planar85RoseGoldSinglePolished from "../assets/images/planar-8.5-rose-gold-single-polished.jpg";
import Planar9RoseGoldSinglePolished from "../assets/images/planar-9-rose-gold-single-polished.jpg";
import Planar95RoseGoldSinglePolished from "../assets/images/planar-9.5-rose-gold-single-polished.jpg";
import Planar10RoseGoldSinglePolished from "../assets/images/planar-10-rose-gold-single-polished.jpg";

// Planar White Gold Single Polished
import Planar2WhiteGoldSinglePolished from "../assets/images/planar-2-white-gold-single-polished.jpg";
import Planar25WhiteGoldSinglePolished from "../assets/images/planar-2.5-white-gold-single-polished.jpg";
import Planar3WhiteGoldSinglePolished from "../assets/images/planar-3-white-gold-single-polished.jpg";
import Planar35WhiteGoldSinglePolished from "../assets/images/planar-3.5-white-gold-single-polished.jpg";
import Planar4WhiteGoldSinglePolished from "../assets/images/planar-4-white-gold-single-polished.jpg";
import Planar45WhiteGoldSinglePolished from "../assets/images/planar-4.5-white-gold-single-polished.jpg";
import Planar5WhiteGoldSinglePolished from "../assets/images/planar-5-white-gold-single-polished.jpg";
import Planar55WhiteGoldSinglePolished from "../assets/images/planar-5.5-white-gold-single-polished.jpg";
import Planar6WhiteGoldSinglePolished from "../assets/images/planar-6-white-gold-single-polished.jpg";
import Planar65WhiteGoldSinglePolished from "../assets/images/planar-6.5-white-gold-single-polished.jpg";
import Planar7WhiteGoldSinglePolished from "../assets/images/planar-7-white-gold-single-polished.jpg";
import Planar75WhiteGoldSinglePolished from "../assets/images/planar-7.5-white-gold-single-polished.jpg";
import Planar8WhiteGoldSinglePolished from "../assets/images/planar-8-white-gold-single-polished.jpg";
import Planar85WhiteGoldSinglePolished from "../assets/images/planar-8.5-white-gold-single-polished.jpg";
import Planar9WhiteGoldSinglePolished from "../assets/images/planar-9-white-gold-single-polished.jpg";
import Planar95WhiteGoldSinglePolished from "../assets/images/planar-9.5-white-gold-single-polished.jpg";
import Planar10WhiteGoldSinglePolished from "../assets/images/planar-10-white-gold-single-polished.jpg";

// Forma Yellow Gold Single Polished
import Forma2YellowGoldSinglePolished from "../assets/images/forma-2-yellow-gold-single-polished.jpg";
import Forma25YellowGoldSinglePolished from "../assets/images/forma-2.5-yellow-gold-single-polished.jpg";
import Forma3YellowGoldSinglePolished from "../assets/images/forma-3-yellow-gold-single-polished.jpg";
import Forma35YellowGoldSinglePolished from "../assets/images/forma-3.5-yellow-gold-single-polished.jpg";
import Forma4YellowGoldSinglePolished from "../assets/images/forma-4-yellow-gold-single-polished.jpg";
import Forma45YellowGoldSinglePolished from "../assets/images/forma-4.5-yellow-gold-single-polished.jpg";
import Forma5YellowGoldSinglePolished from "../assets/images/forma-5-yellow-gold-single-polished.jpg";
import Forma55YellowGoldSinglePolished from "../assets/images/forma-5.5-yellow-gold-single-polished.jpg";
import Forma6YellowGoldSinglePolished from "../assets/images/forma-6-yellow-gold-single-polished.jpg";
import Forma65YellowGoldSinglePolished from "../assets/images/forma-6.5-yellow-gold-single-polished.jpg";
import Forma7YellowGoldSinglePolished from "../assets/images/forma-7-yellow-gold-single-polished.jpg";
import Forma75YellowGoldSinglePolished from "../assets/images/forma-7.5-yellow-gold-single-polished.jpg";
import Forma8YellowGoldSinglePolished from "../assets/images/forma-8-yellow-gold-single-polished.jpg";
import Forma85YellowGoldSinglePolished from "../assets/images/forma-8.5-yellow-gold-single-polished.jpg";
import Forma9YellowGoldSinglePolished from "../assets/images/forma-9-yellow-gold-single-polished.jpg";
import Forma95YellowGoldSinglePolished from "../assets/images/forma-9.5-yellow-gold-single-polished.jpg";
import Forma10YellowGoldSinglePolished from "../assets/images/forma-10-yellow-gold-single-polished.jpg";

// Forma Rose Gold Single Polished
import Forma2RoseGoldSinglePolished from "../assets/images/forma-2-rose-gold-single-polished.jpg";
import Forma25RoseGoldSinglePolished from "../assets/images/forma-2.5-rose-gold-single-polished.jpg";
import Forma3RoseGoldSinglePolished from "../assets/images/forma-3-rose-gold-single-polished.jpg";
import Forma35RoseGoldSinglePolished from "../assets/images/forma-3.5-rose-gold-single-polished.jpg";
import Forma4RoseGoldSinglePolished from "../assets/images/forma-4-rose-gold-single-polished.jpg";
import Forma45RoseGoldSinglePolished from "../assets/images/forma-4.5-rose-gold-single-polished.jpg";
import Forma5RoseGoldSinglePolished from "../assets/images/forma-5-rose-gold-single-polished.jpg";
import Forma55RoseGoldSinglePolished from "../assets/images/forma-5.5-rose-gold-single-polished.jpg";
import Forma6RoseGoldSinglePolished from "../assets/images/forma-6-rose-gold-single-polished.jpg";
import Forma65RoseGoldSinglePolished from "../assets/images/forma-6.5-rose-gold-single-polished.jpg";
import Forma7RoseGoldSinglePolished from "../assets/images/forma-7-rose-gold-single-polished.jpg";
import Forma75RoseGoldSinglePolished from "../assets/images/forma-7.5-rose-gold-single-polished.jpg";
import Forma8RoseGoldSinglePolished from "../assets/images/forma-8-rose-gold-single-polished.jpg";
import Forma85RoseGoldSinglePolished from "../assets/images/forma-8.5-rose-gold-single-polished.jpg";
import Forma9RoseGoldSinglePolished from "../assets/images/forma-9-rose-gold-single-polished.jpg";
import Forma95RoseGoldSinglePolished from "../assets/images/forma-9.5-rose-gold-single-polished.jpg";
import Forma10RoseGoldSinglePolished from "../assets/images/forma-10-rose-gold-single-polished.jpg";

// Forma White Gold Single Polished
import Forma2WhiteGoldSinglePolished from "../assets/images/forma-2-white-gold-single-polished.jpg";
import Forma25WhiteGoldSinglePolished from "../assets/images/forma-2.5-white-gold-single-polished.jpg";
import Forma3WhiteGoldSinglePolished from "../assets/images/forma-3-white-gold-single-polished.jpg";
import Forma35WhiteGoldSinglePolished from "../assets/images/forma-3.5-white-gold-single-polished.jpg";
import Forma4WhiteGoldSinglePolished from "../assets/images/forma-4-white-gold-single-polished.jpg";
import Forma45WhiteGoldSinglePolished from "../assets/images/forma-4.5-white-gold-single-polished.jpg";
import Forma5WhiteGoldSinglePolished from "../assets/images/forma-5-white-gold-single-polished.jpg";
import Forma55WhiteGoldSinglePolished from "../assets/images/forma-5.5-white-gold-single-polished.jpg";
import Forma6WhiteGoldSinglePolished from "../assets/images/forma-6-white-gold-single-polished.jpg";
import Forma65WhiteGoldSinglePolished from "../assets/images/forma-6.5-white-gold-single-polished.jpg";
import Forma7WhiteGoldSinglePolished from "../assets/images/forma-7-white-gold-single-polished.jpg";
import Forma75WhiteGoldSinglePolished from "../assets/images/forma-7.5-white-gold-single-polished.jpg";
import Forma8WhiteGoldSinglePolished from "../assets/images/forma-8-white-gold-single-polished.jpg";
import Forma85WhiteGoldSinglePolished from "../assets/images/forma-8.5-white-gold-single-polished.jpg";
import Forma9WhiteGoldSinglePolished from "../assets/images/forma-9-white-gold-single-polished.jpg";
import Forma95WhiteGoldSinglePolished from "../assets/images/forma-9.5-white-gold-single-polished.jpg";
import Forma10WhiteGoldSinglePolished from "../assets/images/forma-10-white-gold-single-polished.jpg";

import SingleColored from "../assets/images/single-colored.jpg";
import BiColored1 from "../assets/images/bi-colored-1.jpg";
import BiColored2 from "../assets/images/bi-colored-2.jpg";
import BiColored3 from "../assets/images/bi-colored-3.jpg";
import BiColored4 from "../assets/images/bi-colored-4.jpg";
import TriColored1 from "../assets/images/tri-colored-1.jpg";
import TriColored2 from "../assets/images/tri-colored-2.jpg";
import TriColored3 from "../assets/images/tri-colored-3.jpg";
import TriColored4 from "../assets/images/tri-colored-4.jpg";
import TriColored5 from "../assets/images/tri-colored-5.jpg";
import TriColored6 from "../assets/images/tri-colored-6.jpg";
import TriColored7 from "../assets/images/tri-colored-7.jpg";
import TriColored8 from "../assets/images/tri-colored-8.jpg";
import AlocationModal from "./modals/AlocationModal";

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

const IMAGES = {
  "oval2yellow-gold": (
    <img src={Oval2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval2.5yellow-gold": (
    <img src={Oval25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval3yellow-gold": (
    <img src={Oval3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval3.5yellow-gold": (
    <img src={Oval35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval4yellow-gold": (
    <img src={Oval4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval4.5yellow-gold": (
    <img src={Oval45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval5yellow-gold": (
    <img src={Oval5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval5.5yellow-gold": (
    <img src={Oval55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval6yellow-gold": (
    <img src={Oval6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval6.5yellow-gold": (
    <img src={Oval65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval7yellow-gold": (
    <img src={Oval7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval7.5yellow-gold": (
    <img src={Oval75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval8yellow-gold": (
    <img src={Oval8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval8.5yellow-gold": (
    <img src={Oval85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval9yellow-gold": (
    <img src={Oval9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval9.5yellow-gold": (
    <img src={Oval95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval10yellow-gold": (
    <img src={Oval10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "oval2rose-gold": <img src={Oval2RoseGoldSinglePolished} alt="RingPair" />,
  "oval2.5rose-gold": <img src={Oval25RoseGoldSinglePolished} alt="RingPair" />,
  "oval3rose-gold": <img src={Oval3RoseGoldSinglePolished} alt="RingPair" />,
  "oval3.5rose-gold": <img src={Oval35RoseGoldSinglePolished} alt="RingPair" />,
  "oval4rose-gold": <img src={Oval4RoseGoldSinglePolished} alt="RingPair" />,
  "oval4.5rose-gold": <img src={Oval45RoseGoldSinglePolished} alt="RingPair" />,
  "oval5rose-gold": <img src={Oval5RoseGoldSinglePolished} alt="RingPair" />,
  "oval5.5rose-gold": <img src={Oval55RoseGoldSinglePolished} alt="RingPair" />,
  "oval6rose-gold": <img src={Oval6RoseGoldSinglePolished} alt="RingPair" />,
  "oval6.5rose-gold": <img src={Oval65RoseGoldSinglePolished} alt="RingPair" />,
  "oval7rose-gold": <img src={Oval7RoseGoldSinglePolished} alt="RingPair" />,
  "oval7.5rose-gold": <img src={Oval75RoseGoldSinglePolished} alt="RingPair" />,
  "oval8rose-gold": <img src={Oval8RoseGoldSinglePolished} alt="RingPair" />,
  "oval8.5rose-gold": <img src={Oval85RoseGoldSinglePolished} alt="RingPair" />,
  "oval9rose-gold": <img src={Oval9RoseGoldSinglePolished} alt="RingPair" />,
  "oval9.5rose-gold": <img src={Oval95RoseGoldSinglePolished} alt="RingPair" />,
  "oval10rose-gold": <img src={Oval10RoseGoldSinglePolished} alt="RingPair" />,
  "oval2white-gold": <img src={Oval2WhiteGoldSinglePolished} alt="RingPair" />,
  "oval2.5white-gold": (
    <img src={Oval25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval3white-gold": <img src={Oval3WhiteGoldSinglePolished} alt="RingPair" />,
  "oval3.5white-gold": (
    <img src={Oval35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval4white-gold": <img src={Oval4WhiteGoldSinglePolished} alt="RingPair" />,
  "oval4.5white-gold": (
    <img src={Oval45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval5white-gold": <img src={Oval5WhiteGoldSinglePolished} alt="RingPair" />,
  "oval5.5white-gold": (
    <img src={Oval55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval6white-gold": <img src={Oval6WhiteGoldSinglePolished} alt="RingPair" />,
  "oval6.5white-gold": (
    <img src={Oval65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval7white-gold": <img src={Oval7WhiteGoldSinglePolished} alt="RingPair" />,
  "oval7.5white-gold": (
    <img src={Oval75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval8white-gold": <img src={Oval8WhiteGoldSinglePolished} alt="RingPair" />,
  "oval8.5white-gold": (
    <img src={Oval85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval9white-gold": <img src={Oval9WhiteGoldSinglePolished} alt="RingPair" />,
  "oval9.5white-gold": (
    <img src={Oval95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "oval10white-gold": (
    <img src={Oval10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2yellow-gold": (
    <img src={Elipse2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5yellow-gold": (
    <img src={Elipse25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3yellow-gold": (
    <img src={Elipse3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5yellow-gold": (
    <img src={Elipse35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4yellow-gold": (
    <img src={Elipse4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5yellow-gold": (
    <img src={Elipse45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5yellow-gold": (
    <img src={Elipse5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5yellow-gold": (
    <img src={Elipse55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6yellow-gold": (
    <img src={Elipse6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5yellow-gold": (
    <img src={Elipse65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7yellow-gold": (
    <img src={Elipse7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5yellow-gold": (
    <img src={Elipse75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8yellow-gold": (
    <img src={Elipse8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5yellow-gold": (
    <img src={Elipse85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9yellow-gold": (
    <img src={Elipse9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5yellow-gold": (
    <img src={Elipse95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10yellow-gold": (
    <img src={Elipse10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2rose-gold": (
    <img src={Elipse2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5rose-gold": (
    <img src={Elipse25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3rose-gold": (
    <img src={Elipse3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5rose-gold": (
    <img src={Elipse35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4rose-gold": (
    <img src={Elipse4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5rose-gold": (
    <img src={Elipse45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5rose-gold": (
    <img src={Elipse5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5rose-gold": (
    <img src={Elipse55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6rose-gold": (
    <img src={Elipse6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5rose-gold": (
    <img src={Elipse65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7rose-gold": (
    <img src={Elipse7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5rose-gold": (
    <img src={Elipse75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8rose-gold": (
    <img src={Elipse8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5rose-gold": (
    <img src={Elipse85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9rose-gold": (
    <img src={Elipse9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5rose-gold": (
    <img src={Elipse95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10rose-gold": (
    <img src={Elipse10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2white-gold": (
    <img src={Elipse2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse2.5white-gold": (
    <img src={Elipse25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3white-gold": (
    <img src={Elipse3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse3.5white-gold": (
    <img src={Elipse35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4white-gold": (
    <img src={Elipse4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse4.5white-gold": (
    <img src={Elipse45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5white-gold": (
    <img src={Elipse5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse5.5white-gold": (
    <img src={Elipse55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6white-gold": (
    <img src={Elipse6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse6.5white-gold": (
    <img src={Elipse65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7white-gold": (
    <img src={Elipse7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse7.5white-gold": (
    <img src={Elipse75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8white-gold": (
    <img src={Elipse8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse8.5white-gold": (
    <img src={Elipse85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9white-gold": (
    <img src={Elipse9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse9.5white-gold": (
    <img src={Elipse95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "elipse10white-gold": (
    <img src={Elipse10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2yellow-gold": (
    <img src={Parabel2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5yellow-gold": (
    <img src={Parabel25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3yellow-gold": (
    <img src={Parabel3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5yellow-gold": (
    <img src={Parabel35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4yellow-gold": (
    <img src={Parabel4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5yellow-gold": (
    <img src={Parabel45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5yellow-gold": (
    <img src={Parabel5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5yellow-gold": (
    <img src={Parabel55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6yellow-gold": (
    <img src={Parabel6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5yellow-gold": (
    <img src={Parabel65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7yellow-gold": (
    <img src={Parabel7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5yellow-gold": (
    <img src={Parabel75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8yellow-gold": (
    <img src={Parabel8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5yellow-gold": (
    <img src={Parabel85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9yellow-gold": (
    <img src={Parabel9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5yellow-gold": (
    <img src={Parabel95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10yellow-gold": (
    <img src={Parabel10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2rose-gold": (
    <img src={Parabel2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5rose-gold": (
    <img src={Parabel25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3rose-gold": (
    <img src={Parabel3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5rose-gold": (
    <img src={Parabel35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4rose-gold": (
    <img src={Parabel4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5rose-gold": (
    <img src={Parabel45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5rose-gold": (
    <img src={Parabel5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5rose-gold": (
    <img src={Parabel55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6rose-gold": (
    <img src={Parabel6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5rose-gold": (
    <img src={Parabel65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7rose-gold": (
    <img src={Parabel7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5rose-gold": (
    <img src={Parabel75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8rose-gold": (
    <img src={Parabel8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5rose-gold": (
    <img src={Parabel85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9rose-gold": (
    <img src={Parabel9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5rose-gold": (
    <img src={Parabel95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10rose-gold": (
    <img src={Parabel10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2white-gold": (
    <img src={Parabel2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel2.5white-gold": (
    <img src={Parabel25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3white-gold": (
    <img src={Parabel3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel3.5white-gold": (
    <img src={Parabel35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4white-gold": (
    <img src={Parabel4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel4.5white-gold": (
    <img src={Parabel45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5white-gold": (
    <img src={Parabel5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel5.5white-gold": (
    <img src={Parabel55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6white-gold": (
    <img src={Parabel6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel6.5white-gold": (
    <img src={Parabel65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7white-gold": (
    <img src={Parabel7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel7.5white-gold": (
    <img src={Parabel75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8white-gold": (
    <img src={Parabel8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel8.5white-gold": (
    <img src={Parabel85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9white-gold": (
    <img src={Parabel9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel9.5white-gold": (
    <img src={Parabel95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "parabel10white-gold": (
    <img src={Parabel10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2yellow-gold": (
    <img src={Sidecut2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5yellow-gold": (
    <img src={Sidecut25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3yellow-gold": (
    <img src={Sidecut3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5yellow-gold": (
    <img src={Sidecut35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4yellow-gold": (
    <img src={Sidecut4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5yellow-gold": (
    <img src={Sidecut45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5yellow-gold": (
    <img src={Sidecut5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5yellow-gold": (
    <img src={Sidecut55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6yellow-gold": (
    <img src={Sidecut6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5yellow-gold": (
    <img src={Sidecut65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7yellow-gold": (
    <img src={Sidecut7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5yellow-gold": (
    <img src={Sidecut75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8yellow-gold": (
    <img src={Sidecut8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5yellow-gold": (
    <img src={Sidecut85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9yellow-gold": (
    <img src={Sidecut9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5yellow-gold": (
    <img src={Sidecut95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10yellow-gold": (
    <img src={Sidecut10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2rose-gold": (
    <img src={Sidecut2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5rose-gold": (
    <img src={Sidecut25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3rose-gold": (
    <img src={Sidecut3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5rose-gold": (
    <img src={Sidecut35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4rose-gold": (
    <img src={Sidecut4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5rose-gold": (
    <img src={Sidecut45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5rose-gold": (
    <img src={Sidecut5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5rose-gold": (
    <img src={Sidecut55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6rose-gold": (
    <img src={Sidecut6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5rose-gold": (
    <img src={Sidecut65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7rose-gold": (
    <img src={Sidecut7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5rose-gold": (
    <img src={Sidecut75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8rose-gold": (
    <img src={Sidecut8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5rose-gold": (
    <img src={Sidecut85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9rose-gold": (
    <img src={Sidecut9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5rose-gold": (
    <img src={Sidecut95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10rose-gold": (
    <img src={Sidecut10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2white-gold": (
    <img src={Sidecut2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut2.5white-gold": (
    <img src={Sidecut25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3white-gold": (
    <img src={Sidecut3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut3.5white-gold": (
    <img src={Sidecut35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4white-gold": (
    <img src={Sidecut4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut4.5white-gold": (
    <img src={Sidecut45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5white-gold": (
    <img src={Sidecut5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut5.5white-gold": (
    <img src={Sidecut55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6white-gold": (
    <img src={Sidecut6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut6.5white-gold": (
    <img src={Sidecut65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7white-gold": (
    <img src={Sidecut7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut7.5white-gold": (
    <img src={Sidecut75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8white-gold": (
    <img src={Sidecut8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut8.5white-gold": (
    <img src={Sidecut85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9white-gold": (
    <img src={Sidecut9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut9.5white-gold": (
    <img src={Sidecut95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "sidecut10white-gold": (
    <img src={Sidecut10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar2yellow-gold": (
    <img src={Planar2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5yellow-gold": (
    <img src={Planar25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar3yellow-gold": (
    <img src={Planar3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5yellow-gold": (
    <img src={Planar35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar4yellow-gold": (
    <img src={Planar4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5yellow-gold": (
    <img src={Planar45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar5yellow-gold": (
    <img src={Planar5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5yellow-gold": (
    <img src={Planar55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar6yellow-gold": (
    <img src={Planar6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5yellow-gold": (
    <img src={Planar65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar7yellow-gold": (
    <img src={Planar7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5yellow-gold": (
    <img src={Planar75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar8yellow-gold": (
    <img src={Planar8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5yellow-gold": (
    <img src={Planar85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar9yellow-gold": (
    <img src={Planar9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5yellow-gold": (
    <img src={Planar95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar10yellow-gold": (
    <img src={Planar10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "planar2rose-gold": (
    <img src={Planar2RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5rose-gold": (
    <img src={Planar25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar3rose-gold": (
    <img src={Planar3RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5rose-gold": (
    <img src={Planar35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar4rose-gold": (
    <img src={Planar4RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5rose-gold": (
    <img src={Planar45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar5rose-gold": (
    <img src={Planar5RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5rose-gold": (
    <img src={Planar55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar6rose-gold": (
    <img src={Planar6RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5rose-gold": (
    <img src={Planar65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar7rose-gold": (
    <img src={Planar7RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5rose-gold": (
    <img src={Planar75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar8rose-gold": (
    <img src={Planar8RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5rose-gold": (
    <img src={Planar85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar9rose-gold": (
    <img src={Planar9RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5rose-gold": (
    <img src={Planar95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar10rose-gold": (
    <img src={Planar10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "planar2white-gold": (
    <img src={Planar2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar2.5white-gold": (
    <img src={Planar25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar3white-gold": (
    <img src={Planar3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar3.5white-gold": (
    <img src={Planar35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar4white-gold": (
    <img src={Planar4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar4.5white-gold": (
    <img src={Planar45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar5white-gold": (
    <img src={Planar5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar5.5white-gold": (
    <img src={Planar55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar6white-gold": (
    <img src={Planar6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar6.5white-gold": (
    <img src={Planar65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar7white-gold": (
    <img src={Planar7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar7.5white-gold": (
    <img src={Planar75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar8white-gold": (
    <img src={Planar8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar8.5white-gold": (
    <img src={Planar85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar9white-gold": (
    <img src={Planar9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar9.5white-gold": (
    <img src={Planar95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "planar10white-gold": (
    <img src={Planar10WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma2yellow-gold": (
    <img src={Forma2YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma2.5yellow-gold": (
    <img src={Forma25YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma3yellow-gold": (
    <img src={Forma3YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma3.5yellow-gold": (
    <img src={Forma35YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma4yellow-gold": (
    <img src={Forma4YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma4.5yellow-gold": (
    <img src={Forma45YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma5yellow-gold": (
    <img src={Forma5YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma5.5yellow-gold": (
    <img src={Forma55YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma6yellow-gold": (
    <img src={Forma6YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma6.5yellow-gold": (
    <img src={Forma65YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma7yellow-gold": (
    <img src={Forma7YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma7.5yellow-gold": (
    <img src={Forma75YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma8yellow-gold": (
    <img src={Forma8YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma8.5yellow-gold": (
    <img src={Forma85YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma9yellow-gold": (
    <img src={Forma9YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma9.5yellow-gold": (
    <img src={Forma95YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma10yellow-gold": (
    <img src={Forma10YellowGoldSinglePolished} alt="RingPair" />
  ),
  "forma2rose-gold": <img src={Forma2RoseGoldSinglePolished} alt="RingPair" />,
  "forma2.5rose-gold": (
    <img src={Forma25RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma3rose-gold": <img src={Forma3RoseGoldSinglePolished} alt="RingPair" />,
  "forma3.5rose-gold": (
    <img src={Forma35RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma4rose-gold": <img src={Forma4RoseGoldSinglePolished} alt="RingPair" />,
  "forma4.5rose-gold": (
    <img src={Forma45RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma5rose-gold": <img src={Forma5RoseGoldSinglePolished} alt="RingPair" />,
  "forma5.5rose-gold": (
    <img src={Forma55RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma6rose-gold": <img src={Forma6RoseGoldSinglePolished} alt="RingPair" />,
  "forma6.5rose-gold": (
    <img src={Forma65RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma7rose-gold": <img src={Forma7RoseGoldSinglePolished} alt="RingPair" />,
  "forma7.5rose-gold": (
    <img src={Forma75RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma8rose-gold": <img src={Forma8RoseGoldSinglePolished} alt="RingPair" />,
  "forma8.5rose-gold": (
    <img src={Forma85RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma9rose-gold": <img src={Forma9RoseGoldSinglePolished} alt="RingPair" />,
  "forma9.5rose-gold": (
    <img src={Forma95RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma10rose-gold": (
    <img src={Forma10RoseGoldSinglePolished} alt="RingPair" />
  ),
  "forma2white-gold": (
    <img src={Forma2WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma2.5white-gold": (
    <img src={Forma25WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma3white-gold": (
    <img src={Forma3WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma3.5white-gold": (
    <img src={Forma35WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma4white-gold": (
    <img src={Forma4WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma4.5white-gold": (
    <img src={Forma45WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma5white-gold": (
    <img src={Forma5WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma5.5white-gold": (
    <img src={Forma55WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma6white-gold": (
    <img src={Forma6WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma6.5white-gold": (
    <img src={Forma65WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma7white-gold": (
    <img src={Forma7WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma7.5white-gold": (
    <img src={Forma75WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma8white-gold": (
    <img src={Forma8WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma8.5white-gold": (
    <img src={Forma85WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma9white-gold": (
    <img src={Forma9WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma9.5white-gold": (
    <img src={Forma95WhiteGoldSinglePolished} alt="RingPair" />
  ),
  "forma10white-gold": (
    <img src={Forma10WhiteGoldSinglePolished} alt="RingPair" />
  ),
};

class RingPair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "oval",
      color: "white-gold",
      measure: 4,
      size: 45,
      surface: "polished",
      seam: "seamless",
      alocationModal: false,
      alocation: "single",
    };
  }
  render() {
    return (
      <div className="ring-pair-container">
        {
          IMAGES[
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
            style={{ marginTop: 40 }}
          >
            <span className="ring-profile-select-span">Boja prstena:</span>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div
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
              ></div>
            </div>
          </div>
          <div
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
                  ? SingleColored
                  : this.state.alocation === "bi-1"
                  ? BiColored1
                  : this.state.alocation === "bi-2"
                  ? BiColored2
                  : this.state.alocation === "bi-3"
                  ? BiColored3
                  : this.state.alocation === "bi-4"
                  ? BiColored4
                  : this.state.alocation === "tri-1"
                  ? TriColored1
                  : this.state.alocation === "tri-2"
                  ? TriColored2
                  : this.state.alocation === "tri-3"
                  ? TriColored3
                  : this.state.alocation === "tri-4"
                  ? TriColored4
                  : this.state.alocation === "tri-5"
                  ? TriColored5
                  : this.state.alocation === "tri-6"
                  ? TriColored6
                  : this.state.alocation === "tri-7"
                  ? TriColored7
                  : this.state.alocation === "tri-8"
                  ? TriColored8
                  : SingleColored
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
