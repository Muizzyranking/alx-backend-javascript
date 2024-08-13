/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {

    // export interface Teacher{
    //     experienceTeachingReact?: number
    // }
    /**
     * Class representing the React subject.
     */
    export class React extends Subject {
      /**
       * Returns the list of requirements for React.
       * @returns A string with the requirements for React.
       */
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      /**
       * Returns the availability of the teacher for React.
       * @returns A string with the teacher's availability.
       */
      getAvailableTeacher(): string {
        // return this.teacher.experienceTeachingReact > 0 ? `Available Teacher: ${this.teacher.firstName}`: 'No available teacher'
        if (this.teacher.experienceTeachingReact > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }
  