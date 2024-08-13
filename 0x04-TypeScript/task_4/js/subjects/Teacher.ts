namespace Subjects {
    /**
     * Interface representing a Teacher.
     */
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingC?: number; // Optional attribute for C experience
      experienceTeachingJava?: number; // Optional attribute for Java experience
      experienceTeachingReact?: number; // Optional attribute for React experience
    }
  }
  