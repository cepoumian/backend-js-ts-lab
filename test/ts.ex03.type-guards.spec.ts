import { describe, it, expect, vi } from "vitest";
import { isStudent, isTeacher, logUser } from "../src/ts/ex03-type-guards.ts";
import type { Student, Teacher, User } from "../src/ts/ex03-type-guards.ts";

describe("TS ex03 - type guards", () => {
  const student: Student = {
    name: "Ana",
    age: 22,
    occupation: "Designer",
  };

  const teacher: Teacher = {
    name: "Leo",
    age: 31,
    subject: "Science",
  };

  it("isStudent solo devuelve true para Student", () => {
    expect(isStudent(student)).toBe(true);
    expect(isStudent(teacher as User)).toBe(false);
  });

  it("isTeacher solo devuelve true para Teacher", () => {
    expect(isTeacher(teacher)).toBe(true);
    expect(isTeacher(student as User)).toBe(false);
  });

  it("logUser imprime occupation para Student y subject para Teacher", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    logUser(student);
    logUser(teacher);

    expect(spy).toHaveBeenNthCalledWith(1, "  - Ana, 22, Ocupación: Designer");
    expect(spy).toHaveBeenNthCalledWith(2, "  - Leo, 31, Materia: Science");

    spy.mockRestore();
  });
});
