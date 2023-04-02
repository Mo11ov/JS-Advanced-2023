import { html } from "../node_modules/lit-html/lit-html.js";
import { getById, deletePost } from "../src/api/data.js";
import { getUserData } from "../src/util.js";


const detailsTemplate = (post, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${post.imageUrl} alt="example1" />
        <p id="details-title">${post.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>
                    ${post.description}
                </p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">
                    ${post.nutrition}
                </p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${post.canEdit ? html`
            <div id="action-buttons">
                <a href="/catalog/${post._id}/edit" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : null}
        </div>
    </div>
</section>`;

export async function detailsPage(context) {
    const id = context.params.id;
    const post = await getById(id);
    const user = getUserData();

    if (user && user._id == post._ownerId) {
        post.canEdit = true;
    }


    context.render(detailsTemplate(post, onDelete));

    async function onDelete() {
        const choice = confirm('Are u sure u want to delete this Offer?');

        if (choice) {
            await deletePost(id);
            context.page.redirect('/catalog');
        }
    }
}