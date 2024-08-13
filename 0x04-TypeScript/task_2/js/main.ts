/**
 * Interface for Director with expected methods.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface for Teacher with expected methods.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Class representing a Director implementing DirectorInterface.
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
 * Class representing a Teacher implementing TeacherInterface.
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/**
 * Function to create an instance of Director or Teacher based on salary.
 * @param salary - The salary (either number or string).
 * @returns A new instance of Director or Teacher.
 */
function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

//   // Example usage
//   console.log(createEmployee(200));   // Output: Teacher { ... }
//   console.log(createEmployee(1000));  // Output: Director { ... }
//   console.log(createEmployee('$500')); // Output: Director { ... }

/**
 * Type predicate to check if an employee is a Director.
 * @param employee - The employee to check.
 * @returns True if the employee is a Director, false otherwise.
 */
function isDirector(employee: TeacherInterface | DirectorInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

/**
 * Executes the appropriate work function based on the employee type.
 * @param employee - The employee whose work function should be executed.
 * @returns The result of the work function as a string.
 */
function executeWork(employee: TeacherInterface | DirectorInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// // Example usage and testing the expected result

// // Creating a Teacher instance using the createEmployee function
// const employee1 = createEmployee(200);
// console.log(executeWork(employee1));  // Expected output: "Getting to work"

// // Creating a Director instance using the createEmployee function
// const employee2 = createEmployee(1000);
// console.log(executeWork(employee2)); // Expected output: "Getting to director tasks"

// // Creating a Teacher instance directly
// const employee3: TeacherInterface = new Teacher();
// console.log(executeWork(employee3));  // Expected output: "Getting to work"

// // Creating a Director instance directly
// const employee4: DirectorInterface = new Director();
// console.log(executeWork(employee4)); // Expected output: "Getting to director tasks"

// use the createEmployee function to create instances of Director or Teacher and then use the executeWork function to determine the appropriate work function output. This approach ensures that the tests cover both the creation and the behavior of the instances based on the interfaces TeacherInterface and DirectorInterface.

// Key Points:
// Using createEmployee: This function is tested with different salary values to ensure it correctly returns either a Teacher or a Director instance. This covers scenarios based on salary type and value.
// Using executeWork: This function is used to call the appropriate method (workTeacherTasks or workDirectorTasks) based on whether the employee is a Teacher or Director.
// Direct Instantiation: Direct instantiation of Teacher and Director classes tests the behavior independently of the createEmployee function.
// This comprehensive approach ensures that both the creation logic and the interface behavior are tested effectively.

/**
 * String literal type for allowed subjects.
 */
type Subjects = "Math" | "History";

/**
 * Function to teach a class based on the subject.
 * @param todayClass - The subject to be taught.
 * @returns A string indicating which class is being taught.
 */
function teachClass(todayClass: Subjects): string {
  // return (todayClass === "Math") ? "Teaching Math" : (todayClass === "History") ? "Teaching History"
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

// // Expected result:
// teachClass("Math");    // Expected output: Teaching Math
// teachClass("History"); // Expected output: Teaching History
