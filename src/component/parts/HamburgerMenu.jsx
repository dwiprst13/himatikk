import React from "react";

function HamburgerMenu({ isOpen, handleClick }) {
  return (
    <button className="text-[1.2rem] font-bold text-white" onClick={handleClick}>
      {isOpen ? (
        <i className="fa fa-times" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-bars" aria-hidden="true"></i>
      )}
    </button>
  );
}

export default HamburgerMenu;
