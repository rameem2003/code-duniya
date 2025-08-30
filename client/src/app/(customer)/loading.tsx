import React from "react";

const loading = () => {
  return (
    <div className=" overflow-hidden flex items-center justify-center h-screen bg-white  relative z-[10000000000000000]">
      <div className="loader"></div>
    </div>
  );
};

export default loading;
