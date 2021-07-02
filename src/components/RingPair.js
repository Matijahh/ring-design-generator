import React, { Component } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// Oval Yellow Gold
import Oval2YellowGold from "../assets/images/oval-2-yellow-gold-single-polished.jpg";
import Oval25YellowGold from "../assets/images/oval-2.5-yellow-gold-single-polished.jpg";
import Oval3YellowGold from "../assets/images/oval-3-yellow-gold-single-polished.jpg";
import Oval35YellowGold from "../assets/images/oval-3.5-yellow-gold-single-polished.jpg";
import Oval4YellowGold from "../assets/images/oval-4-yellow-gold-single-polished.jpg";
import Oval45YellowGold from "../assets/images/oval-4.5-yellow-gold-single-polished.jpg";
import Oval5YellowGold from "../assets/images/oval-5-yellow-gold-single-polished.jpg";
import Oval55YellowGold from "../assets/images/oval-5.5-yellow-gold-single-polished.jpg";
import Oval6YellowGold from "../assets/images/oval-6-yellow-gold-single-polished.jpg";
import Oval65YellowGold from "../assets/images/oval-6.5-yellow-gold-single-polished.jpg";
import Oval7YellowGold from "../assets/images/oval-7-yellow-gold-single-polished.jpg";
import Oval75YellowGold from "../assets/images/oval-7.5-yellow-gold-single-polished.jpg";
import Oval8YellowGold from "../assets/images/oval-8-yellow-gold-single-polished.jpg";
import Oval85YellowGold from "../assets/images/oval-8.5-yellow-gold-single-polished.jpg";
import Oval9YellowGold from "../assets/images/oval-9-yellow-gold-single-polished.jpg";
import Oval95YellowGold from "../assets/images/oval-9.5-yellow-gold-single-polished.jpg";
import Oval10YellowGold from "../assets/images/oval-10-yellow-gold-single-polished.jpg";

// Oval Rose Gold
import Oval2RoseGold from "../assets/images/oval-2-rose-gold-single-polished.jpg";
import Oval25RoseGold from "../assets/images/oval-2.5-rose-gold-single-polished.jpg";
import Oval3RoseGold from "../assets/images/oval-3-rose-gold-single-polished.jpg";
import Oval35RoseGold from "../assets/images/oval-3.5-rose-gold-single-polished.jpg";
import Oval4RoseGold from "../assets/images/oval-4-rose-gold-single-polished.jpg";
import Oval45RoseGold from "../assets/images/oval-4.5-rose-gold-single-polished.jpg";
import Oval5RoseGold from "../assets/images/oval-5-rose-gold-single-polished.jpg";
import Oval55RoseGold from "../assets/images/oval-5.5-rose-gold-single-polished.jpg";
import Oval6RoseGold from "../assets/images/oval-6-rose-gold-single-polished.jpg";
import Oval65RoseGold from "../assets/images/oval-6.5-rose-gold-single-polished.jpg";
import Oval7RoseGold from "../assets/images/oval-7-rose-gold-single-polished.jpg";
import Oval75RoseGold from "../assets/images/oval-7.5-rose-gold-single-polished.jpg";
import Oval8RoseGold from "../assets/images/oval-8-rose-gold-single-polished.jpg";
import Oval85RoseGold from "../assets/images/oval-8.5-rose-gold-single-polished.jpg";
import Oval9RoseGold from "../assets/images/oval-9-rose-gold-single-polished.jpg";
import Oval95RoseGold from "../assets/images/oval-9.5-rose-gold-single-polished.jpg";
import Oval10RoseGold from "../assets/images/oval-10-rose-gold-single-polished.jpg";

// Oval White Gold
import Oval2WhiteGold from "../assets/images/oval-2-white-gold-single-polished.jpg";
import Oval25WhiteGold from "../assets/images/oval-2.5-white-gold-single-polished.jpg";
import Oval3WhiteGold from "../assets/images/oval-3-white-gold-single-polished.jpg";
import Oval35WhiteGold from "../assets/images/oval-3.5-white-gold-single-polished.jpg";
import Oval4WhiteGold from "../assets/images/oval-4-white-gold-single-polished.jpg";
import Oval45WhiteGold from "../assets/images/oval-4.5-white-gold-single-polished.jpg";
import Oval5WhiteGold from "../assets/images/oval-5-white-gold-single-polished.jpg";
import Oval55WhiteGold from "../assets/images/oval-5.5-white-gold-single-polished.jpg";
import Oval6WhiteGold from "../assets/images/oval-6-white-gold-single-polished.jpg";
import Oval65WhiteGold from "../assets/images/oval-6.5-white-gold-single-polished.jpg";
import Oval7WhiteGold from "../assets/images/oval-7-white-gold-single-polished.jpg";
import Oval75WhiteGold from "../assets/images/oval-7.5-white-gold-single-polished.jpg";
import Oval8WhiteGold from "../assets/images/oval-8-white-gold-single-polished.jpg";
import Oval85WhiteGold from "../assets/images/oval-8.5-white-gold-single-polished.jpg";
import Oval9WhiteGold from "../assets/images/oval-9-white-gold-single-polished.jpg";
import Oval95WhiteGold from "../assets/images/oval-9.5-white-gold-single-polished.jpg";
import Oval10WhiteGold from "../assets/images/oval-10-white-gold-single-polished.jpg";

// Elipse Yellow Gold
import Elipse2YellowGold from "../assets/images/elipse-2-yellow-gold-single-polished.jpg";
import Elipse25YellowGold from "../assets/images/elipse-2.5-yellow-gold-single-polished.jpg";
import Elipse3YellowGold from "../assets/images/elipse-3-yellow-gold-single-polished.jpg";
import Elipse35YellowGold from "../assets/images/elipse-3.5-yellow-gold-single-polished.jpg";
import Elipse4YellowGold from "../assets/images/elipse-4-yellow-gold-single-polished.jpg";
import Elipse45YellowGold from "../assets/images/elipse-4.5-yellow-gold-single-polished.jpg";
import Elipse5YellowGold from "../assets/images/elipse-5-yellow-gold-single-polished.jpg";
import Elipse55YellowGold from "../assets/images/elipse-5.5-yellow-gold-single-polished.jpg";
import Elipse6YellowGold from "../assets/images/elipse-6-yellow-gold-single-polished.jpg";
import Elipse65YellowGold from "../assets/images/elipse-6.5-yellow-gold-single-polished.jpg";
import Elipse7YellowGold from "../assets/images/elipse-7-yellow-gold-single-polished.jpg";
import Elipse75YellowGold from "../assets/images/elipse-7.5-yellow-gold-single-polished.jpg";
import Elipse8YellowGold from "../assets/images/elipse-8-yellow-gold-single-polished.jpg";
import Elipse85YellowGold from "../assets/images/elipse-8.5-yellow-gold-single-polished.jpg";
import Elipse9YellowGold from "../assets/images/elipse-9-yellow-gold-single-polished.jpg";
import Elipse95YellowGold from "../assets/images/elipse-9.5-yellow-gold-single-polished.jpg";
import Elipse10YellowGold from "../assets/images/elipse-10-yellow-gold-single-polished.jpg";

