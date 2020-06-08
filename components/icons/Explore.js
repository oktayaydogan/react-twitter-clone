import * as React from "react";

function SvgExplore(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 30" fill="none" {...props}>
      <g filter="url(#explore_svg__filter0_d)">
        <path
          d="M23 7.337h-3.93l.372-4.272a.751.751 0 00-.682-.812.752.752 0 00-.812.683l-.383 4.4h-6.32l.37-4.27a.75.75 0 00-.68-.813.751.751 0 00-.813.683l-.382 4.4H5.782a.75.75 0 000 1.5H9.61l-.55 6.327H5a.75.75 0 000 1.5h3.93l-.372 4.272a.751.751 0 00.682.812l.066.003a.75.75 0 00.746-.686l.383-4.4h6.32l-.37 4.27a.751.751 0 00.682.813l.066.003a.75.75 0 00.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75a.752.752 0 00-.75-.75H18.39l.55-6.327H23a.75.75 0 000-1.5zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="explore_svg__filter0_d"
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

export default SvgExplore;
