import { useNavigate } from "react-router";
import { Bell, Plus, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  const navigate = useNavigate();

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
            onClick={() => navigate("/courses/new")}
          >
            <Plus className="w-4 h-4" />
            Añadir Curso
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <Settings className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