// Elipse Rose Gold
import Elipse2RoseGold from "../assets/images/elipse-2-rose-gold-single-polished.jpg";
import Elipse25RoseGold from "../assets/images/elipse-2.5-rose-gold-single-polished.jpg";
import Elipse3RoseGold from "../assets/images/elipse-3-rose-gold-single-polished.jpg";
import Elipse35RoseGold from "../assets/images/elipse-3.5-rose-gold-single-polished.jpg";
import Elipse4RoseGold from "../assets/images/elipse-4-rose-gold-single-polished.jpg";
import Elipse45RoseGold from "../assets/images/elipse-4.5-rose-gold-single-polished.jpg";
import Elipse5RoseGold from "../assets/images/elipse-5-rose-gold-single-polished.jpg";
import Elipse55RoseGold from "../assets/images/elipse-5.5-rose-gold-single-polished.jpg";
import Elipse6RoseGold from "../assets/images/elipse-6-rose-gold-single-polished.jpg";
import Elipse65RoseGold from "../assets/images/elipse-6.5-rose-gold-single-polished.jpg";
import Elipse7RoseGold from "../assets/images/elipse-7-rose-gold-single-polished.jpg";
import Elipse75RoseGold from "../assets/images/elipse-7.5-rose-gold-single-polished.jpg";
import Elipse8RoseGold from "../assets/images/elipse-8-rose-gold-single-polished.jpg";
import Elipse85RoseGold from "../assets/images/elipse-8.5-rose-gold-single-polished.jpg";
import Elipse9RoseGold from "../assets/images/elipse-9-rose-gold-single-polished.jpg";
import Elipse95RoseGold from "../assets/images/elipse-9.5-rose-gold-single-polished.jpg";
import Elipse10RoseGold from "../assets/images/elipse-10-rose-gold-single-polished.jpg";

// Elipse White Gold
import Elipse2WhiteGold from "../assets/images/elipse-2-white-gold-single-polished.jpg";
import Elipse25WhiteGold from "../assets/images/elipse-2.5-white-gold-single-polished.jpg";
import Elipse3WhiteGold from "../assets/images/elipse-3-white-gold-single-polished.jpg";
import Elipse35WhiteGold from "../assets/images/elipse-3.5-white-gold-single-polished.jpg";
import Elipse4WhiteGold from "../assets/images/elipse-4-white-gold-single-polished.jpg";
import Elipse45WhiteGold from "../assets/images/elipse-4.5-white-gold-single-polished.jpg";
import Elipse5WhiteGold from "../assets/images/elipse-5-white-gold-single-polished.jpg";
import Elipse55WhiteGold from "../assets/images/elipse-5.5-white-gold-single-polished.jpg";
import Elipse6WhiteGold from "../assets/images/elipse-6-white-gold-single-polished.jpg";
import Elipse65WhiteGold from "../assets/images/elipse-6.5-white-gold-single-polished.jpg";
import Elipse7WhiteGold from "../assets/images/elipse-7-white-gold-single-polished.jpg";
import Elipse75WhiteGold from "../assets/images/elipse-7.5-white-gold-single-polished.jpg";
import Elipse8WhiteGold from "../assets/images/elipse-8-white-gold-single-polished.jpg";
import Elipse85WhiteGold from "../assets/images/elipse-8.5-white-gold-single-polished.jpg";
import Elipse9WhiteGold from "../assets/images/elipse-9-white-gold-single-polished.jpg";
import Elipse95WhiteGold from "../assets/images/elipse-9.5-white-gold-single-polished.jpg";
import Elipse10WhiteGold from "../assets/images/elipse-10-white-gold-single-polished.jpg";

// Parabel Yellow Gold
import Parabel2YellowGold from "../assets/images/parabel-2-yellow-gold-single-polished.jpg";
import Parabel25YellowGold from "../assets/images/parabel-2.5-yellow-gold-single-polished.jpg";
import Parabel3YellowGold from "../assets/images/parabel-3-yellow-gold-single-polished.jpg";
import Parabel35YellowGold from "../assets/images/parabel-3.5-yellow-gold-single-polished.jpg";
import Parabel4YellowGold from "../assets/images/parabel-4-yellow-gold-single-polished.jpg";
import Parabel45YellowGold from "../assets/images/parabel-4.5-yellow-gold-single-polished.jpg";
import Parabel5YellowGold from "../assets/images/parabel-5-yellow-gold-single-polished.jpg";
import Parabel55YellowGold from "../assets/images/parabel-5.5-yellow-gold-single-polished.jpg";
import Parabel6YellowGold from "../assets/images/parabel-6-yellow-gold-single-polished.jpg";
import Parabel65YellowGold from "../assets/images/parabel-6.5-yellow-gold-single-polished.jpg";
import Parabel7YellowGold from "../assets/images/parabel-7-yellow-gold-single-polished.jpg";
import Parabel75YellowGold from "../assets/images/parabel-7.5-yellow-gold-single-polished.jpg";
import Parabel8YellowGold from "../assets/images/parabel-8-yellow-gold-single-polished.jpg";
import Parabel85YellowGold from "../assets/images/parabel-8.5-yellow-gold-single-polished.jpg";
import Parabel9YellowGold from "../assets/images/parabel-9-yellow-gold-single-polished.jpg";
import Parabel95YellowGold from "../assets/images/parabel-9.5-yellow-gold-single-polished.jpg";
import Parabel10YellowGold from "../assets/images/parabel-10-yellow-gold-single-polished.jpg";

// Parabel Rose Gold
import Parabel2RoseGold from "../assets/images/parabel-2-rose-gold-single-polished.jpg";
import Parabel25RoseGold from "../assets/images/parabel-2.5-rose-gold-single-polished.jpg";
import Parabel3RoseGold from "../assets/images/parabel-3-rose-gold-single-polished.jpg";
import Parabel35RoseGold from "../assets/images/parabel-3.5-rose-gold-single-polished.jpg";
import Parabel4RoseGold from "../assets/images/parabel-4-rose-gold-single-polished.jpg";
import Parabel45RoseGold from "../assets/images/parabel-4.5-rose-gold-single-polished.jpg";
import Parabel5RoseGold from "../assets/images/parabel-5-rose-gold-single-polished.jpg";
import Parabel55RoseGold from "../assets/images/parabel-5.5-rose-gold-single-polished.jpg";
import Parabel6RoseGold from "../assets/images/parabel-6-rose-gold-single-polished.jpg";
import Parabel65RoseGold from "../assets/images/parabel-6.5-rose-gold-single-polished.jpg";
import Parabel7RoseGold from "../assets/images/parabel-7-rose-gold-single-polished.jpg";
import Parabel75RoseGold from "../assets/images/parabel-7.5-rose-gold-single-polished.jpg";
import Parabel8RoseGold from "../assets/images/parabel-8-rose-gold-single-polished.jpg";
import Parabel85RoseGold from "../assets/images/parabel-8.5-rose-gold-single-polished.jpg";
import Parabel9RoseGold from "../assets/images/parabel-9-rose-gold-single-polished.jpg";
import Parabel95RoseGold from "../assets/images/parabel-9.5-rose-gold-single-polished.jpg";
import Parabel10RoseGold from "../assets/images/parabel-10-rose-gold-single-polished.jpg";

// Parabel White Gold
import Parabel2WhiteGold from "../assets/images/parabel-2-white-gold-single-polished.jpg";
import Parabel25WhiteGold from "../assets/images/parabel-2.5-white-gold-single-polished.jpg";
import Parabel3WhiteGold from "../assets/images/parabel-3-white-gold-single-polished.jpg";
import Parabel35WhiteGold from "../assets/images/parabel-3.5-white-gold-single-polished.jpg";
import Parabel4WhiteGold from "../assets/images/parabel-4-white-gold-single-polished.jpg";
import Parabel45WhiteGold from "../assets/images/parabel-4.5-white-gold-single-polished.jpg";
import Parabel5WhiteGold from "../assets/images/parabel-5-white-gold-single-polished.jpg";
import Parabel55WhiteGold from "../assets/images/parabel-5.5-white-gold-single-polished.jpg";
import Parabel6WhiteGold from "../assets/images/parabel-6-white-gold-single-polished.jpg";
import Parabel65WhiteGold from "../assets/images/parabel-6.5-white-gold-single-polished.jpg";
import Parabel7WhiteGold from "../assets/images/parabel-7-white-gold-single-polished.jpg";
import Parabel75WhiteGold from "../assets/images/parabel-7.5-white-gold-single-polished.jpg";
import Parabel8WhiteGold from "../assets/images/parabel-8-white-gold-single-polished.jpg";
import Parabel85WhiteGold from "../assets/images/parabel-8.5-white-gold-single-polished.jpg";
import Parabel9WhiteGold from "../assets/images/parabel-9-white-gold-single-polished.jpg";
import Parabel95WhiteGold from "../assets/images/parabel-9.5-white-gold-single-polished.jpg";
import Parabel10WhiteGold from "../assets/images/parabel-10-white-gold-single-polished.jpg";

