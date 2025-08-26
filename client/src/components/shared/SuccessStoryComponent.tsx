"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import ReactPlayer from "react-player";
import { FaTimes } from "react-icons/fa";
import { allSuccessStories } from "@/lib/successStoryApi";
import { successStoryType } from "@/types/type";

interface playProps {
  state?: boolean;
  video?: string;
}

const SuccessStoryComponent = ({ videoLimit = 4 }: { videoLimit?: number }) => {
  const [stories, setStories] = useState<successStoryType[]>([]);
  const [play, setPlay] = useState<playProps>({});

  const fetchSuccessStories = async () => {
    let res = await allSuccessStories(videoLimit);
    console.log(res);
    setStories(res.data);
  };

  useEffect(() => {
    fetchSuccessStories();
  }, []);
  return (
    <>
      <div className=" flex items-center justify-between gap-6 flex-wrap">
        {stories.map((story, index) => (
          <Card
            onClick={() =>
              setPlay({
                state: true,
                video: story.video,
              })
            }
            key={index}
            className="w-full p-0 lg:w-[48%] relative cursor-pointer overflow-hidden"
          >
            <Image
              src={story.thumb}
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
              className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
            />
          </Card>
        ))}
      </div>

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
    </>
  );
};

export default SuccessStoryComponent;
