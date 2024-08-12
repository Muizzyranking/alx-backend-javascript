interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students based on the interface
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];
// Function to render the table
function renderTable(): void {
  // Create the table element
  const table = document.createElement("table");

  // Iterate over each student in the studentsList
  studentsList.forEach((student) => {
    // Create a new row for each student
    const row = table.insertRow();

    // Create cells for firstName and location
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    // Set the text content of the cells
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the renderTable function to display the table on the webpage
renderTable();
