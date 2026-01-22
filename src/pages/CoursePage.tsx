import { use } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Award, BookOpen, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoursesContext } from "@/context/CoursesContext";

function CoursePage() {
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
    <div className="bg-background">
      {/* Header */}
      <header
        className={`bg-linear-to-r ${course.color} text-white p-6 md:p-8`}
      >
        <div className="container mx-auto">
          <Link to="/">
            <Button
              variant="ghost"
              className="mb-4 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.name}</h1>
          <p className="text-white/90 text-lg">Código: {course.code}</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Info Card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Información del Curso</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Profesor
                  </p>
                  <p className="font-semibold text-foreground">
                    {course.professor}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Créditos
                  </p>
                  <p className="font-semibold text-foreground">
                    {course.credits}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Horario
                  </p>
                  <p className="font-semibold text-foreground text-sm">
                    {course.schedule}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Aula</p>
                  <p className="font-semibold text-foreground">{course.room}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Descripción
                </p>
                <p className="text-foreground">
                  {course.description || "No hay descripción disponible"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Progreso General</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">
                      Curso
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Promedio Actual
                    </span>
                    <span className="text-2xl font-bold text-primary">20</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Nota global: 16
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link to={`/courses/${course.id}/edit`}>
                  <Award className="w-4 h-4 mr-2" />
                  Editar Curso
                </Link>
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Contactar Profesor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
