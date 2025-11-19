import type { Student, Teacher, User } from "./ex02-user-union.ts";
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
  } else if (isTeacher(user)) {
    extraInfo = `Materia: ${user.subject}`;
  } else {
    extraInfo = "Tipo desconocido";
  }

  console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};
