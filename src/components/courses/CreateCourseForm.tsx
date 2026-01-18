import { use } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { BookOpen } from "lucide-react";
import { CoursesContext } from "@/context/CoursesContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRandomGradient } from "@/utils";
import { z } from "zod";
import type { ICourse } from "@/types/course.interface";

function CreateCourseForm() {
  const navigate = useNavigate();

  const CreateCourseSchema = z.object({
    name: z
      .string({ error: "name must be a string" })
      .min(1, { error: "name is required" }),
    code: z
      .string({ error: "code must be a string" })
      .min(1, { error: "code is required" }),
    credits: z
      .string({ error: "credits must be a string" })
      .min(1, { error: "minimum of credits is 1" }),
    professor: z
      .string({ error: "professor must be a string" })
      .min(1, { error: "professor is required" }),
    schedule: z
      .string({ error: "schedule must be a string" })
      .min(1, { error: "schedule is required" }),
    room: z
      .string({ error: "room must be a string" })
      .min(1, { error: "room is required" }),
    description: z.string().optional(),
  });

  type CreateCourseFormSchemaType = z.infer<typeof CreateCourseSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCourseFormSchemaType>({
    resolver: zodResolver(CreateCourseSchema),
  });

  const { courses, addCourse } = use(CoursesContext);

  const handleCreateCourse = (formData: CreateCourseFormSchemaType) => {
    const newCourse: ICourse = {
      id: courses.length + 1,
      ...formData,
      credits: +formData.credits,
      color: getRandomGradient(),
      grade: "",
      progress: 0,
    };

    addCourse(newCourse);

    navigate("/");
  };

  return (
    <form
      className="bg-card rounded-2xl shadow-lg p-8 space-y-6"
      onSubmit={handleSubmit(handleCreateCourse)}
      noValidate
    >
      {/* Sección: Información Básica */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Información Básica
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Nombre del Curso
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ej: Cálculo I"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              {...register("name")}
            />
            {errors.name ? (
              <div className="bg-red-400 p-2 rounded-md text-white">
                <p>{errors.name.message}</p>
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="code"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Código del Curso
              </label>
              <input
                type="text"
                id="code"
                placeholder="Ej: MAT-101"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...register("code")}
              />
              {errors.code ? (
                <div className="bg-red-400 p-2 rounded-md text-white">
                  <p>{errors.code.message}</p>
                </div>
              ) : null}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="credits"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Créditos
              </label>
              <input
                type="number"
                id="credits"
                placeholder="Ej: 3"
                min="1"
                max="10"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...register("credits")}
              />
              {errors.credits ? (
                <div className="bg-red-400 p-2 rounded-md text-white">
                  <p>{errors.credits.message}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Sección: Profesor e Horario */}
      <div className="border-t border-border pt-6">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
            📚
          </span>
          Profesor e Horario
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="professor"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Nombre del Profesor
            </label>
            <input
              type="text"
              id="professor"
              placeholder="Ej: Dr. Juan Pérez"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              {...register("professor")}
            />
            {errors.professor ? (
              <div className="bg-red-400 p-2 rounded-md text-white">
                <p>{errors.professor.message}</p>
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="schedule"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Horario
              </label>
              <input
                type="text"
                id="schedule"
                placeholder="Ej: Lun, Mié 2:00 PM"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...register("schedule")}
              />
              {errors.schedule ? (
                <div className="bg-red-400 p-2 rounded-md text-white">
                  <p>{errors.schedule.message}</p>
                </div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="room"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Salón
              </label>
              <input
                type="text"
                id="room"
                placeholder="Ej: Edificio A - 203"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...register("room")}
              />
              {errors.room ? (
                <div className="bg-red-400 p-2 rounded-md text-white">
                  <p>{errors.room.message}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Sección: Descripción */}
      <div className="border-t border-border pt-6">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
            ✏️
          </span>
          Descripción
        </h2>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Descripción del Curso (Opcional)
          </label>
          <textarea
            id="description"
            placeholder="Agrega detalles adicionales sobre el curso..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            {...register("description")}
          />
          {errors.description ? (
            <div className="bg-red-400 p-2 rounded-md text-white">
              <p>{errors.description.message}</p>
            </div>
          ) : null}
        </div>
      </div>

      {/* Botones de acción */}
      <div className="border-t border-border pt-6 flex gap-3 sm:justify-end">
        <Link
          to="/"
          className="px-6 py-3 rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors font-medium"
        >
          Cancelar
        </Link>

        <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl">
          Crear Curso
        </button>
      </div>
    </form>
  );
}

export default CreateCourseForm;
