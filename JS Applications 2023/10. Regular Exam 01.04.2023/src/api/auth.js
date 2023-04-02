import { get, post } from './api.js';
import { createUserData, deleteUserData } from '../util.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });
    createUserData(user);
}

export async function register(email, password) {
    const user = await post(endpoints.register, { email, password });
    createUserData(user);
}

export function logout() {
    get(endpoints.logout);
    deleteUserData();
}