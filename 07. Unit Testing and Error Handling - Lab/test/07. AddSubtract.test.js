const { assert } = require('chai');
const createCalculator = require('../07. AddSubtract');

describe('Tests for Add / Subtract function', function () {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator()
    });

    it('returned value is obj', function () {
        assert.isObject(calc, true);
    });

    it('returns 0 with no input', function () {
        assert.equal(calc.get(), 0);
    });

    it('can add values', function () {
        calc.add(1);
        assert.equal(calc.get(), 1);
    });

    it('can subtract values', function () {
        calc.subtract(1);
        assert.equal(calc.get(), -1);
    });

    it('can add and subtract at the same time', function () {
        calc.add(2);
        calc.subtract(1);
        assert.equal(calc.get(), 1);
    });

    it('can add with string values', function () {
        calc.add('1');
        assert.equal(calc.get(), 1);
    });

    it('should return NaN if input is text', function () {
        calc.add('qwerty');
        assert.isNaN(calc.get());
    });
});