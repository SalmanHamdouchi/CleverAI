import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex flex-col grow shrink-0 basis-auto md:ml-96 w-fit">
        <NavBar></NavBar>
        {children}
      </div>
    </div>
  );
};

export default Layout;
