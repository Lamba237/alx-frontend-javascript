export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return  `Working from home`;
    }

    getCoffeeBreak() {
        return `Getting a coffee break`;
    }

    workDirectorTasks() {
        return `Getting to director tasks`;
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return `Working from home`;
    }

    getCoffeeBreak() {
        return `Cannot have a break`;
    }

    workTeacherTasks() {
        return `Getting to work`;
    }
}

export function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return `Teacher`;
    } else {
        return `Director`;
    }
}

function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

// string literal type
type Subjects = "Math" | "History";

export function teachClass(todayClass:Subjects) {
    if (todayClass === 'Math') {
      return 'Teaching Math'
    } else if (todayClass === 'History') {
      return 'Teaching History'
    }
  }

