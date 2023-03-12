const { expect } = require('chai');
const rgbToHexColor = require('../06. RGB to Hex');

describe('RGB to Hex function test', function () {
    it('returns undefined for invalid red value', function () {
        expect(rgbToHexColor(256, 100, 100)).to.be.undefined;
    });

    it('returns undefined for negative blue value', function () {
        expect(rgbToHexColor(100, 100, -1)).to.be.undefined;
    });

    it('retunrs corect color grey', function () {
        expect(rgbToHexColor(100, 100, 100)).to.equal('#646464');
    });

    it('retunrs corect color white', function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('retunrs corect color black', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
});