import { html } from '../node_modules/lit-html/lit-html.js';
import { login } from '../src/api/auth.js';
import { createSubmitListener } from '../src/util.js';

const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onLogin}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`;

export function loginPage(context) {
    context.render(loginTemplate(createSubmitListener(onLogin)));

    async function onLogin({ email, password }, form) {

        if (email == '' || password == '') {
            return alert('Please fill all fields!'); 
        }

        await login(email, password);
        form.reset();
        // User redirect to app requirement
        context.page.redirect('/catalog');
    }
}