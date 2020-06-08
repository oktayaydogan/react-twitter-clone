import * as React from "react";

function SvgGif(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 31" fill="none" {...props}>
      <g filter="url(#gif_svg__filter0_d)" fill="currentColor">
        <path d="M22 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H22zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1c-.6-.7-1.5-1.1-2.4-1.1-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2 1 0 1.8-.4 2.4-1.1v-2.5h-2.8v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z" />
        <path d="M23.5 2.02h-17a2.25 2.25 0 00-2.25 2.247v15.507A2.251 2.251 0 006.5 22.02h17c1.24 0 2.25-1.008 2.25-2.246V4.267A2.25 2.25 0 0023.5 2.02zm.75 17.754a.75.75 0 01-.75.746h-17a.75.75 0 01-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z" />
      </g>
      <defs>
        <filter
          id="gif_svg__filter0_d"
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

export default SvgGif;
