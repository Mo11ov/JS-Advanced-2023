const { expect } = require('chai');
const weddingDay = require('./weddingDay.js');

describe('Wedding', function () {
    describe('pickVenue function test', function () {
        it('check for invalid inputs', function () {
            expect(() => weddingDay.pickVenue('string', 'string', 1).to.throw('Invalid Information!'));
            expect(() => weddingDay.pickVenue('string', 1, 'Varna').to.throw('Invalid Information!'));
            expect(() => weddingDay.pickVenue(1, 'string', 'Varna').to.throw('Invalid Information!'));
            expect(() => weddingDay.pickVenue(1, 1, '').to.throw('Invalid Information!'));
            expect(() => weddingDay.pickVenue(1, 1, 1).to.throw('Invalid Information!'));
            expect(() => weddingDay.pickVenue(1, 1, 'string').to.throw('The location of this venue is not in the correct area!'));
        });

        it('check for valid input', function () {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(`This venue meets the requirements, with capacity of 150 guests and 120$ cover.`);
            expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal("This venue does not meet your requirements!");
            expect(weddingDay.pickVenue(145, 121, 'Varna')).to.equal("This venue does not meet your requirements!");
        });
    });

    describe('otherSpendings function test', function () {
        it('check for invalid inputs', function () {
            expect(() => weddingDay.otherSpendings([], [], 1).to.throw('Invalid Information!'));
            expect(() => weddingDay.otherSpendings(1, [], true).to.throw('Invalid Information!'));
            expect(() => weddingDay.otherSpendings([], 1, true).to.throw('Invalid Information!'));
        });

        it('check for valid input', function () {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true))
            .to.equal("You spend 2465$ for wedding decoration and photography with 15% discount!");

            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false))
            .to.equal("You spend 2900$ for wedding decoration and photography!");
        });
    });

    describe('tableDistribution function test', function () {
        it('check for invalid inputs', function () {
            expect(() => weddingDay.tableDistribution('string', 1).to.throw('Invalid Information!'));
            expect(() => weddingDay.tableDistribution(1, 'string').to.throw('Invalid Information!'));
            expect(() => weddingDay.tableDistribution(1, 0).to.throw('Invalid Information!'));
            expect(() => weddingDay.tableDistribution(0, 1).to.throw('Invalid Information!'));
        });

        it('check for valid input', function () {
            expect(weddingDay.tableDistribution(30, 6)).to.equal("There is only 5 people on every table, you can join some tables.");
            expect(weddingDay.tableDistribution(30, 5)).to.equal("You have 5 tables with 6 guests on table.");
        });
    });
});