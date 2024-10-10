interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any
}

// interface Director inherits attributes from Teacher
interface Directors extends Teacher {
  numberOfReports: number
}

// function printTeacher
function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)} ${lastName}`;   
}

// interface for function named printTeacherFunction

interface printTeacherFunction {
    firstName: string,
    lastName: string
}
// Implement an interface for constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// define an interface for the class
interface StudentClassInterface {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string
}

// Implement the studentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string , lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return `Currently working`;
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}