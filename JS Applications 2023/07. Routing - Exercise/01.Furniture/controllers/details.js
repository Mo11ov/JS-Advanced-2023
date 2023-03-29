import { deleteItem, getById } from '../src/api/data.js';
import { html } from '../src/lib.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${item.make}</span></p>
        <p>Model: <span>${item.model}</span></p>
        <p>Year: <span>${item.year}</span></p>
        <p>Description: <span>${item.description}</span></p>
        <p>Price: <span>${item.price}</span></p>
        <p>Material: <span>mat${item.material}erial</span></p>
        ${isOwner ? html`<div>
            <a href=${`/edit/${item._id}`} class="btn btn-info">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
        </div>` : null}
    </div>
</div>`;

async function detailsPage(context) {
    const item = await getById(context.params.id);
    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user._id == item._ownerId;

    context.render(detailsTemplate(item, isOwner, onDelete));

    async function onDelete() {
        await deleteItem(item._id);
        context.page.redirect('/');
    }
}

export {
    detailsPage,
}