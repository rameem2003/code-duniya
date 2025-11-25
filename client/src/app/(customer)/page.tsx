import Banner from "@/components/layout/Banner";
import ClassSpeciallity from "@/components/layout/Home/ClassSpeciallity";
import CourseList from "@/components/layout/Home/CourseList";
import SuccessSection from "@/components/layout/Home/SuccessSection";
import WeAreBest from "@/components/layout/Home/WeAreBest";

export default function Home() {
  return (
    <main>
      <Banner />
      <CourseList />
      <WeAreBest />
      <ClassSpeciallity />
      <SuccessSection />
    </main>
  );
}
