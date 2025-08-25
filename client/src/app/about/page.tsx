import Container from "@/components/layout/Container";
import React from "react";

const page = () => {
  return (
    <main className=" py-[120px]">
      <Container>
        <h2 className=" font-cd-bangla text-[36px] font-bold text-black">
          আমাদের সম্পর্কে
        </h2>

        <p className=" font-cd-bangla text-[20px] font-medium text-black">
          কোড দুনিয়া একটি আধুনিক লার্নিং ম্যানেজমেন্ট সিস্টেম (LMS)
          প্ল্যাটফর্ম, যা শেখাকে আরও স্মার্ট, সহজ এবং সবার জন্য সহজলভ্য করে
          তোলে। ব্যবহারবান্ধব ইন্টারফেস এবং শক্তিশালী ফিচারের মাধ্যমে কোড
          দুনিয়া শিক্ষক, শিক্ষা প্রতিষ্ঠান এবং বিভিন্ন সংস্থাকে কোর্স পরিচালনা,
          শিক্ষার্থীর অগ্রগতি ট্র্যাক করা, পরীক্ষা নেওয়া এবং ইন্টারেক্টিভ
          অনলাইন শিক্ষণ অভিজ্ঞতা প্রদান করতে সহায়তা করে। স্কুল, কোচিং সেন্টার
          বা কর্পোরেট ট্রেইনিং—যে কোনো ক্ষেত্রেই, কোড দুনিয়া একটি পূর্ণাঙ্গ
          ডিজিটাল সমাধান যা প্রচলিত শিক্ষাকে রূপান্তরিত করে আনে একটি নিরবচ্ছিন্ন
          অনলাইন প্ল্যাটফর্মে।
        </p>

        <div className=" mt-5">
          <h1 className="text-3xl md:text-4xl font-bold text-cd-primary font-cd-bangla">
            আমাদের মিশন
          </h1>
          <p className="mt-3 text-black font-medium text-[20px] font-cd-bangla max-w-3xl ">
            শিক্ষাকে আরও সহজ, স্মার্ট এবং সবার জন্য সহজলভ্য করে তোলা। আমরা
            শিক্ষার্থী, শিক্ষক এবং প্রতিষ্ঠানগুলোর জন্য এমন একটি প্ল্যাটফর্ম
            তৈরি করি যেখানে প্রযুক্তির মাধ্যমে শেখা ও শেখানো আরও কার্যকর,
            আকর্ষণীয় এবং ফলপ্রসূ হয়।
          </p>
        </div>
        <div className=" mt-5">
          <h1 className="text-3xl md:text-4xl font-bold text-cd-primary font-cd-bangla">
            আমাদের ভিশন
          </h1>
          <p className="mt-3 text-black font-medium text-[20px] font-cd-bangla max-w-3xl ">
            ডিজিটাল শিক্ষায় একটি বিশ্বস্ত ও শীর্ষস্থানীয় প্ল্যাটফর্ম হিসেবে গড়ে
            ওঠা—যা শিক্ষার গুণগত মান উন্নত করবে এবং সারা বিশ্বের শিক্ষার্থী ও
            প্রতিষ্ঠানের জন্য একটি পূর্ণাঙ্গ সমাধান প্রদান করবে।
          </p>
        </div>
      </Container>
    </main>
  );
};

export default page;
