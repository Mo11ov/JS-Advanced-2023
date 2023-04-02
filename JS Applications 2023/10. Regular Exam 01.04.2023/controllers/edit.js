import { html } from "../node_modules/lit-html/lit-html.js";
import { updatePost, getById } from '../src/api/data.js'
import { createSubmitListener } from "../src/util.js";

const editTemplate = (post, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Fruit</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="name" .value=${post.name} id="name" placeholder="Fruit Name" />
            <input type="text" name="imageUrl" .value=${post.imageUrl} id="Fruit-image" placeholder="Fruit Image URL" />
            <textarea id="fruit-description" name="description" .value=${post.description} placeholder="Description"
                rows="10" cols="50"></textarea>
            <textarea id="fruit-nutrition" name="nutrition" .value=${post.nutrition} placeholder="Nutrition" rows="10"
                cols="50"></textarea>
            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(context) {
    const id = context.params.id;
    const post = await getById(id);
    context.render(editTemplate(post, createSubmitListener(onEdit)));

    async function onEdit({ name, imageUrl, description, nutrition }, form) {
        if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
            return alert('Please fill all required fields!');
        }
        await updatePost(id, {
            name,
            imageUrl,
            description,
            nutrition,
        });

        form.reset();
        context.page.redirect('/catalog');
    }
}