document.getElementById('loadBooks').addEventListener('click', getAllBooks);

const url = 'http://localhost:3030/jsonstore/collections/books';
const tbody = document.querySelector('table tbody');
const h3 = document.querySelector('h3');
const formName = document.querySelector('[name="author"]');
const formTitle = document.querySelector('[name="title"]');
const submitBtn = document.querySelector('form button');
submitBtn.addEventListener('click', buttonDelegation);

function buttonDelegation(e) {
    if (e.target.textContent === 'Save') {
        onEdit(e);
    } else if (e.target.textContent === 'Submit') {
        createBook(e);
    }
}

async function getAllBooks() {
    try {
        tbody.replaceChildren();
        const response = await fetch(url);
        const data = await response.json();

        Object.entries(data).forEach(([id, bookInfo]) => {
            const tr = document.createElement('tr');
            const titleTd = Object.assign(document.createElement('td'), { textContent: `${bookInfo.title}` });
            const nameTd = Object.assign(document.createElement('td'), { textContent: `${bookInfo.author}` });
            // Buttons
            const buttonTd = document.createElement('td');
            const editBtn = Object.assign(document.createElement('button'), { textContent: 'Edit' }, { id: id });
            const deleteBtn = Object.assign(document.createElement('button'), { textContent: 'Delete' }, { id: id });
            deleteBtn.addEventListener('click', onDelete);
            editBtn.addEventListener('click', formChange);

            buttonTd.appendChild(editBtn);
            buttonTd.appendChild(deleteBtn);
            tr.appendChild(titleTd);
            tr.appendChild(nameTd);
            tr.appendChild(buttonTd);
            tbody.appendChild(tr);
        })

    } catch (error) {
        return alert(error);
    }
}

async function createBook(event) {
    event.preventDefault();
    try {
        if (!formName.value || !formTitle.value) {
            return alert('Fields cannont be empty!')
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({
                author: formName.value,
                title: formTitle.value,
            })
        })

    } catch (error) {
        return alert(error);
    }
    resetForm();
    getAllBooks();
}

async function onEdit(event) {
    event.preventDefault();
    try {
        const response = await fetch(`${url}/${event.target.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({
                author: formName.value,
                title: formTitle.value,
            })
        })
    } catch (error) {
        return alert(error);
    }
    resetForm();
    getAllBooks();
}

async function onDelete(event) {
    try {
        const response = await fetch(`${url}/${event.target.id}`, {
            method: 'DELETE'
        })
        
    } catch (error) {
        return alert(error);
    }
    resetForm();
    getAllBooks();
}

async function formChange(event) {
    try {
        h3.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
        submitBtn.setAttribute('id', `${event.target.id}`);

        const getResponse = await fetch(`${url}/${event.target.id}`);
        const data = await getResponse.json();
        const authorName = data.author;
        const title = data.title;
        formName.value = authorName;
        formTitle.value = title;
    } catch (error) {
        return alert(error);
    }
}

function resetForm() {
    submitBtn.textContent = 'Submit';
    h3.textContent = 'FORM';
    formName.value = '';
    formTitle.value = '';
}