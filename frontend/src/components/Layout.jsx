import React, { useState } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  let [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="flex">
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}></SideBar>
      <div className="flex flex-col grow shrink-0 basis-auto md:ml-96">
        <NavBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}></NavBar>
        {children}
      </div>
    </div>
  );
};

export default Layout;
