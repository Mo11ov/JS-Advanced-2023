import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const towns = document.getElementById('towns').value.split(',').map(x => x.trim());
    render(townsTemplate(towns), root);
});

const townsTemplate = (towns) => html`
    <ul>
        ${towns.map(x => html`<li>${x}</li>`)}
    </ul>`;