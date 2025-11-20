import type { Student } from "./ex01-students.types.js";

export interface Teacher {
  name: string;
  age: number;
  subject: string;
}

export type User = Teacher | Student;
