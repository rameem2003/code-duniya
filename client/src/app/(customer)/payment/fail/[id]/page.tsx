import Container from "@/components/layout/Container";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <main className=" py-[120px]">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 bg-white rounded-2xl shadow-lg max-w-lg mx-auto text-center">
          <FaCheckCircle className="text-red-500 text-6xl mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            ক্রয় অসফল হয়েছে!
          </h1>
          <p className="text-gray-500 mb-6">
            সাময়িক ত্রুটির কারণে আপনি কোর্সটি ক্রয় করা যায়নি।
          </p>

          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg">
            আবার চেষ্টা করুন
          </button>
        </div>
      </Container>
    </main>
  );
};

export default page;
