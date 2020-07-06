import * as React from "react";

function SvgBgPentagon(props) {
  return (
    <svg width={329} height={313} {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={15}
        d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
        opacity={0.2}
      />
    </svg>
  );
}

export default SvgBgPentagon;
