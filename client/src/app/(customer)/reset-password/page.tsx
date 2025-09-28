"use client";
import Container from "@/components/layout/Container";
import { notFound, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const params = useSearchParams();
  const token = params.get("token");
  //   console.log(params.get("q"));

  useEffect(() => {
    if (!token) {
      notFound();
    }
  }, [token]);

  return (
    <main>
      <Container>
        <div className=" min-h-[900px] flex items-center justify-center flex-col">
          <h2 className=" font-cd-bangla text-[36px] font-extrabold text-cd-primary text-center">
            Reset Password Page
          </h2>
        </div>
      </Container>
    </main>
  );
};

export default page;
