import { html } from "../node_modules/lit-html/lit-html.js";
import { getById, deletePost } from "../src/api/data.js";
import { getUserData } from "../src/util.js";


const detailsTemplate = (post, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${post.imageUrl} alt="example1" />
        <p id="details-title">${post.title}</p>
        <p id="details-category">
            Category: <span id="categories">${post.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${post.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${post.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${post.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>

        <!--Edit and Delete are only for creator-->
        ${post.canEdit ? html`
        <div id="action-buttons">
            <a href="/catalog/${post._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>

            <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="" id="apply-btn">Apply</a>
        </div>` : null}
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