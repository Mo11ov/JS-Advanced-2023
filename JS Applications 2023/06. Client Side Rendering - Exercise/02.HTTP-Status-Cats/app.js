import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats as catsData } from './catSeeder.js';

const section = document.getElementById('allCats');

const catTemplate = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${()=> toggleInfo(cat)} class="showBtn">${cat.info ? 'Hide status code' : 'Show status code'}</button>
        ${cat.info ? html`<div class="status" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>` : null}
    </div>
</li>`;

catsData.forEach(x => x.info == false);

function update() {
    render(html`<ul>${catsData.map(x => catTemplate(x))}</ul>`, section);
}

function toggleInfo(cat) {
    cat.info = !cat.info;
    update();
}

update();