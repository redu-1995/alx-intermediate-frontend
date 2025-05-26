interface Student{
    firstname: string;
    lastname: string;
    age: number;
    location:string
}
const StudentA: Student={
  firstname:'Rediet',
  lastname:'Abreham',
  age:22,
  location:'Addis Abeba'
};

const StudentB: Student={
  firstname:'Selamawit',
  lastname:'Washiun',
  age:23,
  location:'Addis Abeba'
};

const studentsList: Student[] = [StudentA,StudentB];

const Table: HTMLTableElement = document.createElement('table')
const header = document.createElement('tr')

const firstnameHeader = document.createElement('th')
firstnameHeader.textContent = 'First Name'

const locationHeader = document.createElement('th')
locationHeader.textContent = 'Location'

header.appendChild(firstnameHeader);
header.appendChild(locationHeader)
Table.appendChild(header)

studentsList.forEach((student) => {
  const row = document.createElement('tr')
  const FirstCell = document.createElement('td')
  const SecondCell = document.createElement('td')

  FirstCell.textContent = student.firstname
  SecondCell.textContent = student.location

  row.appendChild(FirstCell)
  row.appendChild(SecondCell)
  Table.appendChild(row)
})


document.body.appendChild(Table)
