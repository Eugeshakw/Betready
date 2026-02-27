import React from "react";

const JokerIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={18} height={18} fill="url(#pattern0_80_793)" />
    <defs>
      <pattern
        id="pattern0_80_793"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_80_793" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_80_793"
        width={100}
        height={100}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default JokerIcon;
