import { html } from "../node_modules/lit-html/lit-html.js";
import { createPost } from "../src/api/data.js";
import { createSubmitListener } from "../src/util.js";

const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
        <h2>Add Fruit</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="name" id="name" placeholder="Fruit Name" />
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                cols="50"></textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
            <button type="submit">Add Fruit</button>
        </form>
    </div>
</section>`;

export function createPage(context) {
    context.render(createTemplate(createSubmitListener(onCreate)));

    async function onCreate({ name, imageUrl, description, nutrition }, form) {
        if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
            return alert('Please fill all required fields!');
        }

        await createPost({
            name,
            imageUrl,
            description,
            nutrition,
        });

        form.reset();
        context.page.redirect('/catalog');
    }
}