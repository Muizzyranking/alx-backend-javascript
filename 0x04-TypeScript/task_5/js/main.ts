// task_5/js/main.ts

// Interface for MajorCredits
interface MajorCredits {
    credits: number;
    brand: "major"; // type `string`
  }
  
  // Interface for MinorCredits
  interface MinorCredits {
    credits: number;
    brand: "minor"; // type `string`
  }
  
  /**
   * Sums the credits for two MajorCredits objects.
   * @param subject1 - The first MajorCredits object.
   * @param subject2 - The second MajorCredits object.
   * @returns A new MajorCredits object with the total credits.
   */
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "major",
    };
  }
  
  /**
   * Sums the credits for two MinorCredits objects.
   * @param subject1 - The first MinorCredits object.
   * @param subject2 - The second MinorCredits object.
   * @returns A new MinorCredits object with the total credits.
   */
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "minor",
    };
  }
  
//   // Example usage
//   const major1: MajorCredits = { credits: 30, brand: "major" };
//   const major2: MajorCredits = { credits: 20, brand: "major" };
//   const totalMajor = sumMajorCredits(major1, major2);
//   console.log(`Total Major Credits: ${totalMajor.credits}`);
  
//   const minor1: MinorCredits = { credits: 15, brand: "minor" };
//   const minor2: MinorCredits = { credits: 10, brand: "minor" };
//   const totalMinor = sumMinorCredits(minor1, minor2);
//   console.log(`Total Minor Credits: ${totalMinor.credits}`);
  