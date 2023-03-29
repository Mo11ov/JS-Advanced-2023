import { html } from '../src/lib.js';
import { getById, updateItem } from '../src/api/data.js';

const editTemplate = (item, onEdit, validData) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onEdit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control ${validData.make}" id="new-make" type="text" name="make" .value=${item.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control ${validData.model}" id="new-model" type="text" name="model" .value=${item.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control ${validData.year}" id="new-year" type="number" name="year" .value=${item.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control ${validData.description}" id="new-description" type="text" name="description" .value=${item.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control ${validData.price}" id="new-price" type="number" name="price" .value=${item.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control ${validData.img}" id="new-image" type="text" name="img" .value=${item.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`;

let validData = {
    make: '',
    model: '',
    year: '',
    description: '',
    price: '',
    img: '',
};

async function editPage(context) {
    const item = await getById(context.params.id);
    context.render(editTemplate(item, onEdit, validData));

    async function onEdit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let { make, model, year, description, price, img, material } = Object.fromEntries(formData.entries());

        price = Number(price);
        year = Number(year);
        let isInValid = false;

        if (!make || make.length < 4) {
            validData.make = 'is-invalid';
            isInValid = true;
        } else {
            validData.make = 'is-valid';
        }

        if (!model || model.length < 4) {
            validData.model = 'is-invalid';
            isInValid = true;
        } else {
            validData.model = 'is-valid';
        }

        if (!year || year < 1950 || year > 2050) {
            validData.year = 'is-invalid';
            isInValid = true;
        } else {
            validData.year = 'is-valid';
        }

        if (description.length <= 10) {
            validData.description = 'is-invalid';
            isInValid = true;
        } else {
            validData.description = 'is-valid';
        }

        if (!price || price <= 0) {
            validData.price = 'is-invalid';
            isInValid = true;
        } else {
            validData.price = 'is-valid';
        }

        if (img == '') {
            validData.img = 'is-invalid';
            isInValid = true;
        } else {
            validData.img = 'is-valid';
        } 

        if (isInValid) {
            return context.render(editTemplate(item, onEdit, validData));
        }

        const data = { make, model, year, description, price, img, material };

        await updateItem(item._id, data);
        context.page.redirect('/');
    }
}

export {
    editPage,
}