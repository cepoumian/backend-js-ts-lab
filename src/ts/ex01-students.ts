import type { Student } from "../types/ex01-students.types.js";
export type { Student };

export const students: Student[] = [
  {
    name: "Patrick Berry",
    age: 25,
    occupation: "Medical scientist",
  },
  {
    name: "Alice Garner",
    age: 34,
    occupation: "Media planner",
  },
];

export const formatStudent = ({ name, age }: Student) => {
  return `  - ${name}, ${age}`;
};

export const logStudent = (s: Student): void => {
  console.log(formatStudent(s));
};
