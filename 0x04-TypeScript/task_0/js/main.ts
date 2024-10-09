interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "Simon",
  lastName: "Tanyi",
  age: 20,
  location: "Tiko"
}

const student2: Student = {
  firstName: "John",
  lastName: "Egbe",
  age: 21,
  location: "Buea"
}

const studentsList: Student[] = [student1, student2];

// Function to render a table
function renderTable(students: Student[]) {
  // Create table element
  const table = document.createElement('table');
  table.border = '1'; 

  // Create a table header
  const header = table.createTHead();
  const headerRow = header.insertRow();
  const th1 = document.createElement('th');
  th1.innerText = 'First Name';
  const th2 = document.createElement('th');
  th2.innerText = 'Location';
  headerRow.appendChild(th1);
  header.appendChild(th2);

  // Create a table body
  const tbody = table.createTBody();

  // Append rows for each student
  students.forEach(student => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    cell1.innerText = student.firstName;
    const cell2 = row.insertCell();
    cell2.innerText = student.location;
  });

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);