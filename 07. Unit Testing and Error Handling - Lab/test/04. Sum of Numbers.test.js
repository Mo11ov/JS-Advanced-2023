const { expect, assert } = require('chai');
const sum = require('../04. Sum of Numbers');

describe('Sum of Numbers func checker', function () {
    it('works happy path', function () {
        expect(sum([1, 2])).to.equal(3);
    });

    it('works with negative numbers', function () {
        expect(sum([-2, -2])).to.equal(-4);
    });

    it('throws error for string values', function () {
        // assert.equal(isNaN(sum([1, 'a'])), true);
        expect(isNaN(sum([1, 'a']))).to.be.true;
    });
});