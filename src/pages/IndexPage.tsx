import CourseCard from "@/components/courses/CourseCard";
import { TrendingUp, Award, BookMarked, Clock } from "lucide-react";

function IndexPage() {
  const stats = [
    {
      icon: BookMarked,
      label: "Cursos Activos",
      value: "6",
      color: "bg-primary",
    },
    {
      icon: Award,
      label: "Promedio General",
      value: "3.8",
      color: "bg-accent",
    },
    {
      icon: TrendingUp,
      label: "Progreso Semestre",
      value: "65%",
      color: "bg-chart-2",
    },
    {
      icon: Clock,
      label: "Tareas Pendientes",
      value: "4",
      color: "bg-chart-3",
    },
  ];

  const courses = [
    {
      id: 1,
      name: "Cálculo I",
      professor: "Dr. García López",
      credits: 4,
      progress: 85,
      grade: "A-",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Programación Avanzada",
      professor: "Ing. María Rodríguez",
      credits: 3,
      progress: 72,
      grade: "A",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 3,
      name: "Física General",
      professor: "Dr. Carlos Mendez",
      credits: 4,
      progress: 60,
      grade: "B+",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      id: 4,
      name: "Inglés Técnico",
      professor: "Prof. Jennifer Smith",
      credits: 3,
      progress: 92,
      grade: "A+",
      color: "from-amber-400 to-amber-600",
    },
    {
      id: 5,
      name: "Álgebra Lineal",
      professor: "Dr. Roberto Silva",
      credits: 3,
      progress: 78,
      grade: "A-",
      color: "from-pink-400 to-pink-600",
    },
    {
      id: 6,
      name: "Química Orgánica",
      professor: "Dra. Ana García",
      credits: 4,
      progress: 55,
      grade: "B",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section>
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
    </>
  );
}

export default IndexPage;
