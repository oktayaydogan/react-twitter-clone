import * as React from "react";

function SvgEmoji(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 31" fill="none" {...props}>
      <g filter="url(#emoji_svg__filter0_d)" fill="currentColor">
        <path d="M15 22.75C9.072 22.75 4.25 17.928 4.25 12S9.072 1.25 15 1.25 25.75 6.072 25.75 12 20.928 22.75 15 22.75zm0-20C9.9 2.75 5.75 6.9 5.75 12S9.9 21.25 15 21.25s9.25-4.15 9.25-9.25S20.1 2.75 15 2.75z" />
        <path d="M15 17.115a5.509 5.509 0 01-4.656-2.544.748.748 0 01.226-1.035.747.747 0 011.036.226 4.02 4.02 0 003.395 1.855 4.024 4.024 0 003.396-1.854.747.747 0 011.036-.225c.35.224.45.688.226 1.036a5.516 5.516 0 01-4.658 2.545L15 17.115zM17.738 10.936a1.478 1.478 0 100-2.956 1.478 1.478 0 000 2.956zM12.262 10.936a1.478 1.478 0 100-2.956 1.478 1.478 0 000 2.956z" />
      </g>
      <defs>
        <filter
          id="emoji_svg__filter0_d"
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

export default SvgEmoji;
