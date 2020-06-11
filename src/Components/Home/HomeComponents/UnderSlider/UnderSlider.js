import React from "react";
import {
  UnderSliderContainer,
  UnderSliderContainerUpper,
  UnderSliderContainerLower,
  UnderSliderContainerLowerElement,
  Checked,
} from "./UnderSliderStyle";

/**
 * "UnderSlider" component.
 */
const UnderSlider = () => (
  <UnderSliderContainer>
    <UnderSliderContainerUpper>RAC Approved Dealer</UnderSliderContainerUpper>
    <UnderSliderContainerLower>
      <UnderSliderContainerLowerElement>
        <Checked />
        &nbsp;6 months free warranty
      </UnderSliderContainerLowerElement>
      <UnderSliderContainerLowerElement>
        <Checked />
        &nbsp;12 months free breakdown cover
      </UnderSliderContainerLowerElement>
      <UnderSliderContainerLowerElement>
        <Checked />
        &nbsp;Extended options available
      </UnderSliderContainerLowerElement>
    </UnderSliderContainerLower>
  </UnderSliderContainer>
);
export default UnderSlider;
