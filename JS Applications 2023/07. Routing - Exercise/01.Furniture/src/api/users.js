import { post, get } from './api.js';

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
}

async function login(email, password) {
    const user = await post(endpoints.login, { email, password });
    localStorage.setItem('user', JSON.stringify(user));
}

async function register(email, password) {
    const user = await post(endpoints.register, { email, password });
    localStorage.setItem('user', JSON.stringify(user));
}

async function logout() {
    get(endpoints.logout);
    localStorage.removeItem('user');
}

export {
    login,
    register,
    logout,
}