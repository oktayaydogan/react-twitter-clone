import * as React from "react";

function SvgMedia(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 30" fill="none" {...props}>
      <g filter="url(#media_svg__filter0_d)" fill="currentColor">
        <path d="M21.75 2H6.25C5.01 2 4 3.01 4 4.25v15.5C4 20.99 5.01 22 6.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C24 3.01 22.99 2 21.75 2zM6.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858a.75.75 0 00-.53-.22h-.003a.74.74 0 00-.532.224l-4.317 4.384-1.813-1.806a.75.75 0 00-.53-.22c-.193-.03-.395.08-.535.227L5.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H6.25a.75.75 0 01-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z" />
        <path d="M10.868 9.851a1.542 1.542 0 100-3.084 1.542 1.542 0 000 3.084z" />
      </g>
      <defs>
        <filter
          id="media_svg__filter0_d"
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

export default SvgMedia;