// Sidecut Yellow Gold
import Sidecut2YellowGold from "../assets/images/sidecut-2-yellow-gold-single-polished.jpg";
import Sidecut25YellowGold from "../assets/images/sidecut-2.5-yellow-gold-single-polished.jpg";
import Sidecut3YellowGold from "../assets/images/sidecut-3-yellow-gold-single-polished.jpg";
import Sidecut35YellowGold from "../assets/images/sidecut-3.5-yellow-gold-single-polished.jpg";
import Sidecut4YellowGold from "../assets/images/sidecut-4-yellow-gold-single-polished.jpg";
import Sidecut45YellowGold from "../assets/images/sidecut-4.5-yellow-gold-single-polished.jpg";
import Sidecut5YellowGold from "../assets/images/sidecut-5-yellow-gold-single-polished.jpg";
import Sidecut55YellowGold from "../assets/images/sidecut-5.5-yellow-gold-single-polished.jpg";
import Sidecut6YellowGold from "../assets/images/sidecut-6-yellow-gold-single-polished.jpg";
import Sidecut65YellowGold from "../assets/images/sidecut-6.5-yellow-gold-single-polished.jpg";
import Sidecut7YellowGold from "../assets/images/sidecut-7-yellow-gold-single-polished.jpg";
import Sidecut75YellowGold from "../assets/images/sidecut-7.5-yellow-gold-single-polished.jpg";
import Sidecut8YellowGold from "../assets/images/sidecut-8-yellow-gold-single-polished.jpg";
import Sidecut85YellowGold from "../assets/images/sidecut-8.5-yellow-gold-single-polished.jpg";
import Sidecut9YellowGold from "../assets/images/sidecut-9-yellow-gold-single-polished.jpg";
import Sidecut95YellowGold from "../assets/images/sidecut-9.5-yellow-gold-single-polished.jpg";
import Sidecut10YellowGold from "../assets/images/sidecut-10-yellow-gold-single-polished.jpg";

// Sidecut Rose Gold
import Sidecut2RoseGold from "../assets/images/sidecut-2-rose-gold-single-polished.jpg";
import Sidecut25RoseGold from "../assets/images/sidecut-2.5-rose-gold-single-polished.jpg";
import Sidecut3RoseGold from "../assets/images/sidecut-3-rose-gold-single-polished.jpg";
import Sidecut35RoseGold from "../assets/images/sidecut-3.5-rose-gold-single-polished.jpg";
import Sidecut4RoseGold from "../assets/images/sidecut-4-rose-gold-single-polished.jpg";
import Sidecut45RoseGold from "../assets/images/sidecut-4.5-rose-gold-single-polished.jpg";
import Sidecut5RoseGold from "../assets/images/sidecut-5-rose-gold-single-polished.jpg";
import Sidecut55RoseGold from "../assets/images/sidecut-5.5-rose-gold-single-polished.jpg";
import Sidecut6RoseGold from "../assets/images/sidecut-6-rose-gold-single-polished.jpg";
import Sidecut65RoseGold from "../assets/images/sidecut-6.5-rose-gold-single-polished.jpg";
import Sidecut7RoseGold from "../assets/images/sidecut-7-rose-gold-single-polished.jpg";
import Sidecut75RoseGold from "../assets/images/sidecut-7.5-rose-gold-single-polished.jpg";
import Sidecut8RoseGold from "../assets/images/sidecut-8-rose-gold-single-polished.jpg";
import Sidecut85RoseGold from "../assets/images/sidecut-8.5-rose-gold-single-polished.jpg";
import Sidecut9RoseGold from "../assets/images/sidecut-9-rose-gold-single-polished.jpg";
import Sidecut95RoseGold from "../assets/images/sidecut-9.5-rose-gold-single-polished.jpg";
import Sidecut10RoseGold from "../assets/images/sidecut-10-rose-gold-single-polished.jpg";

// Sidecut White Gold
import Sidecut2WhiteGold from "../assets/images/sidecut-2-white-gold-single-polished.jpg";
import Sidecut25WhiteGold from "../assets/images/sidecut-2.5-white-gold-single-polished.jpg";
import Sidecut3WhiteGold from "../assets/images/sidecut-3-white-gold-single-polished.jpg";
import Sidecut35WhiteGold from "../assets/images/sidecut-3.5-white-gold-single-polished.jpg";
import Sidecut4WhiteGold from "../assets/images/sidecut-4-white-gold-single-polished.jpg";
import Sidecut45WhiteGold from "../assets/images/sidecut-4.5-white-gold-single-polished.jpg";
import Sidecut5WhiteGold from "../assets/images/sidecut-5-white-gold-single-polished.jpg";
import Sidecut55WhiteGold from "../assets/images/sidecut-5.5-white-gold-single-polished.jpg";
import Sidecut6WhiteGold from "../assets/images/sidecut-6-white-gold-single-polished.jpg";
import Sidecut65WhiteGold from "../assets/images/sidecut-6.5-white-gold-single-polished.jpg";
import Sidecut7WhiteGold from "../assets/images/sidecut-7-white-gold-single-polished.jpg";
import Sidecut75WhiteGold from "../assets/images/sidecut-7.5-white-gold-single-polished.jpg";
import Sidecut8WhiteGold from "../assets/images/sidecut-8-white-gold-single-polished.jpg";
import Sidecut85WhiteGold from "../assets/images/sidecut-8.5-white-gold-single-polished.jpg";
import Sidecut9WhiteGold from "../assets/images/sidecut-9-white-gold-single-polished.jpg";
import Sidecut95WhiteGold from "../assets/images/sidecut-9.5-white-gold-single-polished.jpg";
import Sidecut10WhiteGold from "../assets/images/sidecut-10-white-gold-single-polished.jpg";

// Planar Yellow Gold
import Planar2YellowGold from "../assets/images/planar-2-yellow-gold-single-polished.jpg";
import Planar25YellowGold from "../assets/images/planar-2.5-yellow-gold-single-polished.jpg";
import Planar3YellowGold from "../assets/images/planar-3-yellow-gold-single-polished.jpg";
import Planar35YellowGold from "../assets/images/planar-3.5-yellow-gold-single-polished.jpg";
import Planar4YellowGold from "../assets/images/planar-4-yellow-gold-single-polished.jpg";
import Planar45YellowGold from "../assets/images/planar-4.5-yellow-gold-single-polished.jpg";
import Planar5YellowGold from "../assets/images/planar-5-yellow-gold-single-polished.jpg";
import Planar55YellowGold from "../assets/images/planar-5.5-yellow-gold-single-polished.jpg";
import Planar6YellowGold from "../assets/images/planar-6-yellow-gold-single-polished.jpg";
import Planar65YellowGold from "../assets/images/planar-6.5-yellow-gold-single-polished.jpg";
import Planar7YellowGold from "../assets/images/planar-7-yellow-gold-single-polished.jpg";
import Planar75YellowGold from "../assets/images/planar-7.5-yellow-gold-single-polished.jpg";
import Planar8YellowGold from "../assets/images/planar-8-yellow-gold-single-polished.jpg";
import Planar85YellowGold from "../assets/images/planar-8.5-yellow-gold-single-polished.jpg";
import Planar9YellowGold from "../assets/images/planar-9-yellow-gold-single-polished.jpg";
import Planar95YellowGold from "../assets/images/planar-9.5-yellow-gold-single-polished.jpg";
import Planar10YellowGold from "../assets/images/planar-10-yellow-gold-single-polished.jpg";

