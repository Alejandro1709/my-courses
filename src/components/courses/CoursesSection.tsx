import CourseCard from "@/components/courses/CourseCard";
import type { ICourse } from "@/types/course.interface";

interface Props {
  courses: ICourse[];
}

function CoursesSection({ courses }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Tus Cursos
          </h2>
          <p className="text-muted-foreground">
            Gestiona y visualiza el progreso de tus cursos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
