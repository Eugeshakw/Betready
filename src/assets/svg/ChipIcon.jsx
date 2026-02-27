import React from "react";

const ChipIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={18} height={18} fill="url(#pattern0_80_794)" />
    <defs>
      <pattern
        id="pattern0_80_794"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_80_794" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_80_794"
        width={100}
        height={100}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default ChipIcon;
