// Implement Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Implement TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return `Working from home`;
    }

    getCoffeeBreak() {
        return `Getting a coffee break`;
    }

    workDirectorTasks() {
        return `Getting to director tasks`;
    }
}

// Treacher class that implements an interface
class Teacher implements TeacherInterface {
    workFromHome() {
        return `Cannot work from home`;
    }

    getCoffeeBreak() {
        return `Cannot have a break`;
    }

    workTeacherTasks() {
        return `Getting to work;`
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher;
    }
    return new Director;
}