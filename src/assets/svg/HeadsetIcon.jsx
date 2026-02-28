import React from "react";

const HeadsetIcon = ({ width = 45, height = 45, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="45" height="45" fill="url(#pattern0_80_737)" />
    <defs>
      <pattern
        id="pattern0_80_737"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_80_737" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_80_737"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default HeadsetIcon;