// Planar Rose Gold
import Planar2RoseGold from "../assets/images/planar-2-rose-gold-single-polished.jpg";
import Planar25RoseGold from "../assets/images/planar-2.5-rose-gold-single-polished.jpg";
import Planar3RoseGold from "../assets/images/planar-3-rose-gold-single-polished.jpg";
import Planar35RoseGold from "../assets/images/planar-3.5-rose-gold-single-polished.jpg";
import Planar4RoseGold from "../assets/images/planar-4-rose-gold-single-polished.jpg";
import Planar45RoseGold from "../assets/images/planar-4.5-rose-gold-single-polished.jpg";
import Planar5RoseGold from "../assets/images/planar-5-rose-gold-single-polished.jpg";
import Planar55RoseGold from "../assets/images/planar-5.5-rose-gold-single-polished.jpg";
import Planar6RoseGold from "../assets/images/planar-6-rose-gold-single-polished.jpg";
import Planar65RoseGold from "../assets/images/planar-6.5-rose-gold-single-polished.jpg";
import Planar7RoseGold from "../assets/images/planar-7-rose-gold-single-polished.jpg";
import Planar75RoseGold from "../assets/images/planar-7.5-rose-gold-single-polished.jpg";
import Planar8RoseGold from "../assets/images/planar-8-rose-gold-single-polished.jpg";
import Planar85RoseGold from "../assets/images/planar-8.5-rose-gold-single-polished.jpg";
import Planar9RoseGold from "../assets/images/planar-9-rose-gold-single-polished.jpg";
import Planar95RoseGold from "../assets/images/planar-9.5-rose-gold-single-polished.jpg";
import Planar10RoseGold from "../assets/images/planar-10-rose-gold-single-polished.jpg";

// Planar White Gold
import Planar2WhiteGold from "../assets/images/planar-2-white-gold-single-polished.jpg";
import Planar25WhiteGold from "../assets/images/planar-2.5-white-gold-single-polished.jpg";
import Planar3WhiteGold from "../assets/images/planar-3-white-gold-single-polished.jpg";
import Planar35WhiteGold from "../assets/images/planar-3.5-white-gold-single-polished.jpg";
import Planar4WhiteGold from "../assets/images/planar-4-white-gold-single-polished.jpg";
import Planar45WhiteGold from "../assets/images/planar-4.5-white-gold-single-polished.jpg";
import Planar5WhiteGold from "../assets/images/planar-5-white-gold-single-polished.jpg";
import Planar55WhiteGold from "../assets/images/planar-5.5-white-gold-single-polished.jpg";
import Planar6WhiteGold from "../assets/images/planar-6-white-gold-single-polished.jpg";
import Planar65WhiteGold from "../assets/images/planar-6.5-white-gold-single-polished.jpg";
import Planar7WhiteGold from "../assets/images/planar-7-white-gold-single-polished.jpg";
import Planar75WhiteGold from "../assets/images/planar-7.5-white-gold-single-polished.jpg";
import Planar8WhiteGold from "../assets/images/planar-8-white-gold-single-polished.jpg";
import Planar85WhiteGold from "../assets/images/planar-8.5-white-gold-single-polished.jpg";
import Planar9WhiteGold from "../assets/images/planar-9-white-gold-single-polished.jpg";
import Planar95WhiteGold from "../assets/images/planar-9.5-white-gold-single-polished.jpg";
import Planar10WhiteGold from "../assets/images/planar-10-white-gold-single-polished.jpg";

// Forma Yellow Gold
import Forma2YellowGold from "../assets/images/forma-2-yellow-gold-single-polished.jpg";
import Forma25YellowGold from "../assets/images/forma-2.5-yellow-gold-single-polished.jpg";
import Forma3YellowGold from "../assets/images/forma-3-yellow-gold-single-polished.jpg";
import Forma35YellowGold from "../assets/images/forma-3.5-yellow-gold-single-polished.jpg";
import Forma4YellowGold from "../assets/images/forma-4-yellow-gold-single-polished.jpg";
import Forma45YellowGold from "../assets/images/forma-4.5-yellow-gold-single-polished.jpg";
import Forma5YellowGold from "../assets/images/forma-5-yellow-gold-single-polished.jpg";
import Forma55YellowGold from "../assets/images/forma-5.5-yellow-gold-single-polished.jpg";
import Forma6YellowGold from "../assets/images/forma-6-yellow-gold-single-polished.jpg";
import Forma65YellowGold from "../assets/images/forma-6.5-yellow-gold-single-polished.jpg";
import Forma7YellowGold from "../assets/images/forma-7-yellow-gold-single-polished.jpg";
import Forma75YellowGold from "../assets/images/forma-7.5-yellow-gold-single-polished.jpg";
import Forma8YellowGold from "../assets/images/forma-8-yellow-gold-single-polished.jpg";
import Forma85YellowGold from "../assets/images/forma-8.5-yellow-gold-single-polished.jpg";
import Forma9YellowGold from "../assets/images/forma-9-yellow-gold-single-polished.jpg";
import Forma95YellowGold from "../assets/images/forma-9.5-yellow-gold-single-polished.jpg";
import Forma10YellowGold from "../assets/images/forma-10-yellow-gold-single-polished.jpg";

// Forma Rose Gold
import Forma2RoseGold from "../assets/images/forma-2-rose-gold-single-polished.jpg";
import Forma25RoseGold from "../assets/images/forma-2.5-rose-gold-single-polished.jpg";
import Forma3RoseGold from "../assets/images/forma-3-rose-gold-single-polished.jpg";
import Forma35RoseGold from "../assets/images/forma-3.5-rose-gold-single-polished.jpg";
import Forma4RoseGold from "../assets/images/forma-4-rose-gold-single-polished.jpg";
import Forma45RoseGold from "../assets/images/forma-4.5-rose-gold-single-polished.jpg";
import Forma5RoseGold from "../assets/images/forma-5-rose-gold-single-polished.jpg";
import Forma55RoseGold from "../assets/images/forma-5.5-rose-gold-single-polished.jpg";
import Forma6RoseGold from "../assets/images/forma-6-rose-gold-single-polished.jpg";
import Forma65RoseGold from "../assets/images/forma-6.5-rose-gold-single-polished.jpg";
import Forma7RoseGold from "../assets/images/forma-7-rose-gold-single-polished.jpg";
import Forma75RoseGold from "../assets/images/forma-7.5-rose-gold-single-polished.jpg";
import Forma8RoseGold from "../assets/images/forma-8-rose-gold-single-polished.jpg";
import Forma85RoseGold from "../assets/images/forma-8.5-rose-gold-single-polished.jpg";
import Forma9RoseGold from "../assets/images/forma-9-rose-gold-single-polished.jpg";
import Forma95RoseGold from "../assets/images/forma-9.5-rose-gold-single-polished.jpg";
import Forma10RoseGold from "../assets/images/forma-10-rose-gold-single-polished.jpg";

