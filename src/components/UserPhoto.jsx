import React from "react";

const UserPhoto = ({ handleUserPhotoClick }) => {
  return (
    <img
      onClick={handleUserPhotoClick}
      className="w-12 h-12 rounded-full "
      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      alt="user"
    />
  );
};

export default UserPhoto;
