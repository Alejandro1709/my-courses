import type { ICourse } from "@/types/course.interface";

const courses: ICourse[] = [
  {
    id: 1,
    name: "Algoritmos y Estructura de Datos",
    code: "1020",
    professor: "Josue Caleb Fiestas Kengua",
    credits: 4,
    progress: 85,
    grade: "A",
    schedule: "Lun 19:00 - 22:50",
    room: "SRM",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "Matematica Aplicada",
    code: "1491",
    professor: "Angela Pamela Garcia Barreda",
    credits: 3,
    progress: 85,
    grade: "A",
    schedule: "Vie 17:00 - 19:50",
    room: "SRM",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    name: "Programación Avanzada de Base de Datos",
    code: "1570",
    professor: "Sergio Matsukawa Maeda",
    credits: 3,
    progress: 85,
    grade: "A",
    schedule: "Vie 17:00 - 19:50",
    room: "SRM",
    color: "from-emerald-400 to-emerald-600",
  },
];

export default courses;
