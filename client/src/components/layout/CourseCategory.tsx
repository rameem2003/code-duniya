"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "./Container";
import Link from "next/link";
import { categoryType } from "@/types/type";
import { allCategories } from "@/lib/courseApi";

const CourseCategory = () => {
  const [category, setCategory] = useState<categoryType[]>([]);

  const fetchCategory = async () => {
    let res = await allCategories();
    console.log(res);
    setCategory(res.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className=" w-full">
      <Container>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className=" mx-0 lg:mx-6">
            {category.map((cat, i) => (
              <CarouselItem
                key={i}
                className=" p-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4"
              >
                <Link
                  href={`/department/${cat._id}`}
                  className=" block py-[17px] px-4 lg:px-[60px] bg-[#1B263B] rounded-[25px] text-center"
                >
                  <img src="/icon.png" alt="" className=" mx-auto" />

                  <h4 className=" font-cd-bangla text-base font-semibold text-white mt-2">
                    {cat.name}
                  </h4>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:flex" />
          <CarouselNext className="hidden xl:flex" />
        </Carousel>
      </Container>
    </div>
  );
};

export default CourseCategory;
