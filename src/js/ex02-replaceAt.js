export const replaceAt = (arr, index, newElement) => {
  // Validar indice
  if (index < 0 || index > arr.length - 1) {
    // Devolver un array nuevo con los mismos valores sin el indice no es valido
    return [...arr];
  }
  // Dividir el array en dos parts con slice e insertar el valor nuevo
  return [...arr.slice(0, index), newElement, ...arr.slice(index + 1)];
};
