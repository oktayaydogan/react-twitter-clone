import * as React from "react";

function SvgQuestion(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 30" fill="none" {...props}>
      <g filter="url(#question_svg__filter0_d)">
        <path
          d="M22.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H5.5V3.358a.75.75 0 00-1.5 0V20.83a.75.75 0 101.5 0v-1.434h10.556a1.78 1.78 0 001.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417a1.78 1.78 0 001.778-1.778v-2.31a1.78 1.78 0 00-1.778-1.78h-.001zM19.14 6.293c.152 0 .277.124.277.277v2.31a.28.28 0 01-.278.28H5.5V6.29h13.64v.003zm-2.807 9.014v2.312a.278.278 0 01-.278.277H5.5v-2.868h10.556c.153 0 .277.126.277.28v-.001zM22.5 13.25a.278.278 0 01-.278.277H5.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="question_svg__filter0_d"
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

export default SvgQuestion;
