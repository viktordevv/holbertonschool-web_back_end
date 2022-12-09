export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

// task 2
export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// task 3
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName[0]}. ${lastName}`;
};

// Task 4
export const StudentClass: StudentConstructor = class StudentClass
  implements StudentClassInterface
{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
};

export interface StudentClassInterface {
  readonly firstName: string;
  readonly lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
