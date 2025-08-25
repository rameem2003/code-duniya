"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

interface playProps {
  state?: boolean;
  video?: string;
}

const SuccessStoryComponent = () => {
  const [play, setPlay] = useState<playProps>({});
  return (
    <div className=" w-full p-3 bg-slate-100 rounded-lg">
      <h2 className=" font-cd-bangla text-3xl font-bold text-cd-primary mb-5">
        সফলতার গল্প
      </h2>
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
        <CarouselContent className=" mx-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="w-full p-0">
              <Card
                onClick={() =>
                  setPlay({
                    state: true,
                    video: "https://youtu.be/XMJLxuff210?si=V31GXNzuLfb1XA2H",
                  })
                }
                key={index}
                className="w-full p-0 relative cursor-pointer overflow-hidden"
              >
                <Image
                  src="/banner.jpg"
                  alt="banner"
                  width={500}
                  height={500}
                  className=" w-full h-auto"
                />

                <Image
                  src="/play.png"
                  alt="icon"
                  width={500}
                  height={500}
                  className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {play.state && (
        <div className=" w-full h-screen bg-black/90 fixed top-0 left-0 z-50 flex items-center justify-center">
          <FaTimes
            className=" absolute top-20 right-4 text-[30px] text-white cursor-pointer"
            onClick={() => setPlay({ state: false, video: "" })}
          />

          <ReactPlayer
            src={play.video}
            width={"50%"}
            height={"50%"}
            controls={false}
            playing={true}
          />
        </div>
      )}
    </div>
  );
};

export default SuccessStoryComponent;
