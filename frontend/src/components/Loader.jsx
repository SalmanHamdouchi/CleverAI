import React from "react";

const Loader = ({ information }) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center ">
      <div className="w-14 h-14 relative animate-spin">
        <img src="/logo.png" alt="logo" />
      </div>
      <p className="text-lg">Clever is thinking...</p>
      {information && <p className="text-sm">{information}</p>}
    </div>
  );
};

export default Loader;
