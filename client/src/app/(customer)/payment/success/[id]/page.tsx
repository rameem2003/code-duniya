import Container from "@/components/layout/Container";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <main className=" py-[120px]">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 bg-white rounded-2xl shadow-lg max-w-lg mx-auto text-center">
          <FaCheckCircle className="text-green-500 text-6xl mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            ক্রয় সফল হয়েছে!
          </h1>
          <p className="text-gray-500 mb-6">
            আপনি সফলভাবে কোর্সটি ক্রয় করেছেন।
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg">
            খুব শীঘ্রই আমাদের মেন্টর আপনার সাথে যোগাযোগ করবে
          </button>
        </div>
      </Container>
    </main>
  );
};

export default page;
