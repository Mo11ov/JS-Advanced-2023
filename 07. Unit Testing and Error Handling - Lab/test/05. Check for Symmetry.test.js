const { expect, assert } = require('chai');
const isSymmetric = require('../05. Check for Symmetry')

describe('Symmetry function checker', function () {
    it('returns true for symmetrical array', () => {
        const arr = [1, 2, 2, 1]; 
        //expect(isSymmetric(arr)).to.be.true;
        assert.equal(isSymmetric(arr), true);
    });

    // it('returns false for ')
});