import * as React from "react";

function SvgArrowBottom(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" {...props}>
      <g filter="url(#arrow-bottom_svg__filter0_d)">
        <path
          d="M21.207 8.147a1 1 0 00-1.414 0L13 14.94 6.207 8.147a1 1 0 00-1.414 1.414l7.5 7.5a.996.996 0 001.414.001l7.5-7.5a1 1 0 000-1.413v-.002z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="arrow-bottom_svg__filter0_d"
          x={-3}
          y={0}
          width={32}
          height={32}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgArrowBottom;
