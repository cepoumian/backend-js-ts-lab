import { describe, it, expect, expectTypeOf, vi } from "vitest";
import { students, formatStudent, logStudent } from "../src/ts/ex01-students.ts";
import type { Student } from "../src/ts/ex01-students.ts";

describe("TS ex01 - Student", () => {
  it("students es un arreglo de Student", () => {
    expect(Array.isArray(students)).toBe(true);
    expect(students).toHaveLength(2);
    expectTypeOf(students).toEqualTypeOf<Student[]>();
  });

  it("formatStudent devuelve el string esperado", () => {
    expect(formatStudent(students[0])).toBe("  - Patrick Berry, 25");
    expect(formatStudent(students[1])).toBe("  - Alice Garner, 34");
  });

  it("logStudent usa console.log con el formato correcto", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logStudent(students[0]);
    expect(spy).toHaveBeenCalledWith("  - Patrick Berry, 25");
    spy.mockRestore();
  });
});
