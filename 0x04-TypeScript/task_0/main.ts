interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'Ahmed',
  lastName: 'Saad',
  age: 35,
  location: 'Cairo',
};

const secondStudent: Student = {
  firstName: 'Sherief',
  lastName: 'Saad',
  age: 26,
  location: 'Cairo',
};

const studentsList: Array<Student> = [firstStudent, secondStudent];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
