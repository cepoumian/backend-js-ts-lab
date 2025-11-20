export const winnerByYear = (arr, year) => {
  return arr
    .filter((item) => item.year === year)
    .slice() // Hacer copia antes del sort
    .sort((a, b) => b.ranking - a.ranking)
    .slice(0, 3)
    .map((item) => item.name);
};
