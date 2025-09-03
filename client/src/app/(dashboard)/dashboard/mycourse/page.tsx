"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const { user } = useAuth();
  return (
    <section className="p-1 mt-5">
      <h2 className="text-2xl font-cd-bangla text-cd-primary font-bold">
        আমার কোর্স
      </h2>

      <div className=" mt-10 flex items-center justify-between gap-2 flex-wrap ">
        {user?.courses.length === 0 && (
          <p className=" text-red-500 font-cd-bangla text-lg">
            আপনার কোন কোর্স ক্রয় নেই
          </p>
        )}

        {user?.courses.map((course, i) => (
          <Link
            className=" block w-full md:w-[49.5%]"
            href={`/dashboard/mycourse/${course._id}`}
            key={i}
          >
            <Card className=" p-1 border-2 border-cd-primary mb-1  w-full bg-white hover:bg-slate-300 duration-200">
              <CardContent className=" px-1 flex flex-col md:flex-row gap-5 items-center justify-start">
                <Image
                  src={course.thumb}
                  alt={course.title}
                  width={500}
                  height={500}
                  className=" w-full md:w-auto h-full md:h-[100px] rounded-lg"
                />

                <div>
                  <h3 className=" font-cd-poppins text-2xl font-bold text-cd-primary">
                    {course.title}
                  </h3>
                  <p className=" mt-1 font-cd-bangla font-medium text-gray-500">
                    লাইভ ক্লাস
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
