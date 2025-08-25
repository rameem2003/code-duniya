import Container from "@/components/layout/Container";
import CourseComponent from "@/components/shared/CourseComponent";
import type { Metadata, ResolvingMetadata } from "next";
import React from "react";
interface PageProps {
  params: Promise<{
    id: Promise<string>;
  }>;
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  // fetch post information
  const post = {
    title: "Web and Software Development",
    description: "This is department page",
  };

  return {
    title: post.title,
    description: post.description,
  };
}

const page = async ({ params }: Promise<PageProps>) => {
  let category = await params.id;

  return (
    <main className="py-[100px]">
      <Container>
        <CourseComponent />
      </Container>
    </main>
  );
};

export default page;
