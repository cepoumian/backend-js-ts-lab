export const normalize = (arr) => {
  return arr.reduce((acc, { id, ...rest }) => {
    acc[id] = rest;
    return acc;
  }, {});
};
