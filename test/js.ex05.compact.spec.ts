import { describe, it, expect } from "vitest";
import { compact } from "../src/js/ex05-compact.js";

describe("compact", () => {
  it("devuelve el argumento tal cual si no es objeto ni array", () => {
    expect(compact(123)).toBe(123);
    expect(compact(null)).toBe(null);
  });

  it("elimina valores falsy de un array", () => {
    const arr = [0, 1, false, 2, "", 3];
    const result = compact(arr);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(arr); // no muta
  });

  it("elimina propiedades falsy de un objeto", () => {
    const obj = {
      price: 0,
      name: "cloud",
      altitude: NaN,
      taste: undefined,
      isAlive: false,
    };
    const result = compact(obj);
    expect(result).toEqual({ name: "cloud" });
    expect(result).not.toBe(obj); // no muta
  });

  it("maneja un objeto vacío", () => {
    expect(compact({})).toEqual({});
  });

  it("maneja un array vacío", () => {
    expect(compact([])).toEqual([]);
  });
});
