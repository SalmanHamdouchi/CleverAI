import React from "react";
import { useState } from "react";

import {
  selectIsSideBarOpen,
  setIsSideBarOpen,
} from "../features/ui/sidebar-slice";
import { useSelector, useDispatch } from "react-redux";

import UserCard from "./UserCard";
import UserPhoto from "./UserPhoto";

const NavBar = () => {
  let [isUserCardVisible, setIsUserCardVisible] = useState(false);
  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    dispatch(setIsSideBarOpen(!isSideBarOpen));
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
            isSideBarOpen ? "rotate-45" : "none"
          }`}></div>
        <div
          className={`h-[2px] w-[20px] transition-all	delay-200 bg-black ${
            isSideBarOpen && "translateX(-16px) opacity-0 "
          }`}></div>
        <div
          className={`h-[2px] w-[20px] transition-all	delay-200 bg-black  origin-top-left mt-[5px] ${
            isSideBarOpen && "-translate-x-[1px] -rotate-45"
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
