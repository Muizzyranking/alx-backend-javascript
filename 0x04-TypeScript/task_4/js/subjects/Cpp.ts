/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {

    // export interface Teacher {
    //     experienceTeachingC?: number;
    // }
    /**
     * Class representing the C++ subject.
     */
    export class Cpp extends Subject {
      /**
       * Returns the list of requirements for C++.
       * @returns A string with the requirements for C++.
       */
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      /**
       * Returns the availability of the teacher for C++.
       * @returns A string with the teacher's availability.
       */
      getAvailableTeacher(): string {
        // return this.teacher.experienceTeachingC > 0 ? `Available Teacher:${this.teacher.firstName}` : 'No available teacher';
        if (this.teacher.experienceTeachingC > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }
  