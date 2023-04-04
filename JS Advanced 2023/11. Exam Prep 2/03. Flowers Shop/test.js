const { expect } = require('chai');
const flowerShop = require('./flowerShop.js');

describe('Flower shop tests', function () {
    describe('calcPriceOfFlowers function test', function () {
        it('check for invalid inputs', function () {
            expect(() => flowerShop.calcPriceOfFlowers('string', 'string', 'string').to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1).to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers(1, 'string', 1).to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 'string').to.throw('Invalid input!'));
        });

        it('check for valid input', function () {
            expect(flowerShop.calcPriceOfFlowers('string', 2, 2)).to.equal(`You need $4.00 to buy string!`);
            expect(flowerShop.calcPriceOfFlowers('string', 4, 2)).to.equal(`You need $8.00 to buy string!`);
            expect(flowerShop.calcPriceOfFlowers('string', 0, 2)).to.equal(`You need $0.00 to buy string!`);
        });
    });

    describe('checkFlowersAvailable function test', function () {
        it('check for available flower', function () {
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equal('The Lily are available!');
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Orchid"])).to.equal('The Lily are sold! You need to purchase more!');
           
        });
    });

    describe('sellFlowers function test', function () {
        const arr = ["Rose", "Lily", "Orchid"];
        it('check for invalid input', function () {
            expect(() => flowerShop.sellFlowers(1, 1).to.throw('Invalid input!'));
            expect(() => flowerShop.sellFlowers('string', 1).to.throw('Invalid input!'));
            expect(() => flowerShop.sellFlowers(arr, -1).to.throw('Invalid input!'));
            expect(() => flowerShop.sellFlowers(arr, 4).to.throw('Invalid input!'));
        });

        it('check for valid input', function () {
            expect(flowerShop.sellFlowers(arr, 0)).to.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(arr, 1)).to.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(arr, 2)).to.equal('Rose / Lily');
        });
    });
});