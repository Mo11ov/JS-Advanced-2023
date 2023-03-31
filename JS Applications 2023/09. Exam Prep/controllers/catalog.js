import { html } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../src/api/data.js';

const catalogTemplate = (posts) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${posts.length ? posts.map(x => postTemplate(x)) : html`
    <h2>No offers yet.</h2>`}
</section>`;

const postTemplate = (post) => html`
<div class="offer">
    <img src=${post.imageUrl} alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${post.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${post.salary}</span></p>
    <a class="details-btn" href="/catalog/${post._id}">Details</a>
</div>`;

export async function catalogPage(context) {
    const posts = await getAll();
    context.render(catalogTemplate(posts));
}

// async function loadPosts() {
//     const posts = await getAll();
//     return posts.map(x => postTemplate(x));
// }