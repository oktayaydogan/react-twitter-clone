import * as React from "react";

function SvgMore(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 31" fill="none" {...props}>
      <g filter="url(#more_svg__filter0_d)" fill="currentColor">
        <path d="M19.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5a.75.75 0 110-1.5.75.75 0 010 1.5zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5a.75.75 0 110-1.5.75.75 0 010 1.5zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        <path d="M15 22.75C9.072 22.75 4.25 17.928 4.25 12S9.072 1.25 15 1.25 25.75 6.072 25.75 12 20.928 22.75 15 22.75zm0-20C9.9 2.75 5.75 6.9 5.75 12S9.9 21.25 15 21.25s9.25-4.15 9.25-9.25S20.1 2.75 15 2.75z" />
      </g>
      <defs>
        <filter
          id="more_svg__filter0_d"
          x={-1}
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

export default SvgMore;
