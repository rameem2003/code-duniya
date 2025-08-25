import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire } from "react-icons/fa";

const page = () => {
  return (
    <main className=" py-[120px] ">
      <Container>
        <div className=" flex items-start justify-center gap-5">
          <div className="w-full lg:w-1/2 xl:h-7/12">
            <div className="px-4 py-1.5 bg-red-700/20  text-red-700 rounded-full text-[0.9rem] font-[500] inline-flex items-center gap-1">
              <FaFire className="text-[1rem] text-red-700" />
              লাইভ কোর্স
            </div>
            <div className=" mt-2">
              <h2 className=" font-cd-poppins text-4xl font-bold text-cd-primary">
                MERN Stack Development
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
                sed voluptatem iusto maiores optio culpa maxime rerum nisi quia
                fuga autem dolor sunt impedit velit asperiores sequi neque
                consectetur officiis numquam nulla, aspernatur soluta ut
                perferendis. Dignissimos iste obcaecati nesciunt velit! Aliquid
                fugit laboriosam officia illum natus tempora minus ipsum!
              </p>

              <Link
                href=""
                className=" inline-block font-cd-bangla font-bold text-[20px] text-white py-2 px-4 rounded-[15px] bg-cd-primary hover:bg-[#020911] mt-5"
              >
                কোর্স এনরোল করুন আজই
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:h-5/12">
            <Image
              src="/banner.jpg"
              alt="course"
              width={500}
              height={500}
              className=" w-full rounded-md"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default page;
