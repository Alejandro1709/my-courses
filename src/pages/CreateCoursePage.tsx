import { Link } from "react-router";
import CreateCourseForm from "@/components/courses/CreateCourseForm";
import { ArrowLeft } from "lucide-react";

function CreateCoursePage() {
  return (
    <div className="bg-linear-to-br from-background to-secondary">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header con botón de retorno */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Crear Nuevo Curso
            </h1>
            <p className="text-muted-foreground mt-1">
              Completa el formulario para agregar un nuevo curso
            </p>
          </div>
        </div>

        {/* Formulario */}
        <CreateCourseForm />

        {/* Card informativa */}
        <div className="mt-8 bg-accent/10 border border-accent/20 rounded-lg p-4 text-sm text-foreground">
          <p className="font-medium mb-2">💡 Consejo:</p>
          <p>
            Asegúrate de llenar correctamente todos los campos para un mejor
            seguimiento de tu progreso académico.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateCoursePage;
