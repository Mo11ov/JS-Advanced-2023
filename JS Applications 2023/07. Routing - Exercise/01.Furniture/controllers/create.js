import { createItem } from '../src/api/data.js';
import { html } from '../src/lib.js';

const createTemplate = (onSubmit, validData) => html`
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control ${validData.make}" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control ${validData.model}" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control ${validData.year}" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control ${validData.description}" id="new-description" type="text"
                    name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control ${validData.price}" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control ${validData.img}" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
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



function createPage(context) {
    context.render(createTemplate(onSubmit, validData));

    async function onSubmit(event) {
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
            return context.render(createTemplate(onSubmit, validData));
        }

        const data = { make, model, year, description, price, img, material };

        await createItem(data);
        context.page.redirect('/');
    }
}

export {
    createPage,
}

    // Returns form data in array of arrays
    // const formData = [...(new FormData(event.target)).entries()];
    // Makes arrays data in to an Object ['model, 'value'] => { model: 'value' }
    // const data = formData.reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
    // Returns empty fields
    // const missing = formData.filter(([k, v]) => k != 'material' && v == '');