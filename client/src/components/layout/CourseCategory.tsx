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

const CourseCategory = () => {
  return (
    <div className=" absolute bottom-[-200px] left-0 right-0">
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
            <CarouselItem className=" p-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <div className=" py-[17px] px-4 lg:px-[60px] bg-[#1B263B] rounded-[25px] text-center">
                <img src="/icon.png" alt="" className=" mx-auto" />

                <h4 className=" font-cd-bangla text-[24px] font-semibold text-white mt-2">
                  গ্রাফিকস
                </h4>
              </div>
            </CarouselItem>
            <CarouselItem className=" p-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <div className=" py-[17px] px-4 lg:px-[60px] bg-[#1B263B] rounded-[25px] text-center">
                <img src="/icon.png" alt="" className=" mx-auto" />

                <h4 className=" font-cd-bangla text-[24px] font-semibold text-white mt-2">
                  গ্রাফিকস
                </h4>
              </div>
            </CarouselItem>
            <CarouselItem className=" p-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <div className=" py-[17px] px-4 lg:px-[60px] bg-[#1B263B] rounded-[25px] text-center">
                <img src="/icon.png" alt="" className=" mx-auto" />

                <h4 className=" font-cd-bangla text-[24px] font-semibold text-white mt-2">
                  গ্রাফিকস
                </h4>
              </div>
            </CarouselItem>
            <CarouselItem className=" p-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <div className=" py-[17px] px-4 lg:px-[60px] bg-[#1B263B] rounded-[25px] text-center">
                <img src="/icon.png" alt="" className=" mx-auto" />

                <h4 className=" font-cd-bangla text-[24px] font-semibold text-white mt-2">
                  গ্রাফিকস
                </h4>
              </div>
            </CarouselItem>
            <CarouselItem className=" p-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <div className=" py-[17px] px-4 lg:px-[60px] bg-[#1B263B] rounded-[25px] text-center">
                <img src="/icon.png" alt="" className=" mx-auto" />

                <h4 className=" font-cd-bangla text-[24px] font-semibold text-white mt-2">
                  গ্রাফিকস
                </h4>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </Container>
    </div>
  );
};

export default CourseCategory;
