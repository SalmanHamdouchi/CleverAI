import React from "react";

const SideBar = () => {
  return (
    <div className="h-full relative">
      <div className="h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[100] bg-gray-900 hidden md:block">
        <div className="text-white">Hello Sidebar</div>
      </div>
    </div>
  );
};

export default SideBar;
