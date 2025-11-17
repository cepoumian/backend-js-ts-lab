export const fromCSV = (csv, nAttrs) => {
  // Normalizar y separar línesas
  const lines = csv.trim().split("\n");
  // Sacar headers y filas
  const [headerLine, ...rows] = lines;
  let headers = headerLine.split(",");
  // Recortar headers si nAttrs es pasado
  if (typeof nAttrs === "number") {
    headers = headers.slice(0, nAttrs);
  }
  // Filtrar filas vacías
  const dataRows = rows.filter((line) => line.trim().length > 0);
  // MApear cada fila a un objeto y devrolverlo
  return dataRows.map((row) => {
    const values = row.split(",");
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] ?? "";
    });
    return obj;
  });
};
