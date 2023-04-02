import { html } from '../node_modules/lit-html/lit-html.js';
import { register } from '../src/api/auth.js';
import { createSubmitListener } from '../src/util.js';

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onRegister}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export function registerPage(context) {
    context.render(registerTemplate(createSubmitListener(onRegister)));

    async function onRegister({ email, password, ['re-password']: rePass }, form) {

        if (email == '' || password == '') {
            return alert('Please fill all fields!');
        }

        if (password != rePass) {
            return alert('Password and Confirm Password must match!');
        }

        await register(email, password);
        form.reset();
        // User redirect to app requirement
        context.page.redirect('/catalog');
    }
}