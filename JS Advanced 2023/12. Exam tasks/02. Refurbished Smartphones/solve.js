class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model == '' || storage < 0 || price < 0 || condition == '') {
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({ model, storage, price, condition });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const index = this.availableSmartphones.findIndex(x => x.model == model);
        const phone = this.availableSmartphones[index];

        if (phone == undefined) {
            throw new Error(`${model} was not found!`);
        }

        const sold = {
            model: phone.model,
            storage: phone.storage,
            condition: phone.condition,
        }

        if (phone.storage >= desiredStorage) {
            sold.soldPrice = phone.price;
        } else if (desiredStorage - phone.storage <= 128) {
            sold.soldPrice = phone.price * 0.9;
        } else {
            sold.soldPrice = phone.price * 0.8;
        }

        this.soldSmartphones.push(sold);
        this.availableSmartphones.slice(index, 1);
        this.revenue += sold.soldPrice;

        return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length == 0) {
            throw new Error("There are no available smartphones!");
        }
        this.availableSmartphones.forEach(x => x.storage *= 2);
        const result = [...this.availableSmartphones.map(x => `${x.model} / ${x.storage} GB / ${x.condition} condition / ${x.price.toFixed(2)}$`)];
        result.unshift('Upgraded Smartphones:')

        return result.join('\n');
    }

    salesJournal(criteria) {
        if (criteria == 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria == 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        const result = [...this.soldSmartphones.map(x => `${x.model} / ${x.storage} GB / ${x.soldPrice.toFixed(2)}$`)];
        result.unshift(`${this.soldSmartphones.length} smartphones sold:`);
        result.unshift(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);

        return result.join('\n');
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));


// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());


let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
