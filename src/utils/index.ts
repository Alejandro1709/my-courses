export const getRandomGradient = (): string => {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-purple-400 to-purple-600",
    "from-emerald-400 to-emerald-600",
    "from-amber-400 to-amber-600",
    "from-pink-400 to-pink-600",
    "from-orange-400 to-orange-600",
    "from-green-400 to-green-600",
  ];

  const randomIdx = Math.floor(Math.random() * colors.length);

  return colors[randomIdx];
};

export const getStatus = (status: string): string => {
  switch (status) {
    case "in-progress":
      return "En Progreso";
    case "completed":
      return "Completado";
    case "not-started":
      return "No Iniciado";
    default:
      return "Desconocido";
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "in-progress":
      return "bg-yellow-500";
    case "completed":
      return "bg-green-500";
    case "not-started":
      return "bg-red-500";
    default:
      return "bg-slate-500";
  }
};
