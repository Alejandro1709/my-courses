import { createContext, useState } from "react";
import mockCourses from "@/data/courses";
import type { ICourse } from "@/types/course.interface";

interface CoursesContext {
  courses: ICourse[];
  addCourse: (course: ICourse) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CoursesContext = createContext<CoursesContext>(
  {} as CoursesContext
);

export const CoursesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<ICourse[]>(mockCourses);

  const handleAddCourse = (course: ICourse) => {
    setCourses([...courses, course]);
  };

  return (
    <CoursesContext
      value={{
        courses,
        addCourse: handleAddCourse,
      }}
    >
      {children}
    </CoursesContext>
  );
};
