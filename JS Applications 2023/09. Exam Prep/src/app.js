import page from '../node_modules/page/page.mjs';
import { getUserData } from './util.js';
import { render } from '../node_modules/lit-html/lit-html.js'
import { layoutTemplate } from '../controllers/layout.js';
import { homePage } from '../controllers/home.js';
import { catalogPage } from '../controllers/catalog.js';
import { loginPage } from '../controllers/login.js';
import { logout } from './api/auth.js';
import { registerPage } from '../controllers/register.js';
import { createPage } from '../controllers/create.js';
import { detailsPage } from '../controllers/details.js';
import { editPage } from '../controllers/edit.js';

const root = document.getElementById('wrapper');

page(decorateContext);
page('/', homePage);
page('/login', loginPage)
page('/logout', onLogoutAction)
page('/register', registerPage)
page('/catalog', catalogPage);
page('/create', createPage);
page('/catalog/:id', detailsPage)
page('/catalog/:id/edit', editPage)

page.start();

function decorateContext(context, next) {
    context.render = renderView;
    next();
}

function renderView(content) {
    const user = getUserData();
    render(layoutTemplate(user, content), root);
}

function onLogoutAction() {
    logout();
    page.redirect('/catalog');
}