import * as React from "react";

function SvgLists(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 30" fill="none" {...props}>
      <g filter="url(#lists_svg__filter0_d)" fill="currentColor">
        <path d="M21.75 22H6.25C5.01 22 4 20.99 4 19.75V4.25C4 3.01 5.01 2 6.25 2h15.5C22.99 2 24 3.01 24 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM6.25 3.5a.75.75 0 00-.75.75v15.5c0 .413.336.75.75.75h15.5a.75.75 0 00.75-.75V4.25a.75.75 0 00-.75-.75H6.25z" />
        <path d="M19 8.64H9a.75.75 0 010-1.5h10a.75.75 0 110 1.5zm0 4.11H9a.75.75 0 010-1.5h10a.75.75 0 010 1.5zm-5 4.11H9a.75.75 0 110-1.5h5a.75.75 0 010 1.5z" />
      </g>
      <defs>
        <filter
          id="lists_svg__filter0_d"
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

export default SvgLists;
