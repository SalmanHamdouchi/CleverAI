import React from "react";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center ">
      <div className="w-14 h-14 relative animate-spin">
        <img src="/logo.png" alt="logo" />
      </div>
      <p className="text-md">Clever is thinking...</p>
    </div>
  );
};

export default Loader;
