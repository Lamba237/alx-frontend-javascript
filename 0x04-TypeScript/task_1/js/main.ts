export interface Teacher {
    readonly firstName: string;
    readonly astName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface Director extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}


export interface StudentClassInterface {
    displayName(): string;
    workOnHomework(): string;
  }

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
  }


class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return `Currently working`;
    }

    displayName(): string {
        return this.firstName;
    }
}
