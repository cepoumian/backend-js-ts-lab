import type { Student } from "../types/ex01-students.types.js";
import type { User, Teacher } from "../types/ex02-user-union.types.js";
export type { Student, User, Teacher };

export const logUser = ({ name, age }: User) => {
  console.log(`  - ${name}, ${age}`);
};
