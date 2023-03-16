window.addEventListener('load', loadStudents);
document.getElementById('submit').addEventListener('click', onSubmit);

const url = 'http://localhost:3030/jsonstore/collections/students';
const tbody = document.querySelector('#results tbody');
const form = document.getElementById('form');

async function onSubmit(event) {
    event.preventDefault();
    const inputData = new FormData(form);
    const name = inputData.get('firstName');
    const lastName = inputData.get('lastName');
    const facultyNumber = inputData.get('facultyNumber');
    const grade = Number(inputData.get('grade'));

  

    try {

        if (!name || !lastName || !facultyNumber || !grade) {
            return alert('All fields need to be filled!');
        }
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({
                firstName: name,
                lastName: lastName,
                facultyNumber: facultyNumber,
                grade: grade,
            }),
        });
    } catch (error) {
        return alert(error);
    }

    loadStudents();
}

async function loadStudents() {
    tbody.replaceChildren();
    try {
        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach(x => {
            const tr = document.createElement('tr');
            const name = Object.assign(document.createElement('td'), {textContent: x.firstName});
            const lastName = Object.assign(document.createElement('td'), {textContent: x.lastName});
            const facNum = Object.assign(document.createElement('td'), {textContent: x.facultyNumber});
            const grade = Object.assign(document.createElement('td'), {textContent: x.grade});

            tr.appendChild(name);
            tr.appendChild(lastName);
            tr.appendChild(facNum);
            tr.appendChild(grade);
            tbody.appendChild(tr);
        });

    } catch (error) {
        return alert(error);
    }
}

