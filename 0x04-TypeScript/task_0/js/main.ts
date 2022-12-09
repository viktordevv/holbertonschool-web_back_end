interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const studentx1 = Student {
    firstname: 'Gustavo',
    lastname: 'Petro',
    age: 45,
    location: 'Casa narino'
}

const studentx2 = Student {
    firstname: 'Alvaro',
    lastname: 'Uribe',
    age: 55,
    location: 'La Picota'
}

const studentList = [studentx1, studentx2];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th1: HTMLTableHeaderCellElement = row.insertCell(0);
const th2: HTMLTableHeaderCellElement = row.insertCell(1);
th1.innerHTML = ("<b>First name</b>");
th2.innerHTML = ("<b>Location</b>");

const body: HTMLTableSectionElement = table.createTBody();
studentList.map((student) => {
    const row: HTMLTableRowElement = body.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    cell1.innerHTML = student.firstname;
    cell2.innerHTML = student.location;
})
