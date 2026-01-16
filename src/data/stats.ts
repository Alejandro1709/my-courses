import type { IStat } from "@/types/stat.interface";
import { TrendingUp, Award, BookMarked, Clock } from "lucide-react";

const stats: IStat[] = [
  {
    id: 1,
    icon: BookMarked,
    label: "Cursos Activos",
    value: "6",
    color: "bg-primary",
  },
  {
    id: 2,
    icon: Award,
    label: "Promedio General",
    value: "3.8",
    color: "bg-accent",
  },
  {
    id: 3,
    icon: TrendingUp,
    label: "Progreso Semestre",
    value: "65%",
    color: "bg-chart-2",
  },
  {
    id: 4,
    icon: Clock,
    label: "Tareas Pendientes",
    value: "4",
    color: "bg-chart-3",
  },
];

export default stats;
