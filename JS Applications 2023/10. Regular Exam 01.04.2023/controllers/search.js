import { html } from '../node_modules/lit-html/lit-html.js';
import { searchFruits } from '../src/api/data.js';
import { createSubmitListener } from "../src/util.js";

const searchTemplate = (fruits, onSearch) => html`
<section id="search">

    <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${onSearch}>
            <input type="text" name="search" id="search-input" />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
        <!--If there are matches display a div with information about every fruit-->
        ${fruits.length ? fruits.map(x => fruitTemplate(x)) : html`<p class="no-result">No result.</p>`}
    </div>
</section>`;

const fruitTemplate = (fruit) => html`
<div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
</div>`;

export async function searchPage(context) {
    let fruits = [];
    context.render(searchTemplate(fruits, createSubmitListener(onSearch)));

    async function onSearch({ search }, form) {
        if (search == '') {
            return alert('Please fill search field!');
        }

        fruits = await searchFruits(search)
        form.reset();
        context.render(searchTemplate(fruits, createSubmitListener(onSearch)));
        // context.page.redirect('/catalog');
    }
}
