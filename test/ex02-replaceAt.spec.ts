import { describe, it, expect } from "vitest";
import { replaceAt } from "../src/js/ex02-replaceAt.js";

describe("replaceAt", () => {
  const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];

  it("no debe mutar el array original", () => {
    const res = replaceAt(elements, 2, "furor");
    expect(res).not.toBe(elements); // referencia distinta
    expect(elements[2]).toBe("dolor"); // original intacto
  });

  it("reemplaza el elemento en el index indicado", () => {
    const res = replaceAt(elements, 2, "furor");
    expect(res).toEqual(["lorem", "ipsum", "furor", "sit", "amet"]);
  });

  it("cuando index está fuera de rango, devuelve copia igual", () => {
    const res = replaceAt(elements, 10, "x");
    expect(res).toEqual(elements);
    expect(res).not.toBe(elements);
  });
});
