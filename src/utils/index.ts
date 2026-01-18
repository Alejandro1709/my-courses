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
