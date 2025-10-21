"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import React from "react";
import { userPurchaseRequest } from "@/lib/purchaseApi";
import { useCourse } from "@/hooks/useCourse";
import { Badge } from "@/components/ui/badge";

const page = () => {
  const { courseList } = useCourse();
  console.log(courseList);
  return (
    <section className="p-1 mt-5">
      <h2 className="text-2xl font-cd-bangla text-cd-primary font-bold">
        আমার কোর্স
      </h2>

      <div className=" mt-10 flex items-center justify-between gap-2 flex-wrap ">
        {courseList?.length === 0 && (
          <p className=" text-red-500 font-cd-bangla text-lg">
            আপনার কোন কোর্স ক্রয় নেই
          </p>
        )}

        {courseList?.map((course, i) => (
          <div className=" block w-full md:w-[49.5%]">
            <Card className=" p-1 border-2 border-cd-primary mb-1  w-full bg-white hover:bg-slate-300 duration-200">
              <CardContent className=" px-1 flex flex-col md:flex-row gap-5 items-center justify-start">
                <Image
                  src={course.course.thumb}
                  alt={course.course.title}
                  width={500}
                  height={500}
                  className=" w-full md:w-auto h-full md:h-[100px] rounded-lg"
                />

                <div>
                  <h3 className=" font-cd-poppins text-2xl font-bold text-cd-primary">
                    {course.course.title}
                  </h3>
                  <p className=" mt-1 font-cd-bangla font-medium text-gray-500">
                    লাইভ ক্লাস
                  </p>

                  <div className=" mt-2 flex items-center gap-3">
                    {course.courseCompleted ? (
                      <Badge
                        variant="secondary"
                        className="bg-green-500 text-white"
                      >
                        Completed
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-red-500 text-white "
                      >
                        Progressing
                      </Badge>
                    )}

                    {course?.certificate && (
                      <a
                        className="text-blue-500 underline"
                        href={course.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        আপনার সার্টিফিকেট
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
