import { describe, it, expect, expectTypeOf } from "vitest";
import { users } from "../src/data/ex02-user-union.data.ts";
import { logUser } from "../src/ts/ex02-user-union.ts";
import type { Student, Teacher, User } from "../src/ts/ex02-user-union.ts";

describe("TS ex02 - unión User", () => {
  it("users debe ser un arreglo de User", () => {
    expect(Array.isArray(users)).toBe(true);
    expectTypeOf(users).toEqualTypeOf<User[]>();
  });

  it("acepta tanto Student como Teacher", () => {
    const s: Student = {
      name: "Juan",
      age: 23,
      occupation: "Developer",
    };

    const t: Teacher = {
      name: "Pablo",
      age: 40,
      subject: "Math",
    };

    const arr: User[] = [s, t]; // debe compilar
    expect(arr.length).toBe(2);
  });

  it("logUser funciona para ambos tipos", () => {
    const student: User = {
      name: "Ana",
      age: 22,
      occupation: "Designer",
    };

    const teacher: User = {
      name: "Leo",
      age: 31,
      subject: "Science",
    };

    // Solo probamos que no lance error al acceder a name/age
    expect(() => logUser(student)).not.toThrow();
    expect(() => logUser(teacher)).not.toThrow();
  });
});
