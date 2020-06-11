import React from "react";
import GetInTouch from "./FooterComponents/GetInTouch/GetInTouch";
import OpeningHours from "./FooterComponents/OpeningHours/OpeningHours";
import QuickLinks from "./FooterComponents/QuickLinks/QuickLinks";
import FooterContainer from "./FooterStyle";

/**
 * "Footer" component
 */
const Footer = () => (
  <FooterContainer>
    <GetInTouch />
    <OpeningHours />
    <QuickLinks />
  </FooterContainer>
);
export default Footer;
