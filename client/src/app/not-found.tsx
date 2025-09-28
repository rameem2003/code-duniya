"use client";
import React from "react";

const NotFound = () => {
  return (
    <main className="grid h-screen place-items-center bg-cd-primary px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-cd-bangla font-semibold text-white">
          দুঃখিত
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight font-cd-bangla text-balance text-white sm:text-7xl">
          পেজ পাওয়া যায়নি
        </h1>
        <p className="mt-6 text-lg font-medium font-cd-bangla text-pretty text-gray-400 sm:text-xl/8">
          আপনার রিকএস্টকৃত পেজটি পাওয়া যায়নি অথবা আপনার URL সঠিক কিনা নিশ্চিত
          করুন।
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md font-cd-bangla bg-white px-3.5 py-2.5 text-base font-semibold text-cd-primary shadow-xs  "
          >
            হোমে ফিরে যান
          </a>
          <a
            href="/contact"
            className="text-base font-cd-bangla font-semibold text-white"
          >
            সহায়তার জন্য যোগাযোগ করুন <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
