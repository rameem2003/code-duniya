import React from "react";
import Container from "../Container";
import SuccessStoryComponent from "@/components/shared/SuccessStoryComponent";

const SuccessSection = () => {
  return (
    <section className=" py-[120px] ">
      <Container>
        <h2 className=" font-cd-bangla text-[36px] font-bold text-black text-center">
          আমাদের সফলতার গল্পগুলো
        </h2>
        <p className=" font-cd-bangla text-[20px] font-medium text-black text-center">
          আমাদের হাতে তৈরি হওয়া প্রতিটি নক্ষত্র
        </p>
        <div className=" mt-[90px]">
          <SuccessStoryComponent />
        </div>
      </Container>
    </section>
  );
};

export default SuccessSection;
