import * as React from "react";

function SvgIconClose(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path
        fill="#3B4262"
        fillRule="evenodd"
        d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
        opacity={0.25}
      />
    </svg>
  );
}

export default SvgIconClose;
