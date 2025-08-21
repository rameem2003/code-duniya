import React from "react";
import Container from "../Container";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WeAreBest = () => {
  return (
    <section className="py-[97px]">
      <Container>
        <h2 className=" font-cd-bangla text-[36px] font-bold text-black text-center">
          কেন আমরাই সেরা
        </h2>
        <p className=" font-cd-bangla text-[20px] font-medium text-black text-center">
          কেন আপনি আমাদের লার্নার হবেন ?
        </p>

        <div className=" mt-16 flex items-center justify-between gap-6 flex-wrap md:flex-nowrap">
          <Card className=" gap-0 rounded-[15px] basis-full sm:basis-1/2 md:basis-1/3 py-9 px-7 bg-[#1B263B]">
            <CardContent className=" p-0 m-0">
              <h2 className=" font-cd-bangla font-semibold text-[36px] text-white">
                ৯০%
              </h2>
              <h3 className=" font-cd-bangla font-semibold text-[36px] text-white">
                সফলতার হার
              </h3>
              <p className=" mt-6 font-cd-bangla text-base font-normal text-white">
                এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু
                টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে
                এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে
              </p>
            </CardContent>
          </Card>
          <Card className=" gap-0 rounded-[15px] basis-full sm:basis-1/2 md:basis-1/3 py-9 px-7 bg-[#1B263B]">
            <CardContent className=" p-0 m-0">
              <h2 className=" font-cd-bangla font-semibold text-[36px] text-white">
                ১০,০০০ +
              </h2>
              <h3 className=" font-cd-bangla font-semibold text-[36px] text-white">
                ক্যারিয়ার প্লেসমেন্ট
              </h3>
              <p className=" mt-6 font-cd-bangla text-base font-normal text-white">
                এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু
                টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে
                এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে
              </p>
            </CardContent>
          </Card>

          <Card className=" gap-0 rounded-[15px] basis-full sm:basis-1/2 md:basis-1/3 py-9 px-7 bg-[#1B263B]">
            <CardContent className=" p-0 m-0">
              <h2 className=" font-cd-bangla font-semibold text-[36px] text-white">
                ১০০০০০ +
              </h2>
              <h3 className=" font-cd-bangla font-semibold text-[36px] text-white">
                স্টুডেন্ট এর পছন্দ
              </h3>
              <p className=" mt-6 font-cd-bangla text-base font-normal text-white">
                এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু
                টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে
                এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default WeAreBest;
