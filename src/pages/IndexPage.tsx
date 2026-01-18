import { use } from "react";
import CoursesSection from "@/components/courses/CoursesSection";
import { CoursesContext } from "@/context/CoursesContext";

function IndexPage() {
  const { courses } = use(CoursesContext);

  return (
    <>
      {/* <StatsSection stats={stats} /> */}
      <CoursesSection courses={courses} />
    </>
  );
}

export default IndexPage;
