import React from "react";
import Container from "@/components/layout/Container";
import CourseCategory from "@/components/layout/CourseCategory";
import CourseComponent from "@/components/shared/CourseComponent";
import { allCategories, allCourses } from "@/lib/courseApi";
import { Metadata } from "next";
import { categoryType } from "@/types/type";

export const metadata: Metadata = {
  title: "আমাদের কোর্সসমুহ || কোড দুনিয়া",
  description: "...",
};

const page = async () => {
  let { data } = await allCategories();
  let categories: categoryType[] = data;

  return (
    <main className="py-[100px]">
      <Container>
        <h1 className="text-5xl font-bold font-cd-poppins  text-cd-primary">
          Our Courses
        </h1>
        {/* descriptions */}
        <p className="mt-4 font-semibold w-full lg:w-[700px]  text-lg text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint aperiam
          dolores repudiandae quaerat vel excepturi totam laudantium,
          perspiciatis illo veritatis expedita, natus omnis tempora ut
          accusantium est, voluptatibus modi eum distinctio fugit minus. Dolore
          nihil itaque excepturi possimus! Ab delectus deleniti facilis omnis
          assumenda excepturi nostrum esse libero voluptas itaque!
        </p>

        <section className=" mt-10">
          <CourseCategory />
        </section>

        <section className=" mt-20">
          <div className=" mb-20">
            <h2 className=" font-cd-bangla text-4xl font-bold text-cd-primary text-center">
              ভর্তি চলছে
            </h2>

            <p className=" font-cd-bangla text-lg text-black text-center mt-4 w-full lg:w-[700px] mx-auto">
              স্থানীয় এবং আন্তর্জাতিক বাজারে চাহিদাপূর্ণ দক্ষতার উপর ভিত্তি করে
              আমরা আমাদের কোর্স তালিকা তৈরি করেছি। তালিকা থেকে, আপনি আপনার পছন্দ
              অনুসারে যেকোনো অনলাইন বা অফলাইন কোর্স বেছে নিতে পারেন।
            </p>
          </div>

          {categories.map((category, i) => (
            <CourseComponent data={category} key={i} />
          ))}
        </section>
      </Container>
    </main>
  );
};

export default page;