// Forma White Gold
import Forma2WhiteGold from "../assets/images/forma-2-white-gold-single-polished.jpg";
import Forma25WhiteGold from "../assets/images/forma-2.5-white-gold-single-polished.jpg";
import Forma3WhiteGold from "../assets/images/forma-3-white-gold-single-polished.jpg";
import Forma35WhiteGold from "../assets/images/forma-3.5-white-gold-single-polished.jpg";
import Forma4WhiteGold from "../assets/images/forma-4-white-gold-single-polished.jpg";
import Forma45WhiteGold from "../assets/images/forma-4.5-white-gold-single-polished.jpg";
import Forma5WhiteGold from "../assets/images/forma-5-white-gold-single-polished.jpg";
import Forma55WhiteGold from "../assets/images/forma-5.5-white-gold-single-polished.jpg";
import Forma6WhiteGold from "../assets/images/forma-6-white-gold-single-polished.jpg";
import Forma65WhiteGold from "../assets/images/forma-6.5-white-gold-single-polished.jpg";
import Forma7WhiteGold from "../assets/images/forma-7-white-gold-single-polished.jpg";
import Forma75WhiteGold from "../assets/images/forma-7.5-white-gold-single-polished.jpg";
import Forma8WhiteGold from "../assets/images/forma-8-white-gold-single-polished.jpg";
import Forma85WhiteGold from "../assets/images/forma-8.5-white-gold-single-polished.jpg";
import Forma9WhiteGold from "../assets/images/forma-9-white-gold-single-polished.jpg";
import Forma95WhiteGold from "../assets/images/forma-9.5-white-gold-single-polished.jpg";
import Forma10WhiteGold from "../assets/images/forma-10-white-gold-single-polished.jpg";

const options = [
  { value: "oval", label: "Ovalni" },
  { value: "elipse", label: "Elipsiodni" },
  { value: "parabel", label: "Parabolni" },
  { value: "sidecut", label: "Isečeno sa strane" },
  { value: "planar", label: "Planarni" },
  { value: "forma", label: "Formalni" },
];

