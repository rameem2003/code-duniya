import Container from "@/components/layout/Container";
import React from "react";
import { courseType, PageProps } from "@/types/type";
import { singleCourse } from "@/lib/courseApi";

const page = async ({ params }: PageProps) => {
  let id = await params.id;
  let data = await singleCourse(id);
  let course: courseType = data.data;

  return (
    <main className="py-[120px]">
      <Container>qwd</Container>
    </main>
  );
};

export default page;
