import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-3 mt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Página no encontrada
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Parece que te has perdido en el camino. La página que buscas no
              existe... por el momento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              onClick={() => navigate("/")}
              className="px-8 py-6 text-base cursor-pointer"
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
