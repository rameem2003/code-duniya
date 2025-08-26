import React from "react";
import Container from "../Container";
import CardComponent from "@/components/shared/CardComponent";
import Link from "next/link";
import { allCourses } from "@/lib/courseApi";
import { courseType } from "@/types/type";

const CourseList = async () => {
  let { data } = await allCourses(3);
  let courses: courseType[] = data;

  return (
    <section className=" pt-[170px]">
      <Container>
        <h2 className=" font-cd-bangla text-[36px] font-bold text-black text-center">
          আমাদের কোর্স সমুহ
        </h2>
        <p className=" font-cd-bangla text-[20px] font-medium text-black text-center">
          আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত এবং সমৃদ্ধ রিসোর্স
          দ্বারা পরিপূর্ণ
        </p>

        <div className=" mt-16 flex items-center justify-between gap-0 flex-wrap ">
          {courses.map((course, i) => (
            <CardComponent key={i} data={course} />
          ))}
        </div>

        <div className=" text-center">
          <Link
            href="/our-courses"
            className=" mt-10 inline-block mx-auto py-1 px-14 rounded-[15px] bg-[#778DA9] text-center font-cd-bangla text-[24px] font-bold text-white"
          >
            আরও কোর্স দেখুন
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CourseList;
