import { page, render } from './lib.js';
// controllers aka views
import { catalogPage } from '../controllers/catalog.js';
import { loginPage } from '../controllers/login.js';
import { logout } from './api/users.js';
import { registerPage } from '../controllers/register.js';
import { createPage } from '../controllers/create.js';
import { detailsPage } from '../controllers/details.js';
import { editPage } from '../controllers/edit.js';

const root = document.querySelector('div.container');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', catalogPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-furniture', catalogPage);

updateNav();
page.start();

function decorateContext(context, next) {
    context.render = (content) => render(content, root);
    context.updateNav = updateNav;
    next();
}

async function onLogout() {
    await logout();
    updateNav();
    page.redirect('/');
}

function updateNav() {
    const user = localStorage.getItem('user');
    
    if (user) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block'; 
    }
}