import React from "react";

const AppleIcon = (props) => (
  <svg
    width={props.width || "20"}
    height={props.height || "20"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width="20" height="20" fill="url(#pattern0_80_693)" />
    <defs>
      <pattern id="pattern0_80_693" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_80_693" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_80_693"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default AppleIcon;
