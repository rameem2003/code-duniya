import Container from "@/components/layout/Container";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <main className=" py-[120px]">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 bg-white rounded-2xl shadow-lg max-w-lg mx-auto text-center">
          <FaCheckCircle className="text-orange-500 text-6xl mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            ক্রয় বাতিল হয়েছে!
          </h1>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg">
            ধন্যবাদ
          </button>
        </div>
      </Container>
    </main>
  );
};

export default page;
