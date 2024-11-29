import React from "react";

const Eclipse4 = ({ style }) => {
  return (
    <div style={style}>
      <svg
        width="616"
        height="1232"
        viewBox="0 0 616 1232"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_411_2986)">
          <circle cx="616" cy="616" r="116" fill="#41C4DA" />
        </g>
        <defs>
          <filter
            id="filter0_f_411_2986"
            x="0"
            y="0"
            width="1232"
            height="1232"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="250"
              result="effect1_foregroundBlur_411_2986"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Eclipse4;
