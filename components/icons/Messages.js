import * as React from "react";

function SvgMessages(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 30" fill="none" {...props}>
      <g filter="url(#messages_svg__filter0_d)">
        <path
          d="M21.25 3.018H6.75A2.753 2.753 0 004 5.77v12.495a2.754 2.754 0 002.75 2.753h14.5A2.754 2.754 0 0024 18.265V5.77a2.753 2.753 0 00-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367a.81.81 0 01-.9-.002L5.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H6.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83a2.265 2.265 0 002.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25v.003z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="messages_svg__filter0_d"
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

export default SvgMessages;
