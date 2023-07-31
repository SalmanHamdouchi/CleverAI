import React from "react";

const Empty = ({ label }) => {
  return (
    <div className="h-full p-4 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <img src="/empty.png" alt="Empty"></img>
      </div>
      <div className="text-lg text-muted-foreground text-center">{label}</div>
    </div>
  );
};

export default Empty;
