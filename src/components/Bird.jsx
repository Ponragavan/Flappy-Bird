import React from "react";

const Bird = ({ top,left }) => {
  return (
      <div
        className="absolute bg-bird w-10 h-10 rounded-2xl bg-no-repeat"
        style={{ top: `${top}px`, left: `${left}px`}}
      ></div>
  );
};

export default Bird;
