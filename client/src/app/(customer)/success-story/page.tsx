import Container from "@/components/layout/Container";
import SuccessStoryComponent from "@/components/shared/SuccessStoryComponent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "আমাদের সফলতার গল্পসমুহ || কোড দুনিয়া",
  description: "...",
};

const page = () => {
  return (
    <main className="py-[120px]">
      <Container>
        <div className=" mb-10">
          <h1 className="text-5xl font-bold font-cd-bangla  text-cd-primary">
            আমাদের সাফল্যের গল্পসমুহ
          </h1>
          {/* descriptions */}
          <p className="mt-4 font-medium font-cd-bangla w-full lg:w-[700px]  text-lg text-gray-600">
            বাজারে আমাদের শিক্ষার্থীদের উজ্জ্বল উপস্থিতি আমাদের অনুপ্রাণিত করে
            এবং আরও ভালো ভবিষ্যৎ গড়ার লক্ষ্যে আমাদের দৃষ্টিভঙ্গির সাথে আরও বেশি
            লোককে সম্পৃক্ত করতে অনুপ্রাণিত করে। গত ১৬ বছরে, লক্ষ লক্ষ মানুষ
            আমাদের কাছ থেকে শিক্ষা গ্রহণ করেছে এবং তাদের দক্ষতা বৃদ্ধি করেছে।
            তাদের নিজস্ব জীবনে অর্থনৈতিক স্থিতিশীলতা এনে, অনেক শিক্ষার্থী
            অন্যদের জন্য কর্মসংস্থানের সুযোগ তৈরি করেছে। আমাদের আগ্রহী
            শিক্ষার্থীদের এই চমৎকার যাত্রার জন্য আমরা সর্বদা কৃতজ্ঞ।
          </p>
        </div>
        <SuccessStoryComponent videoLimit={0} />
      </Container>
    </main>
  );
};

export default page;
