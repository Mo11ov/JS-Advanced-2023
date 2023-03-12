const { expect, assert } = require('chai');
const isSymmetric = require('../05. Check for Symmetry')

describe('Symmetry function checker', function () {
    it('returns true for symmetrical array', () => {
        const arr = [1, 2, 2, 1];
        //expect(isSymmetric(arr)).to.be.true;
        assert.equal(isSymmetric(arr), true);
    });

    it('returns true for symmetrical array with string values', () => {
        const arr = ['1', '2', '2', '1'];
        //expect(isSymmetric(arr)).to.be.true;
        assert.equal(isSymmetric(arr), true);
    });

    it('returns false for non array input', function () {
        const arr = 'aba';
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false for non symmetrical array', function () {
        const arr = [1, 2, 2, 3];
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false if one of the values in array is string', function () {
        const arr = [1, 2, 2, '1'];
        expect(isSymmetric(arr)).to.be.false;
    });
});