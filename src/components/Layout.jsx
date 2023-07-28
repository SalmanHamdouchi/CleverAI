import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Layout = ({ ChildComponents }) => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex flex-col grow shrink-0 basis-auto">
        <NavBar></NavBar>
        {ChildComponents}
      </div>
    </div>
  );
};

export default Layout;
