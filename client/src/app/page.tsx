import Banner from "@/components/layout/Banner";
import CourseList from "@/components/layout/Home/CourseList";
import WeAreBest from "@/components/layout/Home/WeAreBest";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <CourseList />
      <WeAreBest />
    </main>
  );
}
