function solve(input) {
    const juices = new Map();
    const bottles = new Map();

    for (const line of input) {
        [flavour, qty] = line.split(' => ');
        qty = Number(qty);

        if (!juices.has(flavour)) {
            juices.set(flavour, 0);
        }
        const currQty = juices.get(flavour)
        juices.set(flavour, currQty + qty);

        if (juices.get(flavour) >= 1000) {
            if (!bottles.has(flavour)) {
                bottles.set(flavour, 0)
            }

            const currBottles = Math.trunc(juices.get(flavour) / 1000);
            const totalBottles = bottles.get(flavour);
            bottles.set(flavour, totalBottles + currBottles);

            const currJuice = juices.get(flavour)
            juices.set(flavour, currJuice % 1000);
        }
    }

    return Array.from(bottles.entries()).map(x => `${x[0]} => ${x[1]}`).join('\n');
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])