import * as React from "react";

function SvgListsFill(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 30" fill="none" {...props}>
      <g filter="url(#lists-fill_svg__filter0_d)">
        <path
          d="M21.75 2H6.25A2.257 2.257 0 004 4.25v15.5A2.257 2.257 0 006.25 22h15.5A2.257 2.257 0 0024 19.75V4.25A2.257 2.257 0 0021.75 2zM13 16.75H9a.75.75 0 010-1.5h4a.75.75 0 010 1.5zm6-4H9a.75.75 0 010-1.5h10a.75.75 0 010 1.5zm0-4H9a.75.75 0 010-1.5h10a.75.75 0 010 1.5z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="lists-fill_svg__filter0_d"
          x={-2}
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

export default SvgListsFill;
