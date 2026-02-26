// src/assets/svg/WarrantyIcon.jsx
import React from 'react';

const WarrantyIcon = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="18" height="18" fill="url(#pattern0_80_80)" />
    <defs>
      <pattern
        id="pattern0_80_80"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_80_80" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_80_80"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default WarrantyIcon;
