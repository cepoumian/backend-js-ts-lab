export const compact = (arg) => {
  // 1. caso: array
  if (Array.isArray(arg)) {
    return arg.filter(Boolean);
  }
  // 2. caso: objeto
  if (typeof arg === "object" && arg !== null) {
    return Object.entries(arg)
      .filter(([_key, value]) => Boolean(value))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  }
  // 3. caso: primitivo
  return arg;
};
