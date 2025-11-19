import { describe, it, expect } from "vitest";
import { winnerByYear, data } from "../src/js/ex03-winnerByYear.js";

describe("winnerByYear", () => {
  it("devuelve los top 3 nombres por ranking para un año dado", () => {
    expect(winnerByYear(data, 1998)).toEqual(["Douglass", "Randy", "Monroe"]);
    expect(winnerByYear(data, 1999)).toEqual(["Graciela", "Ervin", "Maxie"]);
    expect(winnerByYear(data, 2000)).toEqual(["Lettie", "Eddy", "Emilee"]);
  });

  it("devuelve [] si no hay datos para ese año", () => {
    expect(winnerByYear(data, 2004)).toEqual([]);
  });

  it("no muta el array original", () => {
    const copy = structuredClone(data); // o JSON.parse(JSON.stringify(data))
    winnerByYear(data, 1998);
    expect(data).toEqual(copy);
  });
});
