import { describe, it, expect } from "vitest";
import { students } from "../src/data/ex04-filterStudents.data.ts";
import { filterStudentsBy } from "../src/ts/ex04-filterStudents.ts";

describe("TS ex04 - filterStudentsBy", () => {
  it("filtra por un solo criterio (age)", () => {
    const result = filterStudentsBy(students, { age: 35 });

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: "Alexandra Morton",
      age: 35,
      occupation: "Conservation worker",
    });
  });

  it("filtra por múltiples criterios (name + age)", () => {
    const result = filterStudentsBy(students, {
      name: "Luke Patterson",
      age: 32,
    });

    expect(result).toHaveLength(1);
    expect(result[0].occupation).toBe("Internal auditor");
  });

  it("devuelve todos los estudiantes si criteria está vacío", () => {
    const result = filterStudentsBy(students, {});
    expect(result).toHaveLength(students.length);
  });

  it("devuelve array vacío si ningún estudiante cumple los criterios", () => {
    const result = filterStudentsBy(students, { age: 99 });
    expect(result).toEqual([]);
  });
});
