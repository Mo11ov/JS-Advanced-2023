const { assert } = require('chai');
const isOddOrEven = require('../02. Even Or Odd');

describe('Even or Odd function tests', function() {
    it('retruns undefined if given value is obj', function() {
        assert.equal(isOddOrEven({}), undefined);
    });
    
    it('returns undefined if value is number', function () {
        assert.equal(isOddOrEven(1), undefined);
    });

    it('returns undefined if value is array', function () {
        assert.equal(isOddOrEven([]), undefined)
    });

    it('returns even', function () {
        assert.equal(isOddOrEven('Hola'), 'even');
    });

    it('returns odd', function () {
        assert.equal(isOddOrEven('Amigo'), 'odd');
    });
});