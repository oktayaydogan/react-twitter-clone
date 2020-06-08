import * as React from "react";

function SvgMessagesFill(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 30" fill="none" {...props}>
      <g filter="url(#messages-fill_svg__filter0_d)" fill="currentColor">
        <path d="M13.55 12.082a.81.81 0 00.9 0L24 5.716V5.5c0-1.24-1.01-2.25-2.25-2.25H6.25C5.01 3.25 4 4.26 4 5.5v.197l9.55 6.385z" />
        <path d="M15.26 13.295a2.266 2.266 0 01-2.52-.001L4 7.452v11.67c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V7.47l-8.74 5.823v.002z" />
      </g>
      <defs>
        <filter
          id="messages-fill_svg__filter0_d"
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

export default SvgMessagesFill;
