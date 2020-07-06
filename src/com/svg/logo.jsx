import * as React from "react";

function SvgLogo(props) {
  return (
    <svg width={162} height={99} {...props}>
      <defs>
        <filter
          id="logo_svg__a"
          width="107.7%"
          height="112.9%"
          x="-3.9%"
          y="-3.2%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={3} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={1.5}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196705638 0"
          />
        </filter>
        <path
          id="logo_svg__b"
          d="M39.28 56a.463.463 0 00.34-.14.463.463 0 00.14-.34V44.6c0-.133.067-.2.2-.2h2.52c.08 0 .147.053.2.16l4.04 11.04c.08.267.267.4.56.4h4.88c.293 0 .44-.12.44-.36a.445.445 0 00-.04-.2L48 43.96c-.053-.133-.013-.227.12-.28 1.36-.613 2.413-1.547 3.16-2.8.747-1.253 1.12-2.733 1.12-4.44 0-1.653-.333-3.12-1-4.4a7.203 7.203 0 00-2.84-2.98c-1.227-.707-2.627-1.06-4.2-1.06H34.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.16-15.92h-3.48c-.133 0-.2-.067-.2-.2v-6.84c0-.133.067-.2.2-.2h3.48c.987 0 1.787.327 2.4.98s.92 1.54.92 2.66c0 1.093-.307 1.967-.92 2.62s-1.413.98-2.4.98zm21.2 16.28c1.84 0 3.467-.373 4.88-1.12 1.413-.747 2.507-1.8 3.28-3.16.773-1.36 1.16-2.947 1.16-4.76V36.68c0-1.787-.387-3.36-1.16-4.72-.773-1.36-1.867-2.413-3.28-3.16-1.413-.747-3.04-1.12-4.88-1.12-1.84 0-3.46.373-4.86 1.12a8.003 8.003 0 00-3.26 3.16c-.773 1.36-1.16 2.933-1.16 4.72v10.64c0 1.813.387 3.4 1.16 4.76a8.003 8.003 0 003.26 3.16c1.4.747 3.02 1.12 4.86 1.12zm0-4.84c-1.093 0-1.973-.367-2.64-1.1-.667-.733-1-1.687-1-2.86V36.52c0-1.2.333-2.167 1-2.9.667-.733 1.547-1.1 2.64-1.1 1.12 0 2.013.367 2.68 1.1.667.733 1 1.7 1 2.9v11.04c0 1.173-.333 2.127-1 2.86-.667.733-1.56 1.1-2.68 1.1zm21.76 4.8c1.813 0 3.413-.353 4.8-1.06 1.387-.707 2.46-1.713 3.22-3.02.76-1.307 1.14-2.813 1.14-4.52v-.12a.463.463 0 00-.14-.34.463.463 0 00-.34-.14l-4.68-.2c-.32 0-.48.147-.48.44v.52c0 1.093-.32 1.967-.96 2.62-.64.653-1.493.98-2.56.98s-1.92-.327-2.56-.98c-.64-.653-.96-1.527-.96-2.62V36.16c0-1.093.32-1.973.96-2.64.64-.667 1.493-1 2.56-1s1.92.333 2.56 1c.64.667.96 1.547.96 2.64v.52c0 .293.16.44.48.44l4.68-.2a.436.436 0 00.34-.16.533.533 0 00.14-.36v-.2c0-1.707-.38-3.2-1.14-4.48-.76-1.28-1.833-2.273-3.22-2.98-1.387-.707-2.987-1.06-4.8-1.06-1.813 0-3.413.36-4.8 1.08-1.387.72-2.46 1.74-3.22 3.06-.76 1.32-1.14 2.847-1.14 4.58v11.12c0 1.76.38 3.307 1.14 4.64a7.716 7.716 0 003.22 3.08c1.387.72 2.987 1.08 4.8 1.08zm17.92-.32a.463.463 0 00.34-.14.463.463 0 00.14-.34v-8c0-.053.027-.133.08-.24l1.8-2.6c.053-.08.107-.12.16-.12.053 0 .093.04.12.12l5.68 10.96c.133.24.32.36.56.36h5.12c.293 0 .44-.107.44-.32a.614.614 0 00-.08-.24l-7.84-15.12a.498.498 0 010-.28l7.4-11.48c.107-.16.127-.293.06-.4-.067-.107-.193-.16-.38-.16h-5.16a.627.627 0 00-.56.32l-7.16 10.88c-.027.08-.073.107-.14.08-.067-.027-.1-.08-.1-.16V28.48a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.68a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zM39.16 88a.463.463 0 00.34-.14.463.463 0 00.14-.34v-10.4c0-.133.067-.2.2-.2h4.32c1.6 0 3.02-.347 4.26-1.04a7.197 7.197 0 002.88-2.94c.68-1.267 1.02-2.727 1.02-4.38 0-1.68-.34-3.173-1.02-4.48-.68-1.307-1.64-2.32-2.88-3.04-1.24-.72-2.66-1.08-4.26-1.08h-9.68a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.08c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.08-15.56h-3.4c-.133 0-.2-.067-.2-.2v-7.2c0-.133.067-.2.2-.2h3.4c1.04 0 1.873.347 2.5 1.04.627.693.94 1.627.94 2.8 0 1.147-.313 2.06-.94 2.74-.627.68-1.46 1.02-2.5 1.02zM59.36 88c.267 0 .44-.133.52-.4l.92-3.92c.027-.107.093-.16.2-.16h7.48c.107 0 .173.053.2.16l.92 3.92c.08.267.267.4.56.4h4.88c.293 0 .44-.12.44-.36l-.04-.16-7.2-27.08c-.08-.267-.267-.4-.56-.4h-5.8c-.293 0-.48.133-.56.4l-7.2 27.08c-.08.347.053.52.4.52h4.84zm8-8.84h-5.28a.266.266 0 01-.16-.06c-.053-.04-.067-.1-.04-.18l2.68-11.6c.027-.107.067-.16.12-.16.053 0 .093.053.12.16l2.76 11.6c.027.08.013.14-.04.18a.266.266 0 01-.16.06zM83.48 88a.463.463 0 00.34-.14.463.463 0 00.14-.34v-10.4c0-.133.067-.2.2-.2h4.32c1.6 0 3.02-.347 4.26-1.04a7.197 7.197 0 002.88-2.94c.68-1.267 1.02-2.727 1.02-4.38 0-1.68-.34-3.173-1.02-4.48-.68-1.307-1.64-2.32-2.88-3.04-1.24-.72-2.66-1.08-4.26-1.08H78.8a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.08c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.08-15.56h-3.4c-.133 0-.2-.067-.2-.2v-7.2c0-.133.067-.2.2-.2h3.4c1.04 0 1.873.347 2.5 1.04.627.693.94 1.627.94 2.8 0 1.147-.313 2.06-.94 2.74-.627.68-1.46 1.02-2.5 1.02zM116.24 88a.463.463 0 00.34-.14.463.463 0 00.14-.34v-3.88a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-10.72c-.133 0-.2-.067-.2-.2v-6.44c0-.133.067-.2.2-.2h6.68a.463.463 0 00.34-.14.463.463 0 00.14-.34v-3.88a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-6.68c-.133 0-.2-.067-.2-.2v-6.24c0-.133.067-.2.2-.2h10.72a.463.463 0 00.34-.14.463.463 0 00.14-.34v-3.88a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-16.08a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h16.08zm9.04 0a.463.463 0 00.34-.14.463.463 0 00.14-.34V76.6c0-.133.067-.2.2-.2h2.52c.08 0 .147.053.2.16l4.04 11.04c.08.267.267.4.56.4h4.88c.293 0 .44-.12.44-.36a.445.445 0 00-.04-.2L134 75.96c-.053-.133-.013-.227.12-.28 1.36-.613 2.413-1.547 3.16-2.8.747-1.253 1.12-2.733 1.12-4.44 0-1.653-.333-3.12-1-4.4a7.203 7.203 0 00-2.84-2.98c-1.227-.707-2.627-1.06-4.2-1.06h-9.76a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.16-15.92h-3.48c-.133 0-.2-.067-.2-.2v-6.84c0-.133.067-.2.2-.2h3.48c.987 0 1.787.327 2.4.98s.92 1.54.92 2.66c0 1.093-.307 1.967-.92 2.62s-1.413.98-2.4.98zm-86.92 48.24c2.72 0 4.9-.713 6.54-2.14 1.64-1.427 2.46-3.353 2.46-5.78 0-1.36-.293-2.52-.88-3.48a8.124 8.124 0 00-2.18-2.38c-.867-.627-2.073-1.367-3.62-2.22l-.84-.48c-1.36-.667-2.373-1.207-3.04-1.62-.667-.413-1.16-.847-1.48-1.3-.32-.453-.48-.987-.48-1.6 0-.88.273-1.567.82-2.06.547-.493 1.3-.74 2.26-.74 1.147 0 2.053.32 2.72.96.667.64 1 1.44 1 2.4v.72c0 .133.047.247.14.34.093.093.207.14.34.14h4.6a.463.463 0 00.34-.14.463.463 0 00.14-.34v-.8c0-1.6-.387-3.013-1.16-4.24-.773-1.227-1.853-2.18-3.24-2.86-1.387-.68-2.973-1.02-4.76-1.02-1.707 0-3.227.313-4.56.94-1.333.627-2.367 1.52-3.1 2.68-.733 1.16-1.1 2.513-1.1 4.06 0 1.547.36 2.867 1.08 3.96.72 1.093 1.587 1.987 2.6 2.68 1.013.693 2.32 1.44 3.92 2.24 1.307.667 2.273 1.193 2.9 1.58.627.387 1.113.8 1.46 1.24.347.44.52.967.52 1.58 0 .827-.273 1.507-.82 2.04-.547.533-1.34.8-2.38.8-1.173 0-2.107-.313-2.8-.94-.693-.627-1.04-1.407-1.04-2.34v-.76a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v1.04c0 1.547.38 2.913 1.14 4.1.76 1.187 1.833 2.107 3.22 2.76 1.387.653 3 .98 4.84.98zm21.08 0c1.813 0 3.413-.353 4.8-1.06 1.387-.707 2.46-1.713 3.22-3.02.76-1.307 1.14-2.813 1.14-4.52v-.12a.463.463 0 00-.14-.34.463.463 0 00-.34-.14l-4.68-.2c-.32 0-.48.147-.48.44v.52c0 1.093-.32 1.967-.96 2.62-.64.653-1.493.98-2.56.98s-1.92-.327-2.56-.98c-.64-.653-.96-1.527-.96-2.62v-11.72c0-1.093.32-1.973.96-2.64.64-.667 1.493-1 2.56-1s1.92.333 2.56 1c.64.667.96 1.547.96 2.64v.52c0 .293.16.44.48.44l4.68-.2a.436.436 0 00.34-.16.533.533 0 00.14-.36v-.2c0-1.707-.38-3.2-1.14-4.48-.76-1.28-1.833-2.273-3.22-2.98-1.387-.707-2.987-1.06-4.8-1.06-1.813 0-3.413.36-4.8 1.08-1.387.72-2.46 1.74-3.22 3.06-.76 1.32-1.14 2.847-1.14 4.58v11.12c0 1.76.38 3.307 1.14 4.64a7.716 7.716 0 003.22 3.08c1.387.72 2.987 1.08 4.8 1.08zm17.92-.32a.463.463 0 00.34-.14.463.463 0 00.14-.34V92.48a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.68a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm13.08.32c2.72 0 4.9-.713 6.54-2.14 1.64-1.427 2.46-3.353 2.46-5.78 0-1.36-.293-2.52-.88-3.48a8.124 8.124 0 00-2.18-2.38c-.867-.627-2.073-1.367-3.62-2.22l-.84-.48c-1.36-.667-2.373-1.207-3.04-1.62-.667-.413-1.16-.847-1.48-1.3-.32-.453-.48-.987-.48-1.6 0-.88.273-1.567.82-2.06.547-.493 1.3-.74 2.26-.74 1.147 0 2.053.32 2.72.96.667.64 1 1.44 1 2.4v.72c0 .133.047.247.14.34.093.093.207.14.34.14h4.6a.463.463 0 00.34-.14.463.463 0 00.14-.34v-.8c0-1.6-.387-3.013-1.16-4.24-.773-1.227-1.853-2.18-3.24-2.86-1.387-.68-2.973-1.02-4.76-1.02-1.707 0-3.227.313-4.56.94-1.333.627-2.367 1.52-3.1 2.68-.733 1.16-1.1 2.513-1.1 4.06 0 1.547.36 2.867 1.08 3.96.72 1.093 1.587 1.987 2.6 2.68 1.013.693 2.32 1.44 3.92 2.24 1.307.667 2.273 1.193 2.9 1.58.627.387 1.113.8 1.46 1.24.347.44.52.967.52 1.58 0 .827-.273 1.507-.82 2.04-.547.533-1.34.8-2.38.8-1.173 0-2.107-.313-2.8-.94-.693-.627-1.04-1.407-1.04-2.34v-.76a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v1.04c0 1.547.38 2.913 1.14 4.1.76 1.187 1.833 2.107 3.22 2.76 1.387.653 3 .98 4.84.98zm20.8 0c2.72 0 4.9-.713 6.54-2.14 1.64-1.427 2.46-3.353 2.46-5.78 0-1.36-.293-2.52-.88-3.48a8.124 8.124 0 00-2.18-2.38c-.867-.627-2.073-1.367-3.62-2.22l-.84-.48c-1.36-.667-2.373-1.207-3.04-1.62-.667-.413-1.16-.847-1.48-1.3-.32-.453-.48-.987-.48-1.6 0-.88.273-1.567.82-2.06.547-.493 1.3-.74 2.26-.74 1.147 0 2.053.32 2.72.96.667.64 1 1.44 1 2.4v.72c0 .133.047.247.14.34.093.093.207.14.34.14h4.6a.463.463 0 00.34-.14.463.463 0 00.14-.34v-.8c0-1.6-.387-3.013-1.16-4.24-.773-1.227-1.853-2.18-3.24-2.86-1.387-.68-2.973-1.02-4.76-1.02-1.707 0-3.227.313-4.56.94-1.333.627-2.367 1.52-3.1 2.68-.733 1.16-1.1 2.513-1.1 4.06 0 1.547.36 2.867 1.08 3.96.72 1.093 1.587 1.987 2.6 2.68 1.013.693 2.32 1.44 3.92 2.24 1.307.667 2.273 1.193 2.9 1.58.627.387 1.113.8 1.46 1.24.347.44.52.967.52 1.58 0 .827-.273 1.507-.82 2.04-.547.533-1.34.8-2.38.8-1.173 0-2.107-.313-2.8-.94-.693-.627-1.04-1.407-1.04-2.34v-.76a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v1.04c0 1.547.38 2.913 1.14 4.1.76 1.187 1.833 2.107 3.22 2.76 1.387.653 3 .98 4.84.98zm21.2.04c1.84 0 3.467-.373 4.88-1.12 1.413-.747 2.507-1.8 3.28-3.16.773-1.36 1.16-2.947 1.16-4.76v-10.64c0-1.787-.387-3.36-1.16-4.72-.773-1.36-1.867-2.413-3.28-3.16-1.413-.747-3.04-1.12-4.88-1.12-1.84 0-3.46.373-4.86 1.12a8.003 8.003 0 00-3.26 3.16c-.773 1.36-1.16 2.933-1.16 4.72v10.64c0 1.813.387 3.4 1.16 4.76a8.003 8.003 0 003.26 3.16c1.4.747 3.02 1.12 4.86 1.12zm0-4.84c-1.093 0-1.973-.367-2.64-1.1-.667-.733-1-1.687-1-2.86v-11.04c0-1.2.333-2.167 1-2.9.667-.733 1.547-1.1 2.64-1.1 1.12 0 2.013.367 2.68 1.1.667.733 1 1.7 1 2.9v11.04c0 1.173-.333 2.127-1 2.86-.667.733-1.56 1.1-2.68 1.1zm18.24 4.48a.463.463 0 00.34-.14.463.463 0 00.14-.34V108.6c0-.133.067-.2.2-.2h2.52c.08 0 .147.053.2.16l4.04 11.04c.08.267.267.4.56.4h4.88c.293 0 .44-.12.44-.36a.445.445 0 00-.04-.2l-4.56-11.48c-.053-.133-.013-.227.12-.28 1.36-.613 2.413-1.547 3.16-2.8.747-1.253 1.12-2.733 1.12-4.44 0-1.653-.333-3.12-1-4.4a7.203 7.203 0 00-2.84-2.98c-1.227-.707-2.627-1.06-4.2-1.06h-9.76a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.16-15.92h-3.48c-.133 0-.2-.067-.2-.2v-6.84c0-.133.067-.2.2-.2H159c.987 0 1.787.327 2.4.98s.92 1.54.92 2.66c0 1.093-.307 1.967-.92 2.62s-1.413.98-2.4.98zm20.8 16.24c2.72 0 4.9-.713 6.54-2.14 1.64-1.427 2.46-3.353 2.46-5.78 0-1.36-.293-2.52-.88-3.48a8.124 8.124 0 00-2.18-2.38c-.867-.627-2.073-1.367-3.62-2.22l-.84-.48c-1.36-.667-2.373-1.207-3.04-1.62-.667-.413-1.16-.847-1.48-1.3-.32-.453-.48-.987-.48-1.6 0-.88.273-1.567.82-2.06.547-.493 1.3-.74 2.26-.74 1.147 0 2.053.32 2.72.96.667.64 1 1.44 1 2.4v.72c0 .133.047.247.14.34.093.093.207.14.34.14h4.6a.463.463 0 00.34-.14.463.463 0 00.14-.34v-.8c0-1.6-.387-3.013-1.16-4.24-.773-1.227-1.853-2.18-3.24-2.86-1.387-.68-2.973-1.02-4.76-1.02-1.707 0-3.227.313-4.56.94-1.333.627-2.367 1.52-3.1 2.68-.733 1.16-1.1 2.513-1.1 4.06 0 1.547.36 2.867 1.08 3.96.72 1.093 1.587 1.987 2.6 2.68 1.013.693 2.32 1.44 3.92 2.24 1.307.667 2.273 1.193 2.9 1.58.627.387 1.113.8 1.46 1.24.347.44.52.967.52 1.58 0 .827-.273 1.507-.82 2.04-.547.533-1.34.8-2.38.8-1.173 0-2.107-.313-2.8-.94-.693-.627-1.04-1.407-1.04-2.34v-.76a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v1.04c0 1.547.38 2.913 1.14 4.1.76 1.187 1.833 2.107 3.22 2.76 1.387.653 3 .98 4.84.98z"
        />
      </defs>
      <g fill="none" transform="translate(-30 -27)">
        <use fill="#000" filter="url(#logo_svg__a)" xlinkHref="#logo_svg__b" />
        <use fill="#FFF" xlinkHref="#logo_svg__b" />
      </g>
    </svg>
  );
}

export default SvgLogo;
