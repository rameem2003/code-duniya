import React from "react";
import CardComponent from "./CardComponent";
import { categoryType } from "@/types/type";

const CourseComponent = ({ data }: { data: categoryType }) => {
  return (
    <section className=" mb-10">
      <h2 className=" font-cd-bangla text-2xl md:text-3xl xl:text-5xl mb-5 font-bold text-cd-primary">
        {data.name}
      </h2>

      <div className=" mt-4 flex items-center justify-between gap-0 flex-wrap ">
        {data.courses.length === 0 && (
          <p className=" text-red-500 font-cd-poppins text-lg">
            No courses available in this category
          </p>
        )}

        {data.courses.map((course) => (
          <CardComponent key={course._id} data={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseComponent;
