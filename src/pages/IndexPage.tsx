import CoursesSection from "@/components/courses/CoursesSection";
import courses from "@/data/courses";

function IndexPage() {
  return (
    <>
      {/* <StatsSection stats={stats} /> */}
      <CoursesSection courses={courses} />
    </>
  );
}

export default IndexPage;
