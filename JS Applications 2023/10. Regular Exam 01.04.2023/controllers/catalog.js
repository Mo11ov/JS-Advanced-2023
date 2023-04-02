import { html } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../src/api/data.js';

const catalogTemplate = (posts) => html`
<h2>Fruits</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${posts.length ? posts.map(x => postTemplate(x)) : html`
    <h2>No fruit info yet.</h2>`}
</section>`;

const postTemplate = (post) => html`
<div class="fruit">
    <img src=${post.imageUrl} alt="example1" />
    <h3 class="title">${post.name}</h3>
    <p class="description">${post.description}</p>
    <a class="details-btn" href="/catalog/${post._id}">More Info</a>
</div>`;

export async function catalogPage(context) {
    const posts = await getAll();
    context.render(catalogTemplate(posts));
}

// async function loadPosts() {
//     const posts = await getAll();
//     return posts.map(x => postTemplate(x));
// }