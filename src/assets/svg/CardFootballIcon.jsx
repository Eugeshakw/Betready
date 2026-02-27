import React from "react";

const CardFootballIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={18} height={18} fill="url(#pattern0_80_789)" />
    <defs>
      <pattern
        id="pattern0_80_789"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_80_789" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_80_789"
        width={100}
        height={100}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default CardFootballIcon;
