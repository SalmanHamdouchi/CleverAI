import React from "react";

const Avatar = ({ imageURL }) => {
  return <img className="w-12 h-12 rounded-full " src={imageURL} alt="user" />;
};

export default Avatar;
