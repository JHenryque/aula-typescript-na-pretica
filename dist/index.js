import data from "./data.js";
const students = JSON.parse(data);
console.log(students);
function addRow(table, student) {
    let tr = table.querySelector("tbody").insertRow();
    const name = tr.insertCell();
    name.appendChild(document.createTextNode(`${student.firstName} ${student.lastName}`));
    const age = tr.insertCell();
    age.appendChild(document.createTextNode((new Date().getFullYear() - parseInt(student.birthYear)).toString()));
    const majors = tr.insertCell();
    majors.appendChild(document.createTextNode(`${student.focusArea}`));
    const status = tr.insertCell();
    status.appendChild(document.createTextNode(`${student.dateRegistrationSuspended}`));
}
// select HTML table
function selectTable() {
    return document.querySelector("#students-table");
}
// add a row
addRow(selectTable(), students[0]);
