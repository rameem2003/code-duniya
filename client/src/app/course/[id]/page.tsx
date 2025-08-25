import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire } from "react-icons/fa";
import SuccessStoryComponent from "./SuccessStoryComponent";
import PriceComponent from "./PriceComponent";

const page = () => {
  const services = [
    {
      title: "লাইভ ক্লাস",
      description:
        "আপনি কি বিদেশে থাকেন নাকি দূরবর্তী শিক্ষা পদ্ধতি পছন্দ করেন? আজকের বিশ্বের প্রযুক্তিগত অগ্রগতির সাথে তাল মিলিয়ে চলার জন্য আমরা সমস্ত অফলাইন সুবিধা সহ অনলাইন ব্যাচ চালু করেছি। এখন আপনি যেকোনো সময় যেকোনো জায়গা থেকে যেকোনো কোর্সে ভর্তি হতে পারেন।",
    },

    {
      title: "প্রজেক্ট বেসড লার্নিং",
      description:
        "আমাদের কোর্সগুলি প্রকল্প-ভিত্তিক শেখার উপর ভিত্তি করে তৈরি করা হয়েছে, যা আপনাকে বাস্তব-বিশ্বের পরিস্থিতিতে আপনার দক্ষতা প্রয়োগ করতে দেয়। এই পদ্ধতিটি আপনাকে জটিল সমস্যা সমাধান করতে এবং শিল্পের চাহিদা অনুযায়ী আপনার দক্ষতা বিকাশ করতে সাহায্য করে।",
    },

    {
      title: "ক্যারিয়ার গাইডলাইন",
      description:
        "আমাদের ক্যারিয়ার গাইডলাইন পরিষেবাগুলি আপনাকে আপনার পছন্দের ক্ষেত্রে একটি সফল ক্যারিয়ার গড়ে তুলতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। আমাদের অভিজ্ঞ পরামর্শদাতারা রেজুমে লেখন, সাক্ষাৎকার প্রস্তুতি এবং চাকরির বাজারে নেভিগেট করার মতো বিষয়গুলিতে ব্যক্তিগতকৃত সহায়তা প্রদান করে।",
    },
    {
      title: "অনুশীলন ল্যাব সহায়তা",
      description:
        "আমাদের অনুশীলন ল্যাব সহায়তা পরিষেবাগুলি আপনাকে আপনার কোর্সের বিষয়বস্তু অনুশীলন এবং প্রয়োগ করতে একটি নিরাপদ পরিবেশ প্রদান করে। আমাদের অভিজ্ঞ পরামর্শদাতারা আপনার প্রশ্নের উত্তর দিতে এবং আপনার শেখার যাত্রায় আপনাকে গাইড করতে সর্বদা প্রস্তুত।",
    },

    {
      title: "জব প্লেসমেন্ট সহায়তা",
      description:
        "আমাদের জব প্লেসমেন্ট সহায়তা পরিষেবাগুলি আপনাকে আপনার পছন্দের ক্ষেত্রে একটি সফল ক্যারিয়ার গড়ে তুলতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। আমাদের অভিজ্ঞ পরামর্শদাতারা রেজুমে লেখন, সাক্ষাৎকার প্রস্তুতি এবং চাকরির বাজারে নেভিগেট করার মতো বিষয়গুলিতে ব্যক্তিগতকৃত সহায়তা প্রদান করে।",
    },

    {
      title: "লাইফটাইম এক্সেস",
      description:
        "একবার আপনি আমাদের কোর্সে ভর্তি হলে, আপনি আজীবন অ্যাক্সেস পাবেন। এর মানে হল যে আপনি যেকোনো সময় আপনার সুবিধামত আপনার শেখার যাত্রা চালিয়ে যেতে পারেন।",
    },
  ];

  return (
    <main className=" py-[120px]  ">
      <Container>
        <section className=" flex items-start justify-center gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 xl:h-7/12">
            <div className="px-4 py-1.5 bg-red-700/20  text-red-700 rounded-full text-[0.9rem] font-[500] inline-flex items-center gap-1">
              <FaFire className="text-[1rem] text-red-700" />
              লাইভ কোর্স
            </div>
            <div className=" mt-2">
              <h2 className=" font-cd-poppins text-4xl font-bold text-cd-primary">
                UX/UI Design
              </h2>

              <p className=" mt-5 text-gray-600 font-medium text-base leading-7 font-cd-bangla">
                প্রযুক্তি জগতে UX ডিজাইন একটি শীর্ষ চাহিদা সম্পন্ন চাকরি হয়ে
                উঠেছে। ব্যবহারকারী-বান্ধব ওয়েবসাইট নিশ্চিত করার ক্ষেত্রে এটি
                গুরুত্বপূর্ণ ভূমিকা পালন করে বলে কোম্পানিগুলি দক্ষ ডিজাইনার
                নিয়োগের উপর অগ্রাধিকার দিচ্ছে। একটি গবেষণায় দেখা গেছে, জটিল
                ইন্টারফেস ডিজাইনের কারণে প্রায় ৭৭% অনলাইন ব্যবসা
                প্রতিযোগিতামূলক বিশ্ব বাজারে টিকে থাকতে ব্যর্থ হয়। UX
                ডিজাইনাররা ওয়েবসাইটের কার্যকারিতা নিশ্চিত করে, যা
                ব্যবহারকারীদের কাছে এটি সহজেই অ্যাক্সেসযোগ্য করে তোলে। আপনি যদি
                গ্রাফিকাল উপাদানগুলির সাথে কাজ করতে পছন্দ করেন, তাহলে এই কোর্সটি
                আপনার জন্য।
              </p>

              <Link
                href=""
                className=" inline-block font-cd-bangla font-bold text-[20px] text-white py-2 px-4 rounded-[15px] bg-cd-primary hover:bg-[#020911] mt-5"
              >
                কোর্স এনরোল করুন আজই
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:h-5/12">
            <Image
              src="/banner.jpg"
              alt="course"
              width={500}
              height={500}
              className=" w-full rounded-md"
            />
          </div>
        </section>

        <section className=" mt-20">
          <div className=" flex items-start justify-start gap-6 flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 xl:w-7/12 ">
              <div className="mb-8">
                <h2 className=" font-cd-bangla text-2xl md:text-3xl xl:text-5xl font-bold text-cd-primary">
                  কোর্সের সারসংক্ষেপ
                </h2>

                <p className=" mt-5 text-gray-600 font-medium text-base leading-7">
                  UX ডিজাইনাররা সমস্যা খুঁজে বের করা থেকে শুরু করে সমাধান খুঁজে
                  বের করা পর্যন্ত অনেক কিছু করে, ওয়েবসাইটের সামগ্রিক চেহারার
                  উপর তাদের বিরাট প্রভাব পড়ে। ফলস্বরূপ, বেশিরভাগ কোম্পানি
                  ব্যবহারকারী-বান্ধব ওয়েবসাইট তৈরির জন্য দক্ষ ডিজাইনারদের
                  খুঁজছে। কোর্সটি স্কেচিংয়ের মূল বিষয়গুলি দিয়ে শুরু হয়,
                  যেখানে আপনি ফ্লোচার্ট ব্যবহার করে অ্যাপ বা ওয়েবসাইট ডিজাইন
                  করার প্রক্রিয়া শিখবেন। আপনি অ্যাডোবিএক্সডি এবং ফিগমা
                  সফ্টওয়্যার ব্যবহার করতেও শিখবেন। সমস্ত প্রকল্প সম্পন্ন করার
                  পরে, আপনি চাকরির বাজারে আলাদাভাবে দাঁড়ানোর জন্য ব্যবহারিক
                  দক্ষতা প্রদর্শন করে আপনার নিজস্ব পোর্টফোলিও তৈরি করতে পারেন।
                </p>
              </div>

              <div className="mb-8">
                <h2 className=" font-cd-bangla text-2xl md:text-3xl xl:text-5xl font-bold text-cd-primary">
                  আমাদের এক্সক্লুসিভ পরিষেবা
                </h2>

                <div className=" flex items-center justify-between flex-wrap mt-8">
                  {services.map((service, index) => (
                    <Card
                      key={index}
                      className="p-3 bg-lime-200 w-full md:w-[48%] mb-4"
                    >
                      <CardHeader>
                        <h2 className=" font-cd-bangla text-2xl font-bold text-cd-primary">
                          {service.title}
                        </h2>
                      </CardHeader>

                      <CardContent>
                        <p className=" text-gray-600 font-medium text-base leading-7">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 relative">
              <SuccessStoryComponent />
              <PriceComponent />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default page;
