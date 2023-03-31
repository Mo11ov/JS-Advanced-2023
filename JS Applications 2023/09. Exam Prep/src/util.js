const userData = 'userData';

export function getUserData() {
    return JSON.parse(localStorage.getItem(userData));
}

export function createUserData(data) {
    return localStorage.setItem(userData, JSON.stringify(data));
}

export function deleteUserData() {
    return localStorage.removeItem(userData);
}

export function createSubmitListener(callback) {
    return function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        callback(data, form);
    }
}