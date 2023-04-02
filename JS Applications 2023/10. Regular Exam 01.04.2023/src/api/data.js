import { get, post, put, del } from './api.js';

const endpoints = {
    getAll: '/data/fruits?sortBy=_createdOn%20desc',
    getById: '/data/fruits/',
    create: '/data/fruits',
    update: '/data/fruits/',
    delete: '/data/fruits/',
    search: (searchParam) => `/data/fruits?where=name%20LIKE%20%22${searchParam}%22`,
} 

export async function getAll() {
    return await get(endpoints.getAll);
}

export async function getById(postId) {
    return await get(endpoints.getById + postId);
}

export async function createPost(data) {
    return await post(endpoints.create, data);
}

export async function updatePost(postId, data) {
    return await put(endpoints.update + postId, data);
}

export async function deletePost(postId) {
    return del(endpoints.delete + postId);
}

export async function searchFruits(query) {
    return await get(endpoints.search(query));
}
