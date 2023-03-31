import { get, post, put, del } from './api.js';

const endpoints = {
    getAll: '/data/offers?sortBy=_createdOn%20desc',
    getById: '/data/offers/',
    create: '/data/offers',
    update: '/data/offers/',
    delete: '/data/offers/',
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