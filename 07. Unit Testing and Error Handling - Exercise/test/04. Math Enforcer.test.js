const { assert } = require('chai');
const mathEnforcer = require('../04. Math Enforcer');

describe('mathEnforcer obj functions test', function () {
    describe('addFive function tests', function () {
        it('retruns undefined if value is not a number', function () {
            assert.equal(mathEnforcer.addFive('1'), undefined);
        });

        it('returns correct Sum', function () {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('returns correct Sum with negative numbers', function () {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it('returns correct Sum with floating point number', function () {
            assert.equal(mathEnforcer.addFive(5.15), 10.15);
        });

        it('returns undefined if no value is passed', function () {
            assert.equal(mathEnforcer.addFive(), undefined);
        });
    });

    describe('subtractTen function tests', function () {
        it('retruns undefined if value is not a number', function () {
            assert.equal(mathEnforcer.subtractTen('1'), undefined);
        });

        it('returns correct Sum', function () {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        });

        it('returns correct Sum with negative numbers', function () {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });

        it('returns correct Sum with floating point numbers', function () {
            assert.equal(mathEnforcer.subtractTen(-5.5), -15.5);
        });

        it('returns undefined if no value is passed', function () {
            assert.equal(mathEnforcer.subtractTen(), undefined);
        });
    });

    describe('sum function tests', function () {
        it('returns undefined if num1 is not a number', function () {
            assert.equal(mathEnforcer.sum('1', 1), undefined);
        });

        it('returns undefined if num2 is not a number', function () {
            assert.equal(mathEnforcer.sum(1, '1'), undefined);
        });

        it('returns undefined if num1 is not passed', function () {
            assert.equal(mathEnforcer.sum(), undefined);
        });

        it('returns undefined if num2 is not passed', function () {
            assert.equal(mathEnforcer.sum(), undefined);
        });

        it('returns correct sum', function () {
            assert.equal(mathEnforcer.sum(5, 5), 10);
        });

        it('returns correct sum', function () {
            assert.equal(mathEnforcer.sum(-5, 5), 0);
        });

        it('returns correct sum with floating point numbers', function () {
            assert.equal(mathEnforcer.sum(5.5, 5.5), 11);
        });

    });
});