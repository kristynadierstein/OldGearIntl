import React from "react";

export const ArrowDown = ({ className, onClick }) => {
  return (
    <>
      <svg
        width="8"
        height="23"
        viewBox="0 0 8 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className ? className : ''}
        onClick={onClick}
      >
        <path
          d="M3.64645 22.3656C3.84171 22.5609 4.15829 22.5609 4.35355 22.3656L7.53553 19.1837C7.7308 18.9884 7.7308 18.6718 7.53553 18.4765C7.34027 18.2813 7.02369 18.2813 6.82843 18.4765L4 21.305L1.17157 18.4765C0.976311 18.2813 0.659728 18.2813 0.464466 18.4765C0.269204 18.6718 0.269204 18.9884 0.464466 19.1837L3.64645 22.3656ZM3.5 0.988281L3.5 22.0121H4.5L4.5 0.988281L3.5 0.988281Z"
          fill="rgba(11,31,48,1)"
        />
      </svg>
    </>
  );
};
