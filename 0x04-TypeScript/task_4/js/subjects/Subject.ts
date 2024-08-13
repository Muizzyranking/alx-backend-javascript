namespace Subjects {
    /**
     * Class representing a generic subject.
     */
    export class Subject {
      teacher: Teacher;
  
      /**
       * Sets the teacher for the subject.
       * @param teacher - The teacher to set.
       */
      set setTeacher(teacher: Teacher) {
        this.teacher = teacher;
      }
    }
  }
  