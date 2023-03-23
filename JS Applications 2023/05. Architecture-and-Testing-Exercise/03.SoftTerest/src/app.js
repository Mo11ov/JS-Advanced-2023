import { showHome } from '../controllers/home.js';
import { showLogin } from '../controllers/login.js';
import { showRegister } from '../controllers/register.js';
import { showCatalog } from '../controllers/catalog.js';
import { showCreate } from '../controllers/create.js';
import { showDetails } from '../controllers/details.js';
import { initialize } from './router.js';

document.getElementById('views').remove();

const links = {
    '/catalog': showCatalog,
    '/create': showCreate,
    '/details': showDetails,
    '/': showHome,
    '/login': showLogin,
    '/register': showRegister,
}

const router = initialize(links);
router.updateNav();

// Starts app in home view
router.goTo('/');