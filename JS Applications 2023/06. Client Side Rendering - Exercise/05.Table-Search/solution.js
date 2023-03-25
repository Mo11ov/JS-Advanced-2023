import { html, render } from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/table';
const tbody = document.querySelector('tbody');
document.getElementById('searchBtn').addEventListener('click', onSearch);

const rowTemplate = (student) => html`
<tr class=${student.match ? 'select' : ''}>
   <td>${student.item.firsName} ${student.item.lastName}</td>
   <td>${student.item.email}</td>
   <td>${student.item.course}</td>
</tr>`;

let students;

// Gets data from server and loads app 
async function start() {
   const response = await fetch(url);
   const data = await response.json();
   
   if (response.ok) {
      students = Object.values(data).map(x => ({item: x, match: false}));
   }

   update();
}

function update() {
   render(students.map(x => rowTemplate(x)), tbody);
}

function onSearch() {
   const input = document.getElementById('searchField');
   const text = input.value.trim().toLocaleLowerCase();

   for (const student of students) {
      // Sets match true or false if there is match 
      student.match = Object.values(student.item).some(x => text && x.toLocaleLowerCase().includes(text));
   }

   input.value = '';
   update();
}

start();