import { use } from "react";
import { Link, useParams } from "react-router";
import EditCourseForm from "@/components/courses/EditCourseForm";
import { ArrowLeft } from "lucide-react";
import { CoursesContext } from "@/context/CoursesContext";

function EditCoursePage() {
  const { id = "" } = useParams();

  const { courses } = use(CoursesContext);

  const course = courses.find((c) => c.id === +id);

  if (!course) {
    return (
      <div className="bg-background">
        <h2>Course not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-background to-secondary">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header con botón de retorno */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to={`/courses/${course.id}`}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Editar Curso</h1>
            <p className="text-muted-foreground mt-1">
              Completa el formulario para editar este curso
            </p>
          </div>
        </div>

        {/* Formulario */}
        <EditCourseForm course={course} />
      </div>
    </div>
  );
}

export default EditCoursePage;
