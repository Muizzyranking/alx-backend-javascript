/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {

    // export interface Teacher{
    //     experienceTeachingJava?: number
    // }
    /**
     * Class representing the Java subject.
     */
    export class Java extends Subject {
      /**
       * Returns the list of requirements for Java.
       * @returns A string with the requirements for Java.
       */
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      /**
       * Returns the availability of the teacher for Java.
       * @returns A string with the teacher's availability.
       */
      getAvailableTeacher(): string {
        // return this.teacher.experienceTeachingJava > 0 ? `Available Teacher: ${this.teacher.firstName}`: 'No available teacher';
        if (this.teacher.experienceTeachingJava > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }
  