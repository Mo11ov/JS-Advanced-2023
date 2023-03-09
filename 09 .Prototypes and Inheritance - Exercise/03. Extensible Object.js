function extensibleObject() {
    const obj = {};
    const instance = Object.create(obj);

    instance.extend = function (template) {
        const objEntries = Object.entries(template);

        for (const [key, value] of objEntries) {
            if(typeof value === 'function') {
                obj[key] = value;
            } else {
                instance[key] = value;
            }
        }
    }

    return instance;
}
