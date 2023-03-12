function solution() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const recipe = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20, },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, },
    };

    function restock(ingredient, qty) {
        stock[ingredient] += Number(qty);
        return `Success`;
    };

    function prepare(product, portions) {
        const order = Object.entries(recipe[product]);
        
        for (const [ingredient, reqQty] of order) {
            const reqAmount = reqQty * Number(portions);
            if (stock[ingredient] < reqAmount) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (const [ingredient, reqQty] of order) {
            const reqAmount = reqQty * Number(portions);
            stock[ingredient] -= reqAmount;
        }
        
        return `Success`;
    };

    function report() {
        const inStock = Object.entries(stock);
        const result = [];

        for (const [ingredient, stockQty] of inStock) {
            result.push(`${ingredient}=${stockQty}`);
        }

        return result.join(' ');
    }

    const commands = {
        restock,
        prepare,
        report,
    };

    function manager(line) {
        const [cmd, taskOrElement, qty] = line.split(' ');
        return commands[cmd](taskOrElement, qty);
    };

    return manager;
}



let manage = solution();
console.log(manage("restock carbohydrate 10")); // Success 
console.log(manage("restock flavour 10")); // Error: not enough carbohydrate in stock
console.log(manage("prepare apple 1")); // Success
console.log(manage("restock fat 10")); // Success
console.log(manage("prepare burger 1")); // Success
console.log(manage("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
