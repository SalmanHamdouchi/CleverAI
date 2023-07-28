import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="h-[100vh] md:flex md:w-72 md:flex-col md:sticky md:inset-y-0 z-[100] bg-gray-900 sm:hidden">
      <div className="space-y-4 py4 flex flex-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
          <div className="flex items-center justify-center mt-4 mb-8">
            <img className="w-[40px] mr-1" src="/logo.png" alt="logo"></img>
            <h1 className="text-2xl font-semibold ">Clever</h1>
          </div>

          <div className="pl-4 pr-4">
            <Link to="/dashboard">
              <div className="pt-4 pb-4 pl-2 pr-2 flex items-center rounded-lg hover:bg-[#2d3340] cursor-pointer transition-all duration-300">
                <FontAwesomeIcon
                  icon="fa-solid fa-layer-group "
                  size="xl"
                  className="mr-3"
                  color="#0284c7"
                />
                <h3 className="text-white text-[1.15rem] font-light">
                  Dashboard
                </h3>
              </div>
            </Link>
            <Link to="/conversation">
              <div className="pt-4 pb-4 pl-2 pr-2 flex items-center rounded-lg hover:bg-[#2d3340] cursor-pointer transition-all duration-300">
                <FontAwesomeIcon
                  icon="fa-solid fa-message"
                  size="xl"
                  className="mr-3"
                  color="#f43f5e"
                />
                <h3 className="text-white text-[1.15rem] font-light">
                  Conversation
                </h3>
              </div>
            </Link>
            <Link to="/image-generation">
              <div className="pt-4 pb-4 pl-2 pr-2 flex items-center rounded-lg hover:bg-[#2d3340] cursor-pointer transition-all duration-300">
                <FontAwesomeIcon
                  icon="fa-solid fa-image"
                  size="xl"
                  className="mr-3"
                  color="#14b8a6"
                />
                <h3 className="text-white text-[1.15rem] font-light">
                  Image generation
                </h3>
              </div>
            </Link>
            <Link to="video-generation">
              <div className="pt-4 pb-4 pl-2 pr-2 flex items-center rounded-lg hover:bg-[#2d3340] cursor-pointer transition-all duration-300">
                <FontAwesomeIcon
                  icon="fa-solid fa-video"
                  size="xl"
                  className="mr-3"
                  color="#f97316"
                />
                <h3 className="text-white text-[1.15rem] font-light rounded-lg hover:bg-[#2d3340] cursor-pointer transition-all duration-300">
                  Video generation
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
