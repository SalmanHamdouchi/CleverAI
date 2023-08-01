import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsSideBarOpen,
  setIsSideBarOpen,
} from "../features/ui/sidebar-slice";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  VideoIcon,
} from "lucide-react";

const SideBar = () => {
  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const handleWindowResize = () => {
    if (window.innerWidth > 768 && isSideBarOpen) {
      dispatch(setIsSideBarOpen(false));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isSideBarOpen]);

  const links = [
    {
      to: "/dashboard",
      icon: LayoutDashboard,
      color: "#0284c7",
      label: "Dashboard",
    },
    {
      to: "/conversation",
      icon: MessageSquare,
      color: "#f43f5e",
      label: "Conversation",
    },
    {
      to: "/code-generation",
      icon: Code,
      color: "#e8cc0d",
      label: "Code generation",
    },
    {
      to: "/image-generation",
      icon: ImageIcon,
      color: "#14b8a6",
      label: "Image generation",
    },
    {
      to: "/video-generation",
      icon: VideoIcon,
      color: "#f97316",
      label: "Video generation",
    },
  ];
  return (
    <>
      {isSideBarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-50"
          onClick={() => dispatch(setIsSideBarOpen(!isSideBarOpen))}
        />
      )}
      <div
        className={` ${
          !isSideBarOpen ? "xsm:-translate-x-96 xsm:hidden" : ""
        } h-[100vh] md:flex md:w-96 md:flex-col fixed md:inset-y-0 z-[100] bg-gray-900 md:translate-x-0`}>
        <div className="space-y-4 py4 flex flex-col h-full bg-[#111827] text-white z-[200]">
          <div className="px-3 py-2 flex-1">
            <div className="flex items-center justify-center mt-4 mb-8">
              <img className="w-[60px] mr-1" src="/logo.png" alt="logo"></img>
              <h1 className="text-4xl font-semibold ">Clever</h1>
            </div>

            <div className="pl-4 pr-4">
              {links.map((link, index) => (
                <Link key={index} to={link.to}>
                  <div
                    className={`${
                      pathname === link.to ? "bg-[#2d3340d2]" : ""
                    } pt-4 pb-4 pl-2 pr-2 flex items-center rounded-lg hover:bg-[#2d3340] cursor-pointer transition-all duration-300`}>
                    <link.icon className="mr-3" size="25" color={link.color} />
                    <h3 className="text-white text-[1.15rem] font-light">
                      {link.label}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
