import { register } from '../src/api/users.js';
import { html } from '../src/lib.js';


const registerTemplate = (onSubmit) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`;

function registerPage(context) {
    context.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const { email, password, rePass } = Object.fromEntries(formData.entries());

        try {

            if (email == '' || password == '') {
                throw new Error('All fields are required!');
            }

            if (password != rePass) {
                throw new Error('Password and Repeat don`t match!');
            }

            await register(email, password);
            context.updateNav();
            context.page.redirect('/');

        } catch (error) {
            alert(error.message)
        }
    }
}

export {
    registerPage,
}