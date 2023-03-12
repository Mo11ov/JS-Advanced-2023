const { assert } = require('chai');
const lookupChar = require('../03. Char Lookup');

describe('Look up Char function tests', function () {
    it('returns undefined if string input is not string', function () {
        assert.equal(lookupChar(123, 0), undefined);
    });

    it('returns undefined if index is not a string', function () {
        assert.equal(lookupChar('Hola', 'test'), undefined);
    });

    it('retruns undefined if index is floating point number', function () {
        assert.equal(lookupChar('Hola', 3.14), undefined);
    });

    it('retruns "incorrect index" for negative index', function () {
        assert.equal(lookupChar('Hola', -1), 'Incorrect index');
    });

    it('returns "incorrect index" if index is bigger than string length', function () {
        assert.equal(lookupChar('Hola', 5), 'Incorrect index');
    });

    it('correct char', function () {
        assert.equal(lookupChar('Hola', 1), 'o');
    });
});