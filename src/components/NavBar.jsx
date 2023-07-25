import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
const NavBar = () => {
  let [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center p-4">
      <div
        className="inline-flex flex-col justify-center items-center cursor-pointer p-1 "
        onClick={handleBurgerClick}>
        <div
          className={`h-[2px] w-[20px] transition-all	delay-200 bg-black origin-top-left mb-[5px] ${
            isOpen ? "rotate-45" : "none"
          }`}></div>
        <div
          className={`h-[2px] w-[20px] transition-all	delay-200 bg-black ${
            isOpen && "translateX(-16px) opacity-0 "
          }`}></div>
        <div
          className={`h-[2px] w-[20px] transition-all	delay-200 bg-black  origin-top-left mt-[5px] ${
            isOpen && "-translate-x-[1px] -rotate-45"
          }`}></div>
      </div>
      <div className="flex w-full justify-end">
        <UserCard />
      </div>
    </div>
  );
};

export default NavBar;
