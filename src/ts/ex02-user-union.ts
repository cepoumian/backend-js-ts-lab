import type { Student } from "./ex01-students.ts";
export type { Student };

export interface Teacher {
  name: string;
  age: number;
  subject: string;
}

export type User = Teacher | Student;

export const users: User[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];

export const logUser = ({ name, age }: User) => {
  console.log(`  - ${name}, ${age}`);
};
