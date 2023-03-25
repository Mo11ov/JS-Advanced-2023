import { html, render } from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const root = document.querySelector('div');
const form = document.querySelector('form');
form.addEventListener('submit', onAdd);

const listTemplate = (items) => html`
<select id="menu">
    ${items.map(x => html`<option value=${x._id}>${x.text}</option>`)}
</select>`;

async function getData() {
    const response = await fetch(url);
    const itemsData = await response.json();

    const result = listTemplate(Object.values(itemsData));
    render(result, root);
}

async function onAdd(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const input = formData.get('inputText');
    
    const text = {
        text: input
    }

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(text),
    });

    if (response.ok) {
        getData();
    }

    form.reset();
}

getData();