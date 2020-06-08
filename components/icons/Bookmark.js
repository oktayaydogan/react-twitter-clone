import * as React from "react";

function SvgBookmark(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 32" fill="none" {...props}>
      <g filter="url(#bookmark_svg__filter0_d)">
        <path
          d="M20.9 23.5a.755.755 0 01-.442-.144L13 17.928l-7.458 5.43a.75.75 0 01-1.192-.607V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15a.749.749 0 01-.75.75h.002zM13 16.25a.74.74 0 01.44.144l6.71 4.883V5.6a.752.752 0 00-.75-.75H6.6a.752.752 0 00-.75.75v15.677l6.71-4.883a.74.74 0 01.44-.144z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="bookmark_svg__filter0_d"
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

export default SvgBookmark;
