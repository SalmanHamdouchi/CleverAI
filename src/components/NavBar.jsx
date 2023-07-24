import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center">
      <div className="hamburger w-8 h-8 flex justify-around flex-col">
        <div
          className={`burger w-8 h-1/4 rounded-lg bg-black transform ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
        <div
          className={`burger w-8 h-1/4 rounded-lg bg-black transform ${
            isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        />
        <div
          className={`burger w-8 h-1/4 rounded-lg bg-black transform ${
            isOpen ? "-rotate-45" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};

export default NavBar;
