/**
 * Represents a teacher with required and optional attributes.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Index signature to allow additional properties
}

/**
 * Represents a director, extending the Teacher interface.
 * Requires an attribute named numberOfReports.
 */
interface Directors extends Teacher {
  numberOfReports: number;
}


/**
 * Defines a function type for printing a teacher's name.
 * @param firstName - The teacher's first name.
 * @param lastName - The teacher's last name.
 * @returns A string formatted as "FirstInitial. LastName".
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Implements the printTeacher function according to the printTeacherFunction interface.
 * Formats the name as "FirstNameInitial. LastName".
 * @param firstName - The teacher's first name.
 * @param lastName - The teacher's last name.
 * @returns A string formatted as "FirstNameInitial. LastName".
 */
const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => 
  `${firstName.charAt(0)}. ${lastName}`;


/**
 * Interface describing the constructor for StudentClass.
 */
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

/**
 * Interface defining properties and methods for a StudentClass.
 */
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Represents a student class implementing the StudentClassInterface.
 */
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Indicates that the student is working on homework.
   * @returns A string indicating the student is currently working.
   */
  workOnHomework(): string {
      return "Currently working";
  }

  /**
   * Displays the first name and last name of the student.
   * @returns The first and last name of the student.
   */
  displayName(): string {
    return `${this.firstName}` + ' ' + `${this.lastName}`;
  }
}

// /**
//  * Function that creates a student using a class constructor.
//  * @param StudentConstructor - The constructor of the StudentClass.
//  * @param firstName - The first name of the student.
//  * @param lastName - The last name of the student.
//  * @returns An instance of StudentClass.
//  */
// function createStudent(
//     StudentConstructor: StudentClassConstructor,
//     firstName: string,
//     lastName: string
//   ): StudentClass {
//     return new StudentConstructor(firstName, lastName);
//   }
  
//   // Example usage
//   const student1 = createStudent(StudentClass, 'Mark', 'Jones');
//   console.log(student1.workOnHomework()); // Output: Currently working
//   console.log(student1.displayName());    // Output: Mark Jones

// The StudentClassConstructor interface isn't directly used within the StudentClass implementation itself. Instead, it serves as a type definition for the constructor of StudentClass. This can be particularly useful when working with factory functions or dependency injection, where you might need to refer to a class constructor type.

// Here’s an explanation of how the StudentClassConstructor interface can be utilized:
// Using StudentClassConstructor
// If you want to create instances of StudentClass dynamically or pass around the constructor as a parameter, you can use the StudentClassConstructor interface to ensure type safety.

//   Explanation
// 1. StudentClassConstructor Interface:
// Defines the signature for the constructor of StudentClass. Specifically, it expects a constructor that accepts two string arguments (firstName and lastName) and returns an instance of StudentClass.

// 2. Factory Function createStudent:
// Accepts a constructor (StudentClassConstructor) and arguments to create an instance of StudentClass.
// By using StudentClassConstructor as the type for StudentConstructor, TypeScript ensures that the passed constructor function matches the expected signature.

// 3. Creating an Instance:
// A function can be used to create an instance of StudentClass dynamically. The function can accept any constructor that matches the StudentClassConstructor interface, providing flexibility and type safety.

// Conclusion
// The StudentClassConstructor interface is valuable when you need to work with the constructor type of a class, especially in situations where you might need to pass constructors around or dynamically create instances of a class. It ensures that any usage of the constructor adheres to the expected parameters and return type.


// Example usage

// Creating a Teacher object
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Paris',
  contract: true,
};

console.log(teacher1);

// should print
// Object
// contract: true
// firstName: "Jane"
// fullTimeEmployee: true
// lastName: "Smith"
// location: "Paris"

// Creating a Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional property
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

// Creating a Director object with the required additional properties
const director1: Directors = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 5,
  contract: false,           // Additional property
  yearsOfExperience: 10      // Optional property from Teacher interface
};

console.log(director1);

// should print
// Object
// contract: false
// firstName: "Alice"
// lastName: "Johnson"
// fullTimeEmployee: true
// location: "New York"
// numberOfReports: 5
// yearsOfExperience: 10

// Using the printTeacher function
console.log(printTeacher('John', 'Doe')); // Output: J. Doe

// Creating a StudentClass object and using its methods
const student1 = new StudentClass('Mark', 'Jones');
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName()); // Output: Mark Jones
