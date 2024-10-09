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

