import Container from "@/components/layout/Container";
import CourseComponent from "@/components/shared/CourseComponent";
import { singleCategory } from "@/lib/courseApi";
import { categoryType } from "@/types/type";
import type { Metadata, ResolvingMetadata } from "next";
import React from "react";
interface PageProps {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;
  // fetch post information
  const post = await singleCategory(id).then((res) => res.data);

  return {
    title: post.name,
    description: post.description,
  };
}

const page = async ({ params }: PageProps) => {
  let id = await params.id;
  let data = await singleCategory(id);
  let category: categoryType = data.data;

  return (
    <main className="py-[100px]">
      <Container>
        <CourseComponent data={category} />
        <h1></h1>
      </Container>
    </main>
  );
};

export default page;
