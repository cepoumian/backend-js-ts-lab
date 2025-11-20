import type { Student } from "../types/ex01-students.types.js";
import type { Teacher, User } from "../types/ex02-user-union.types.js";
export type { Student, Teacher, User };

export const isStudent = (user: User): user is Student => {
  return "occupation" in user;
};

export const isTeacher = (user: User): user is Teacher => {
  return "subject" in user;
};

export const logUser = (user: User): void => {
  let extraInfo: string;

  if (isStudent(user)) {
    extraInfo = `Ocupación: ${user.occupation}`;
  } else {
    // El único caso restante es Teacher gracias a la union
    extraInfo = `Materia: ${user.subject}`;
  }

  console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};
