import type { Student } from "./ex01-students.js";
import type { StudentCriteria } from "../types/ex04-filterStudents.types.js";
export type { Student, StudentCriteria };

export const filterStudentsBy = (students: Student[], criteria: StudentCriteria): Student[] => {
  const criteriaKeys = Object.keys(criteria) as (keyof Student)[];
  return students.filter((student) => {
    return criteriaKeys.every((fieldName) => {
      return criteria[fieldName] === student[fieldName];
    });
  });
};
