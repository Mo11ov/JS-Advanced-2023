import * as api from './api.js';

const endpoints = {
    all: '/data/catalog',
    byId: '/data/catalog/',
    byUser: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    update: '/data/catalog/',
    delete: '/data/catalog/',
}

async function getAll() {
    return api.get(endpoints.all);
}

async function getById(itemId) {
    return api.get(endpoints.byId + itemId);
}

async function getByUser(userId) {
    return api.get(endpoints.byUser(userId));
}

async function createItem(itemData) {
    return api.post(endpoints.create, itemData);
}

async function updateItem(itemId, itemData) {
    return api.put(endpoints.update + itemId, itemData);
}

async function deleteItem(itemId) {
    return api.delete(endpoints.delete + itemId);
}


export {
    getAll,
    getById,
    getByUser,
    createItem,
    updateItem,
    deleteItem,
}

