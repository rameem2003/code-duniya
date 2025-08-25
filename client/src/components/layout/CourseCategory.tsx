"use client";
import React from "react";
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

const CourseCategory = () => {
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
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                key={index}
                className=" p-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4"
              >
                <Link
                  href={"/department/graphics"}
                  className=" block py-[17px] px-4 lg:px-[60px] bg-[#1B263B] rounded-[25px] text-center"
                >
                  <img src="/icon.png" alt="" className=" mx-auto" />

                  <h4 className=" font-cd-bangla text-[24px] font-semibold text-white mt-2">
                    গ্রাফিকস
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
