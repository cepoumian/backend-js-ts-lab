import { describe, it, expect, expectTypeOf } from "vitest";
import { swap } from "../src/ts/ex05-swap.ts";

describe("TS ex05 - swap", () => {
  it("invierte el orden de los argumentos", () => {
    const result = swap(39, "Placement officer");
    expect(result).toEqual(["Placement officer", 39]);
  });

  it("infieren correctamente los tipos en la tupla", () => {
    const result = swap(39, "Placement officer");
    expectTypeOf(result).toEqualTypeOf<[string, number]>();
  });
});
