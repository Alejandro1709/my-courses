import { Link } from "react-router";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold text-foreground">Mi ISIL</h1>
          <p className="text-sm text-muted-foreground">Semestre 2026-0</p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="gap-2 bg-primary hover:bg-primary/90 cursor-pointer"
            asChild
          >
            <Link to="/courses/new">
              <Plus className="w-4 h-4" />
              Añadir Curso
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
