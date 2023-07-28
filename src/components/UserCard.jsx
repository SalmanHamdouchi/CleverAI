import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserCard = () => {
  return (
    <div className="bg-white w-72 p-6 rounded-lg shadow-2xl shadow-gray-300/80 mt-[70px] mr-[32px] absolute top-0 right-0">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="User Profile"
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">John Doe</span>
          <span className="text-gray-600 text-sm">john.doe@example.com</span>
        </div>
      </div>
      <div className="flex flex-col">
        <button className="flex items-center text-sm text-gray-600 rounded-lg py-2 px-4  hover:bg-gray-100  transition-all duration-300">
          <FontAwesomeIcon className="mr-2" icon="fa-solid fa-gear" size="lg" />
          Manage Profile
        </button>
        <button className="flex items-center text-sm text-gray-600 rounded-lg py-2 px-4  hover:bg-gray-100  transition-all duration-300">
          <FontAwesomeIcon
            className="mr-2"
            icon="fa-solid fa-right-from-bracket"
            size="lg"
          />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserCard;
