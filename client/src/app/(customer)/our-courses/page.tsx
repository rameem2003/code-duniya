import React from "react";
import Container from "@/components/layout/Container";
import CourseCategory from "@/components/layout/CourseCategory";
import CourseComponent from "@/components/shared/CourseComponent";
import Advertisement from "@/components/shared/Advertisement";
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
        <Advertisement />
        <h1 className="text-5xl font-bold font-cd-bangla  text-cd-primary">
          আমাদের কোর্সসমুহ
        </h1>
        {/* descriptions */}
        <p className="mt-4 font-medium font-cd-bangla w-full lg:w-[700px]  text-lg text-gray-600">
          আমরা বিশ্ববাজারে চাহিদা অনুযায়ী সকল ট্রেন্ডি কোর্স অফার করি। এছাড়াও,
          আপনি ল্যাব সুবিধা পাচ্ছেন যেখানে প্রয়োজনীয় কনফিগারেশন সহ উচ্চমানের
          কম্পিউটারগুলি আপনার শেখার সুবিধার্থে প্রস্তুত। ক্লাসের পরে, আপনি আপনার
          দক্ষতা বৃদ্ধির জন্য আমাদের ল্যাবে বিষয়টি অনুশীলন করতে পারেন।{" "}
          <span className=" font-bold">কোড দুনিয়া</span>
          -এর মাধ্যমে শেখার পুরো যাত্রা জুড়ে আপনাকে আত্মবিশ্বাসী করে তোলার জন্য
          কোর্সগুলি ডিজাইন করা হয়েছে।
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
