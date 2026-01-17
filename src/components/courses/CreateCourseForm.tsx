import { Link } from "react-router";
import { BookOpen } from "lucide-react";

function CreateCourseForm() {
  return (
    <form
      className="bg-card rounded-2xl shadow-lg p-8 space-y-6"
      onSubmit={() => {}}
    >
      {/* Sección: Información Básica */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Información Básica
        </h2>
        <div className="space-y-4">
          <div>
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
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
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
              />
            </div>
            <div>
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
              />
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
          <div>
            <label
              htmlFor="teacher"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Nombre del Profesor
            </label>
            <input
              type="text"
              id="teacher"
              placeholder="Ej: Dr. Juan Pérez"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
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
              />
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
              />
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
          />
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
