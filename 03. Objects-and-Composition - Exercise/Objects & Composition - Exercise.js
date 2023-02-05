// Task 1
function calorieObject(array) {
    let result = {};

    for (let i = 0; i < array.length; i += 2) {
        const name = array[i];
        const quantity = Number(array[i + 1]);

        result[name] = quantity;
    }

    console.log(obj);
}

// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

// Task 2
function constructionCrew(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

// console.log(constructionCrew({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// }));

// Task 3
function carFactory(requirements) {
    const engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    const carrieages = [{ type: 'hatchback', color: requirements.color }, { type: 'coupe', color: requirements.color }];
    const wheelsize = requirements.wheelsize % 2 == 0 ? requirements.wheelsize - 1 : requirements.wheelsize;

    let car = {
        model: requirements.model,
        engine: engines.filter(e => e.power >= requirements.power)[0],
        carriage: carrieages.filter(c => c.type === requirements.carriage)[0],
        wheels: Array(4).fill(wheelsize),
    }

    return car;
}

// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));

// Task 4
function heroicInventory(array) {
    let result = [];

    for (let line of array) {
        let [name, level, items] = line.split(' / ');

        items = items ? items.split(', ') : [];
        level = Number(level);

        result.push({ name, level, items });
    }

    console.log(JSON.stringify(result));
}

function heroicInventoryvV2(array) {
    let result = [];

    for (let line of array) {
        let tokens = line.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if (tokens.length > 2) {
            let itemsToSplit = tokens[2].split(', ');
            for (let item of itemsToSplit) {
                items.push(item);
            }
        }

        result.push({ name, level, items });
    }

    console.log(JSON.stringify(result));
}

// heroicInventory([
//     'Isacc / 25',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']);

// Task 5
function lowestPrice(array) {
    let result = {};

    for (const line of array) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (result[product] == null) {
            result[product] = { town, price };
        }

        if (result[product].price > price) {
            result[product] = { town, price };
        }
    }

    let productNames = Object.keys(result);

    for (const name of productNames) {
        console.log(`${name} -> ${result[name].price} (${result[name].town})`);
    }
}

// lowestPrice([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']);

// Task 6
function storeCatalogue(array) {
    let result = {};
    // { letter A: {Anti-Bug Spray: 15, Apple: 1.25, Appricot: 20.4}}
    for (const line of array) {
        let [productName, price] = line.split(' : ');
        let key = productName[0];
        //price = Number(price);

        if (result[key] == null) {
            result[key] = {};
        }

        result[key][productName] = price;
    }

    const sortedKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));

    for (const sortedKey of sortedKeys) {
        let sortedProducts = Object.keys(result[sortedKey]).sort((a, b) => a.localeCompare(b));

        console.log(sortedKey);
        for (const product of sortedProducts) {
            console.log(`  ${product}: ${result[sortedKey][product]}`);
        }
    }
}

// storeCatalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']);

// Task 7\
function townsToJson(array) {
    let result = [];

    for (let i = 1; i < array.length; i++) {
        let tokens = array[i].split('|').map(x => x.trim()).filter(x => x);
        let Town = tokens[0];
        let Latitude = Number(tokens[1]).toFixed(2);
        let Longitude = Number(tokens[2]).toFixed(2);

        Latitude = Number(Latitude);
        Longitude = Number(Longitude);

        result.push({ Town, Latitude, Longitude });
    }

    console.log(JSON.stringify(result));
}

// townsToJson([
//     '| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']);

// Task 8
function rectangle(width, height, color) {
    let result = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return result.width * result.height;
        },
    }

    return result;
}

// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

// Task 9
function createSortedList() {
    let array = [];

    let result = { 
        add(element) {
            array.push(element);
            array.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index < array.length) {
                array.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            if (index >= 0 && index < array.length) {
                return array[index];
            }
        },
        size: 0,
    }

    return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));