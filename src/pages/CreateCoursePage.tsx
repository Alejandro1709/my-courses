import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router";

function CreateCoursePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-secondary">
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
        <div className="bg-card rounded-2xl shadow-lg p-8 space-y-6">
          {/* Sección: Información Básica */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Información Básica
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre del Curso
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Ej: Cálculo I"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="codigo"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Código del Curso
                  </label>
                  <input
                    type="text"
                    id="codigo"
                    placeholder="Ej: MAT-101"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="creditos"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Créditos
                  </label>
                  <input
                    type="number"
                    id="creditos"
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
                  htmlFor="profesor"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre del Profesor
                </label>
                <input
                  type="text"
                  id="profesor"
                  placeholder="Ej: Dr. Juan Pérez"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="horario"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Horario
                  </label>
                  <input
                    type="text"
                    id="horario"
                    placeholder="Ej: Lun, Mié 2:00 PM"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="salon"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Salón
                  </label>
                  <input
                    type="text"
                    id="salon"
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
                htmlFor="descripcion"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Descripción del Curso (Opcional)
              </label>
              <textarea
                id="descripcion"
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
            <button
              onClick={() => {}}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Crear Curso
            </button>
          </div>
        </div>

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
