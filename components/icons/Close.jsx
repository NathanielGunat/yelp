import React from "react";

export default function Close({ ...props }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 1L1 10"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 1L10 10"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
