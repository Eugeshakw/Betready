import React from "react";

const KillerJokerIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={18} height={18} fill="url(#pattern0_80_792)" />
    <defs>
      <pattern
        id="pattern0_80_792"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_80_792" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_80_792"
        width={100}
        height={100}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default KillerJokerIcon;
