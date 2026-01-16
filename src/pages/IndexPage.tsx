import CoursesSection from "@/components/courses/CoursesSection";
import StatsSection from "@/components/stats/StatsSection";
import courses from "@/data/courses";
import stats from "@/data/stats";

function IndexPage() {
  return (
    <>
      <StatsSection stats={stats} />
      <CoursesSection courses={courses} />
    </>
  );
}

export default IndexPage;
