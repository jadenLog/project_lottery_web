const { expect } = require('chai');

const NumberGenerator = require('../src/logic/number-generator');

let numberGenerator;

describe('NumberGenerator', function() {
    before(function() {
        numberGenerator = new NumberGenerator();
    });

    it('should generate number', function() {
        const number = numberGenerator.generate();
        expect(number).to.be.a('number');
    });
});