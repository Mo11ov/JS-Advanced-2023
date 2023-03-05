function solve(input) {
    const cars = new Map();

    for (const line of input) {
        [carBrand, carModel, qty] = line.split(' | ');
        qty = Number(qty);

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }

        const models = cars.get(carBrand);
        if (!models.has(carModel)) {
            models.set(carModel, 0)
        }

        const modelQty = models.get(carModel);
        models.set(carModel, modelQty + qty);
    }

    const result = [];
    for (const [brand, models] of cars) {
        result.push(brand)
        Array.from(models).forEach(x => result.push(`###${x[0]} -> ${x[1]}`))
    }

    return result.join('\n');
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);