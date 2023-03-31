import { html } from "../node_modules/lit-html/lit-html.js";
import { updatePost, getById } from '../src/api/data.js'
import { createSubmitListener } from "../src/util.js";

const editTemplate = (post, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="title" .value=${post.title} id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" .value=${post.imageUrl} id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" .value=${post.category} id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" .value=${post.description} placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" .value=${post.requirements} placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" .value=${post.salary} id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(context) {
    const id = context.params.id;
    const post = await getById(id);
    context.render(editTemplate(post, createSubmitListener(onEdit)));

    async function onEdit({ title, imageUrl, category, description, requirements, salary }, form) {
        if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
            return alert('Please fill all required fields!');
        }

        await updatePost(id, {
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary
        });

        form.reset();
        context.page.redirect('/catalog');
    }
}