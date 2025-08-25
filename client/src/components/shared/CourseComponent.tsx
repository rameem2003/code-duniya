"use client";
import React from "react";
import CardComponent from "./CardComponent";

const CourseComponent = () => {
  return (
    <section className=" mb-10">
      <h2 className=" font-cd-bangla text-4xl mb-5 font-bold text-cd-primary">
        Web And Software Development
      </h2>

      <div className=" mt-4 flex items-center justify-between gap-0 flex-wrap ">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </section>
  );
};

export default CourseComponent;
