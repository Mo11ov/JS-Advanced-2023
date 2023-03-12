// Task 1
function cityRecord(name, population, treasury) {
    let result = {
        name: name,
        population: population,
        treasury: treasury,
    };

    return result;
}

// console.log(cityRecord('Santo Domingo',
// 12000,
// 23500));

// Task 2
function townPopulation(inputArray) {
    let result = {};

    for (let line of inputArray) {
        const [name, population] = line.split(' <-> ');

        if (name in result == false) {
            result[name] = 0;
        }

        result[name] += Number(population);
    }

    console.log(Object.entries(result)
        .map(([name, population]) => `${name} : ${population}`)
        .join('\n'));
}

// townPopulation(['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']);

// Task 3
function cityTaxes(name, population, treasury) {
    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
            Math.floor(this.treasury);
        },
    }

    return result;
}

// const city = cityTaxes(
//     'Tortuga',
//     7000,
//     15000);

// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);

// Task 4
function functionFactory(library, orders){
    let result = [];

    for (let order of orders) {
        let current = Object.assign({}, order.template);

        for (let part of order.parts) {
            current[part] = library[part];
        }

        result.push(current);
    }

    return result;
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = functionFactory(library, orders);
  console.log(products);
  