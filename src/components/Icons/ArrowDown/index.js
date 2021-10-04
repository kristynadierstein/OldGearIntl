import React from "react";

export const ArrowDown = ({ className, onClick }) => {
  return (
    <>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect x="17.3906" width="26.087" height="36.5327" fill="#8C120F" />
        <path
          d="M30 60L4.01924 30.2928L55.9808 30.2928L30 60Z"
          fill="#8C120F"
        />
      </svg>
    </>
  );
};
