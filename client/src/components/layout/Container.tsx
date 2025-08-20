import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className=" max-w-[1200px] mx-auto px-2 lg:px-0">{children}</div>;
};

export default Container;
