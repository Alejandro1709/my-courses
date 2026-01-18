import { createContext, useEffect, useState } from "react";
import type { ICourse } from "@/types/course.interface";

interface CoursesContext {
  courses: ICourse[];
  addCourse: (course: ICourse) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CoursesContext = createContext<CoursesContext>(
  {} as CoursesContext
);

const getCoursesFromLocalStorage = (): ICourse[] => {
  const courses = localStorage.getItem("courses");
  return courses ? JSON.parse(courses) : [];
};

export const CoursesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<ICourse[]>(
    getCoursesFromLocalStorage()
  );

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

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
