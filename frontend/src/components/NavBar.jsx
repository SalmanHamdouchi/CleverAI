import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import UserPhoto from "./UserPhoto";

const NavBar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [isUserCardVisible, setIsUserCardVisible] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
    setIsSideBarOpen(!isSideBarOpen);
  };
  const handleUserPhotoClick = () => {
    setIsUserCardVisible(!isUserCardVisible);
  };
  return (
    <div className="flex items-center p-4 justify-between w-[100%]">
      <div
        className="sm:inline-flex md:hidden flex-col justify-center items-center cursor-pointer p-1 "
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
        <UserPhoto handleUserPhotoClick={handleUserPhotoClick} />
        {isUserCardVisible && <UserCard />}
      </div>
    </div>
  );
};

export default NavBar;
//export isOpen