const IMAGES = {
  "oval2yellow-gold": <img src={Oval2YellowGold} alt="RingPair" />,
  "oval2.5yellow-gold": <img src={Oval25YellowGold} alt="RingPair" />,
  "oval3yellow-gold": <img src={Oval3YellowGold} alt="RingPair" />,
  "oval3.5yellow-gold": <img src={Oval35YellowGold} alt="RingPair" />,
  "oval4yellow-gold": <img src={Oval4YellowGold} alt="RingPair" />,
  "oval4.5yellow-gold": <img src={Oval45YellowGold} alt="RingPair" />,
  "oval5yellow-gold": <img src={Oval5YellowGold} alt="RingPair" />,
  "oval5.5yellow-gold": <img src={Oval55YellowGold} alt="RingPair" />,
  "oval6yellow-gold": <img src={Oval6YellowGold} alt="RingPair" />,
  "oval6.5yellow-gold": <img src={Oval65YellowGold} alt="RingPair" />,
  "oval7yellow-gold": <img src={Oval7YellowGold} alt="RingPair" />,
  "oval7.5yellow-gold": <img src={Oval75YellowGold} alt="RingPair" />,
  "oval8yellow-gold": <img src={Oval8YellowGold} alt="RingPair" />,
  "oval8.5yellow-gold": <img src={Oval85YellowGold} alt="RingPair" />,
  "oval9yellow-gold": <img src={Oval9YellowGold} alt="RingPair" />,
  "oval9.5yellow-gold": <img src={Oval95YellowGold} alt="RingPair" />,
  "oval10yellow-gold": <img src={Oval10YellowGold} alt="RingPair" />,
  "oval2rose-gold": <img src={Oval2RoseGold} alt="RingPair" />,
  "oval2.5rose-gold": <img src={Oval25RoseGold} alt="RingPair" />,
  "oval3rose-gold": <img src={Oval3RoseGold} alt="RingPair" />,
  "oval3.5rose-gold": <img src={Oval35RoseGold} alt="RingPair" />,
  "oval4rose-gold": <img src={Oval4RoseGold} alt="RingPair" />,
  "oval4.5rose-gold": <img src={Oval45RoseGold} alt="RingPair" />,
  "oval5rose-gold": <img src={Oval5RoseGold} alt="RingPair" />,
  "oval5.5rose-gold": <img src={Oval55RoseGold} alt="RingPair" />,
  "oval6rose-gold": <img src={Oval6RoseGold} alt="RingPair" />,
  "oval6.5rose-gold": <img src={Oval65RoseGold} alt="RingPair" />,
  "oval7rose-gold": <img src={Oval7RoseGold} alt="RingPair" />,
  "oval7.5rose-gold": <img src={Oval75RoseGold} alt="RingPair" />,
  "oval8rose-gold": <img src={Oval8RoseGold} alt="RingPair" />,
  "oval8.5rose-gold": <img src={Oval85RoseGold} alt="RingPair" />,
  "oval9rose-gold": <img src={Oval9RoseGold} alt="RingPair" />,
  "oval9.5rose-gold": <img src={Oval95RoseGold} alt="RingPair" />,
  "oval10rose-gold": <img src={Oval10RoseGold} alt="RingPair" />,
  "oval2white-gold": <img src={Oval2WhiteGold} alt="RingPair" />,
  "oval2.5white-gold": <img src={Oval25WhiteGold} alt="RingPair" />,
  "oval3white-gold": <img src={Oval3WhiteGold} alt="RingPair" />,
  "oval3.5white-gold": <img src={Oval35WhiteGold} alt="RingPair" />,
  "oval4white-gold": <img src={Oval4WhiteGold} alt="RingPair" />,
  "oval4.5white-gold": <img src={Oval45WhiteGold} alt="RingPair" />,
  "oval5white-gold": <img src={Oval5WhiteGold} alt="RingPair" />,
  "oval5.5white-gold": <img src={Oval55WhiteGold} alt="RingPair" />,
  "oval6white-gold": <img src={Oval6WhiteGold} alt="RingPair" />,
  "oval6.5white-gold": <img src={Oval65WhiteGold} alt="RingPair" />,
  "oval7white-gold": <img src={Oval7WhiteGold} alt="RingPair" />,
  "oval7.5white-gold": <img src={Oval75WhiteGold} alt="RingPair" />,
  "oval8white-gold": <img src={Oval8WhiteGold} alt="RingPair" />,
  "oval8.5white-gold": <img src={Oval85WhiteGold} alt="RingPair" />,
  "oval9white-gold": <img src={Oval9WhiteGold} alt="RingPair" />,
  "oval9.5white-gold": <img src={Oval95WhiteGold} alt="RingPair" />,
  "oval10white-gold": <img src={Oval10WhiteGold} alt="RingPair" />,
  "elipse2yellow-gold": <img src={Elipse2YellowGold} alt="RingPair" />,
  "elipse2.5yellow-gold": <img src={Elipse25YellowGold} alt="RingPair" />,
  "elipse3yellow-gold": <img src={Elipse3YellowGold} alt="RingPair" />,
  "elipse3.5yellow-gold": <img src={Elipse35YellowGold} alt="RingPair" />,
  "elipse4yellow-gold": <img src={Elipse4YellowGold} alt="RingPair" />,
  "elipse4.5yellow-gold": <img src={Elipse45YellowGold} alt="RingPair" />,
  "elipse5yellow-gold": <img src={Elipse5YellowGold} alt="RingPair" />,
  "elipse5.5yellow-gold": <img src={Elipse55YellowGold} alt="RingPair" />,
  "elipse6yellow-gold": <img src={Elipse6YellowGold} alt="RingPair" />,
  "elipse6.5yellow-gold": <img src={Elipse65YellowGold} alt="RingPair" />,
  "elipse7yellow-gold": <img src={Elipse7YellowGold} alt="RingPair" />,
  "elipse7.5yellow-gold": <img src={Elipse75YellowGold} alt="RingPair" />,
  "elipse8yellow-gold": <img src={Elipse8YellowGold} alt="RingPair" />,
  "elipse8.5yellow-gold": <img src={Elipse85YellowGold} alt="RingPair" />,
  "elipse9yellow-gold": <img src={Elipse9YellowGold} alt="RingPair" />,
  "elipse9.5yellow-gold": <img src={Elipse95YellowGold} alt="RingPair" />,
  "elipse10yellow-gold": <img src={Elipse10YellowGold} alt="RingPair" />,
  "elipse2rose-gold": <img src={Elipse2RoseGold} alt="RingPair" />,
  "elipse2.5rose-gold": <img src={Elipse25RoseGold} alt="RingPair" />,
  "elipse3rose-gold": <img src={Elipse3RoseGold} alt="RingPair" />,
  "elipse3.5rose-gold": <img src={Elipse35RoseGold} alt="RingPair" />,
  "elipse4rose-gold": <img src={Elipse4RoseGold} alt="RingPair" />,
  "elipse4.5rose-gold": <img src={Elipse45RoseGold} alt="RingPair" />,
  "elipse5rose-gold": <img src={Elipse5RoseGold} alt="RingPair" />,
  "elipse5.5rose-gold": <img src={Elipse55RoseGold} alt="RingPair" />,
  "elipse6rose-gold": <img src={Elipse6RoseGold} alt="RingPair" />,
  "elipse6.5rose-gold": <img src={Elipse65RoseGold} alt="RingPair" />,
  "elipse7rose-gold": <img src={Elipse7RoseGold} alt="RingPair" />,
  "elipse7.5rose-gold": <img src={Elipse75RoseGold} alt="RingPair" />,
  "elipse8rose-gold": <img src={Elipse8RoseGold} alt="RingPair" />,
  "elipse8.5rose-gold": <img src={Elipse85RoseGold} alt="RingPair" />,
  "elipse9rose-gold": <img src={Elipse9RoseGold} alt="RingPair" />,
  "elipse9.5rose-gold": <img src={Elipse95RoseGold} alt="RingPair" />,
  "elipse10rose-gold": <img src={Elipse10RoseGold} alt="RingPair" />,
  "elipse2white-gold": <img src={Elipse2WhiteGold} alt="RingPair" />,
  "elipse2.5white-gold": <img src={Elipse25WhiteGold} alt="RingPair" />,
  "elipse3white-gold": <img src={Elipse3WhiteGold} alt="RingPair" />,
  "elipse3.5white-gold": <img src={Elipse35WhiteGold} alt="RingPair" />,
  "elipse4white-gold": <img src={Elipse4WhiteGold} alt="RingPair" />,
  "elipse4.5white-gold": <img src={Elipse45WhiteGold} alt="RingPair" />,
  "elipse5white-gold": <img src={Elipse5WhiteGold} alt="RingPair" />,
  "elipse5.5white-gold": <img src={Elipse55WhiteGold} alt="RingPair" />,
  "elipse6white-gold": <img src={Elipse6WhiteGold} alt="RingPair" />,
  "elipse6.5white-gold": <img src={Elipse65WhiteGold} alt="RingPair" />,
  "elipse7white-gold": <img src={Elipse7WhiteGold} alt="RingPair" />,
  "elipse7.5white-gold": <img src={Elipse75WhiteGold} alt="RingPair" />,
  "elipse8white-gold": <img src={Elipse8WhiteGold} alt="RingPair" />,
  "elipse8.5white-gold": <img src={Elipse85WhiteGold} alt="RingPair" />,
  "elipse9white-gold": <img src={Elipse9WhiteGold} alt="RingPair" />,
  "elipse9.5white-gold": <img src={Elipse95WhiteGold} alt="RingPair" />,
  "elipse10white-gold": <img src={Elipse10WhiteGold} alt="RingPair" />,
  "parabel2yellow-gold": <img src={Parabel2YellowGold} alt="RingPair" />,
  "parabel2.5yellow-gold": <img src={Parabel25YellowGold} alt="RingPair" />,
  "parabel3yellow-gold": <img src={Parabel3YellowGold} alt="RingPair" />,
  "parabel3.5yellow-gold": <img src={Parabel35YellowGold} alt="RingPair" />,
  "parabel4yellow-gold": <img src={Parabel4YellowGold} alt="RingPair" />,
  "parabel4.5yellow-gold": <img src={Parabel45YellowGold} alt="RingPair" />,
  "parabel5yellow-gold": <img src={Parabel5YellowGold} alt="RingPair" />,
  "parabel5.5yellow-gold": <img src={Parabel55YellowGold} alt="RingPair" />,
  "parabel6yellow-gold": <img src={Parabel6YellowGold} alt="RingPair" />,
  "parabel6.5yellow-gold": <img src={Parabel65YellowGold} alt="RingPair" />,
  "parabel7yellow-gold": <img src={Parabel7YellowGold} alt="RingPair" />,
  "parabel7.5yellow-gold": <img src={Parabel75YellowGold} alt="RingPair" />,
  "parabel8yellow-gold": <img src={Parabel8YellowGold} alt="RingPair" />,
  "parabel8.5yellow-gold": <img src={Parabel85YellowGold} alt="RingPair" />,
  "parabel9yellow-gold": <img src={Parabel9YellowGold} alt="RingPair" />,
  "parabel9.5yellow-gold": <img src={Parabel95YellowGold} alt="RingPair" />,
  "parabel10yellow-gold": <img src={Parabel10YellowGold} alt="RingPair" />,
  "parabel2rose-gold": <img src={Parabel2RoseGold} alt="RingPair" />,
  "parabel2.5rose-gold": <img src={Parabel25RoseGold} alt="RingPair" />,
  "parabel3rose-gold": <img src={Parabel3RoseGold} alt="RingPair" />,
  "parabel3.5rose-gold": <img src={Parabel35RoseGold} alt="RingPair" />,
  "parabel4rose-gold": <img src={Parabel4RoseGold} alt="RingPair" />,
  "parabel4.5rose-gold": <img src={Parabel45RoseGold} alt="RingPair" />,
  "parabel5rose-gold": <img src={Parabel5RoseGold} alt="RingPair" />,
  "parabel5.5rose-gold": <img src={Parabel55RoseGold} alt="RingPair" />,
  "parabel6rose-gold": <img src={Parabel6RoseGold} alt="RingPair" />,
  "parabel6.5rose-gold": <img src={Parabel65RoseGold} alt="RingPair" />,
  "parabel7rose-gold": <img src={Parabel7RoseGold} alt="RingPair" />,
  "parabel7.5rose-gold": <img src={Parabel75RoseGold} alt="RingPair" />,
  "parabel8rose-gold": <img src={Parabel8RoseGold} alt="RingPair" />,
  "parabel8.5rose-gold": <img src={Parabel85RoseGold} alt="RingPair" />,
  "parabel9rose-gold": <img src={Parabel9RoseGold} alt="RingPair" />,
  "parabel9.5rose-gold": <img src={Parabel95RoseGold} alt="RingPair" />,
  "parabel10rose-gold": <img src={Parabel10RoseGold} alt="RingPair" />,
  "parabel2white-gold": <img src={Parabel2WhiteGold} alt="RingPair" />,
  "parabel2.5white-gold": <img src={Parabel25WhiteGold} alt="RingPair" />,
  "parabel3white-gold": <img src={Parabel3WhiteGold} alt="RingPair" />,
  "parabel3.5white-gold": <img src={Parabel35WhiteGold} alt="RingPair" />,
  "parabel4white-gold": <img src={Parabel4WhiteGold} alt="RingPair" />,
  "parabel4.5white-gold": <img src={Parabel45WhiteGold} alt="RingPair" />,
  "parabel5white-gold": <img src={Parabel5WhiteGold} alt="RingPair" />,
  "parabel5.5white-gold": <img src={Parabel55WhiteGold} alt="RingPair" />,
  "parabel6white-gold": <img src={Parabel6WhiteGold} alt="RingPair" />,
  "parabel6.5white-gold": <img src={Parabel65WhiteGold} alt="RingPair" />,
  "parabel7white-gold": <img src={Parabel7WhiteGold} alt="RingPair" />,
  "parabel7.5white-gold": <img src={Parabel75WhiteGold} alt="RingPair" />,
  "parabel8white-gold": <img src={Parabel8WhiteGold} alt="RingPair" />,
  "parabel8.5white-gold": <img src={Parabel85WhiteGold} alt="RingPair" />,
  "parabel9white-gold": <img src={Parabel9WhiteGold} alt="RingPair" />,
  "parabel9.5white-gold": <img src={Parabel95WhiteGold} alt="RingPair" />,
  "parabel10white-gold": <img src={Parabel10WhiteGold} alt="RingPair" />,
  "sidecut2yellow-gold": <img src={Sidecut2YellowGold} alt="RingPair" />,
  "sidecut2.5yellow-gold": <img src={Sidecut25YellowGold} alt="RingPair" />,
  "sidecut3yellow-gold": <img src={Sidecut3YellowGold} alt="RingPair" />,
  "sidecut3.5yellow-gold": <img src={Sidecut35YellowGold} alt="RingPair" />,
  "sidecut4yellow-gold": <img src={Sidecut4YellowGold} alt="RingPair" />,
  "sidecut4.5yellow-gold": <img src={Sidecut45YellowGold} alt="RingPair" />,
  "sidecut5yellow-gold": <img src={Sidecut5YellowGold} alt="RingPair" />,
  "sidecut5.5yellow-gold": <img src={Sidecut55YellowGold} alt="RingPair" />,
  "sidecut6yellow-gold": <img src={Sidecut6YellowGold} alt="RingPair" />,
  "sidecut6.5yellow-gold": <img src={Sidecut65YellowGold} alt="RingPair" />,
  "sidecut7yellow-gold": <img src={Sidecut7YellowGold} alt="RingPair" />,
  "sidecut7.5yellow-gold": <img src={Sidecut75YellowGold} alt="RingPair" />,
  "sidecut8yellow-gold": <img src={Sidecut8YellowGold} alt="RingPair" />,
  "sidecut8.5yellow-gold": <img src={Sidecut85YellowGold} alt="RingPair" />,
  "sidecut9yellow-gold": <img src={Sidecut9YellowGold} alt="RingPair" />,
  "sidecut9.5yellow-gold": <img src={Sidecut95YellowGold} alt="RingPair" />,
  "sidecut10yellow-gold": <img src={Sidecut10YellowGold} alt="RingPair" />,
  "sidecut2rose-gold": <img src={Sidecut2RoseGold} alt="RingPair" />,
  "sidecut2.5rose-gold": <img src={Sidecut25RoseGold} alt="RingPair" />,
  "sidecut3rose-gold": <img src={Sidecut3RoseGold} alt="RingPair" />,
  "sidecut3.5rose-gold": <img src={Sidecut35RoseGold} alt="RingPair" />,
  "sidecut4rose-gold": <img src={Sidecut4RoseGold} alt="RingPair" />,
  "sidecut4.5rose-gold": <img src={Sidecut45RoseGold} alt="RingPair" />,
  "sidecut5rose-gold": <img src={Sidecut5RoseGold} alt="RingPair" />,
  "sidecut5.5rose-gold": <img src={Sidecut55RoseGold} alt="RingPair" />,
  "sidecut6rose-gold": <img src={Sidecut6RoseGold} alt="RingPair" />,
  "sidecut6.5rose-gold": <img src={Sidecut65RoseGold} alt="RingPair" />,
  "sidecut7rose-gold": <img src={Sidecut7RoseGold} alt="RingPair" />,
  "sidecut7.5rose-gold": <img src={Sidecut75RoseGold} alt="RingPair" />,
  "sidecut8rose-gold": <img src={Sidecut8RoseGold} alt="RingPair" />,
  "sidecut8.5rose-gold": <img src={Sidecut85RoseGold} alt="RingPair" />,
  "sidecut9rose-gold": <img src={Sidecut9RoseGold} alt="RingPair" />,
  "sidecut9.5rose-gold": <img src={Sidecut95RoseGold} alt="RingPair" />,
  "sidecut10rose-gold": <img src={Sidecut10RoseGold} alt="RingPair" />,
  "sidecut2white-gold": <img src={Sidecut2WhiteGold} alt="RingPair" />,
  "sidecut2.5white-gold": <img src={Sidecut25WhiteGold} alt="RingPair" />,
  "sidecut3white-gold": <img src={Sidecut3WhiteGold} alt="RingPair" />,
  "sidecut3.5white-gold": <img src={Sidecut35WhiteGold} alt="RingPair" />,
  "sidecut4white-gold": <img src={Sidecut4WhiteGold} alt="RingPair" />,
  "sidecut4.5white-gold": <img src={Sidecut45WhiteGold} alt="RingPair" />,
  "sidecut5white-gold": <img src={Sidecut5WhiteGold} alt="RingPair" />,
  "sidecut5.5white-gold": <img src={Sidecut55WhiteGold} alt="RingPair" />,
  "sidecut6white-gold": <img src={Sidecut6WhiteGold} alt="RingPair" />,
  "sidecut6.5white-gold": <img src={Sidecut65WhiteGold} alt="RingPair" />,
  "sidecut7white-gold": <img src={Sidecut7WhiteGold} alt="RingPair" />,
  "sidecut7.5white-gold": <img src={Sidecut75WhiteGold} alt="RingPair" />,
  "sidecut8white-gold": <img src={Sidecut8WhiteGold} alt="RingPair" />,
  "sidecut8.5white-gold": <img src={Sidecut85WhiteGold} alt="RingPair" />,
  "sidecut9white-gold": <img src={Sidecut9WhiteGold} alt="RingPair" />,
  "sidecut9.5white-gold": <img src={Sidecut95WhiteGold} alt="RingPair" />,
  "sidecut10white-gold": <img src={Sidecut10WhiteGold} alt="RingPair" />,
  "planar2yellow-gold": <img src={Planar2YellowGold} alt="RingPair" />,
  "planar2.5yellow-gold": <img src={Planar25YellowGold} alt="RingPair" />,
  "planar3yellow-gold": <img src={Planar3YellowGold} alt="RingPair" />,
  "planar3.5yellow-gold": <img src={Planar35YellowGold} alt="RingPair" />,
  "planar4yellow-gold": <img src={Planar4YellowGold} alt="RingPair" />,
  "planar4.5yellow-gold": <img src={Planar45YellowGold} alt="RingPair" />,
  "planar5yellow-gold": <img src={Planar5YellowGold} alt="RingPair" />,
  "planar5.5yellow-gold": <img src={Planar55YellowGold} alt="RingPair" />,
  "planar6yellow-gold": <img src={Planar6YellowGold} alt="RingPair" />,
  "planar6.5yellow-gold": <img src={Planar65YellowGold} alt="RingPair" />,
  "planar7yellow-gold": <img src={Planar7YellowGold} alt="RingPair" />,
  "planar7.5yellow-gold": <img src={Planar75YellowGold} alt="RingPair" />,
  "planar8yellow-gold": <img src={Planar8YellowGold} alt="RingPair" />,
  "planar8.5yellow-gold": <img src={Planar85YellowGold} alt="RingPair" />,
  "planar9yellow-gold": <img src={Planar9YellowGold} alt="RingPair" />,
  "planar9.5yellow-gold": <img src={Planar95YellowGold} alt="RingPair" />,
  "planar10yellow-gold": <img src={Planar10YellowGold} alt="RingPair" />,
  "planar2rose-gold": <img src={Planar2RoseGold} alt="RingPair" />,
  "planar2.5rose-gold": <img src={Planar25RoseGold} alt="RingPair" />,
  "planar3rose-gold": <img src={Planar3RoseGold} alt="RingPair" />,
  "planar3.5rose-gold": <img src={Planar35RoseGold} alt="RingPair" />,
  "planar4rose-gold": <img src={Planar4RoseGold} alt="RingPair" />,
  "planar4.5rose-gold": <img src={Planar45RoseGold} alt="RingPair" />,
  "planar5rose-gold": <img src={Planar5RoseGold} alt="RingPair" />,
  "planar5.5rose-gold": <img src={Planar55RoseGold} alt="RingPair" />,
  "planar6rose-gold": <img src={Planar6RoseGold} alt="RingPair" />,
  "planar6.5rose-gold": <img src={Planar65RoseGold} alt="RingPair" />,
  "planar7rose-gold": <img src={Planar7RoseGold} alt="RingPair" />,
  "planar7.5rose-gold": <img src={Planar75RoseGold} alt="RingPair" />,
  "planar8rose-gold": <img src={Planar8RoseGold} alt="RingPair" />,
  "planar8.5rose-gold": <img src={Planar85RoseGold} alt="RingPair" />,
  "planar9rose-gold": <img src={Planar9RoseGold} alt="RingPair" />,
  "planar9.5rose-gold": <img src={Planar95RoseGold} alt="RingPair" />,
  "planar10rose-gold": <img src={Planar10RoseGold} alt="RingPair" />,
  "planar2white-gold": <img src={Planar2WhiteGold} alt="RingPair" />,
  "planar2.5white-gold": <img src={Planar25WhiteGold} alt="RingPair" />,
  "planar3white-gold": <img src={Planar3WhiteGold} alt="RingPair" />,
  "planar3.5white-gold": <img src={Planar35WhiteGold} alt="RingPair" />,
  "planar4white-gold": <img src={Planar4WhiteGold} alt="RingPair" />,
  "planar4.5white-gold": <img src={Planar45WhiteGold} alt="RingPair" />,
  "planar5white-gold": <img src={Planar5WhiteGold} alt="RingPair" />,
  "planar5.5white-gold": <img src={Planar55WhiteGold} alt="RingPair" />,
  "planar6white-gold": <img src={Planar6WhiteGold} alt="RingPair" />,
  "planar6.5white-gold": <img src={Planar65WhiteGold} alt="RingPair" />,
  "planar7white-gold": <img src={Planar7WhiteGold} alt="RingPair" />,
  "planar7.5white-gold": <img src={Planar75WhiteGold} alt="RingPair" />,
  "planar8white-gold": <img src={Planar8WhiteGold} alt="RingPair" />,
  "planar8.5white-gold": <img src={Planar85WhiteGold} alt="RingPair" />,
  "planar9white-gold": <img src={Planar9WhiteGold} alt="RingPair" />,
  "planar9.5white-gold": <img src={Planar95WhiteGold} alt="RingPair" />,
  "planar10white-gold": <img src={Planar10WhiteGold} alt="RingPair" />,
  "forma2yellow-gold": <img src={Forma2YellowGold} alt="RingPair" />,
  "forma2.5yellow-gold": <img src={Forma25YellowGold} alt="RingPair" />,
  "forma3yellow-gold": <img src={Forma3YellowGold} alt="RingPair" />,
  "forma3.5yellow-gold": <img src={Forma35YellowGold} alt="RingPair" />,
  "forma4yellow-gold": <img src={Forma4YellowGold} alt="RingPair" />,
  "forma4.5yellow-gold": <img src={Forma45YellowGold} alt="RingPair" />,
  "forma5yellow-gold": <img src={Forma5YellowGold} alt="RingPair" />,
  "forma5.5yellow-gold": <img src={Forma55YellowGold} alt="RingPair" />,
  "forma6yellow-gold": <img src={Forma6YellowGold} alt="RingPair" />,
  "forma6.5yellow-gold": <img src={Forma65YellowGold} alt="RingPair" />,
  "forma7yellow-gold": <img src={Forma7YellowGold} alt="RingPair" />,
  "forma7.5yellow-gold": <img src={Forma75YellowGold} alt="RingPair" />,
  "forma8yellow-gold": <img src={Forma8YellowGold} alt="RingPair" />,
  "forma8.5yellow-gold": <img src={Forma85YellowGold} alt="RingPair" />,
  "forma9yellow-gold": <img src={Forma9YellowGold} alt="RingPair" />,
  "forma9.5yellow-gold": <img src={Forma95YellowGold} alt="RingPair" />,
  "forma10yellow-gold": <img src={Forma10YellowGold} alt="RingPair" />,
  "forma2rose-gold": <img src={Forma2RoseGold} alt="RingPair" />,
  "forma2.5rose-gold": <img src={Forma25RoseGold} alt="RingPair" />,
  "forma3rose-gold": <img src={Forma3RoseGold} alt="RingPair" />,
  "forma3.5rose-gold": <img src={Forma35RoseGold} alt="RingPair" />,
  "forma4rose-gold": <img src={Forma4RoseGold} alt="RingPair" />,
  "forma4.5rose-gold": <img src={Forma45RoseGold} alt="RingPair" />,
  "forma5rose-gold": <img src={Forma5RoseGold} alt="RingPair" />,
  "forma5.5rose-gold": <img src={Forma55RoseGold} alt="RingPair" />,
  "forma6rose-gold": <img src={Forma6RoseGold} alt="RingPair" />,
  "forma6.5rose-gold": <img src={Forma65RoseGold} alt="RingPair" />,
  "forma7rose-gold": <img src={Forma7RoseGold} alt="RingPair" />,
  "forma7.5rose-gold": <img src={Forma75RoseGold} alt="RingPair" />,
  "forma8rose-gold": <img src={Forma8RoseGold} alt="RingPair" />,
  "forma8.5rose-gold": <img src={Forma85RoseGold} alt="RingPair" />,
  "forma9rose-gold": <img src={Forma9RoseGold} alt="RingPair" />,
  "forma9.5rose-gold": <img src={Forma95RoseGold} alt="RingPair" />,
  "forma10rose-gold": <img src={Forma10RoseGold} alt="RingPair" />,
  "forma2white-gold": <img src={Forma2WhiteGold} alt="RingPair" />,
  "forma2.5white-gold": <img src={Forma25WhiteGold} alt="RingPair" />,
  "forma3white-gold": <img src={Forma3WhiteGold} alt="RingPair" />,
  "forma3.5white-gold": <img src={Forma35WhiteGold} alt="RingPair" />,
  "forma4white-gold": <img src={Forma4WhiteGold} alt="RingPair" />,
  "forma4.5white-gold": <img src={Forma45WhiteGold} alt="RingPair" />,
  "forma5white-gold": <img src={Forma5WhiteGold} alt="RingPair" />,
  "forma5.5white-gold": <img src={Forma55WhiteGold} alt="RingPair" />,
  "forma6white-gold": <img src={Forma6WhiteGold} alt="RingPair" />,
  "forma6.5white-gold": <img src={Forma65WhiteGold} alt="RingPair" />,
  "forma7white-gold": <img src={Forma7WhiteGold} alt="RingPair" />,
  "forma7.5white-gold": <img src={Forma75WhiteGold} alt="RingPair" />,
  "forma8white-gold": <img src={Forma8WhiteGold} alt="RingPair" />,
  "forma8.5white-gold": <img src={Forma85WhiteGold} alt="RingPair" />,
  "forma9white-gold": <img src={Forma9WhiteGold} alt="RingPair" />,
  "forma9.5white-gold": <img src={Forma95WhiteGold} alt="RingPair" />,
  "forma10white-gold": <img src={Forma10WhiteGold} alt="RingPair" />,
};

class RingPair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "oval",
      color: "white-gold",
      measure: 4,
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
        </div>
      </div>
    );
  }
}

export default RingPair;
