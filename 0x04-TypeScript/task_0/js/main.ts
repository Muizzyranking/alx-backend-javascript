/**
 * Represents a student with basic information.
 */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * Create two students and add them to the studentsList array.
 */
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Using an array type to define the list of students
const studentsList: Student[] = [student1, student2];
// const studentsList: Array<Student> = [student1, student2];

/**
 * Create the table and append rows for each student.
 */

// const body = document.getElementsByTagName("body") as HTMLBodyElement;

// Type assertion to specify that document.body is an HTMLBodyElement
const body = document.body as HTMLBodyElement;

// Creating the table and tbody elements with type annotations
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Iterating over the studentsList array to create rows and cells
studentsList.forEach(student => {
  const row: HTMLTableRowElement = document.createElement("tr");

  // Creating cells for firstName and location
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  // Appending cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Appending the row to the tbody
  tbody.appendChild(row);
});

// Appending the tbody to the table and the table to the body
table.appendChild(tbody);
body.appendChild(table);
