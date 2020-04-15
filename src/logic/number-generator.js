class NumberGenerator {

    constructor(numbers = []) {
        this.numbers = numbers;
    }

    isValidNumber(number) {
        if (this.numbers.includes(number)) return false;

        return true;
    }

    addNumber(number) {
        this.numbers.push(number);
    }

    generate() {
        const randomDecimalNumber = (Math.random() * (NumberGenerator.MAXIMUM - NumberGenerator.MINIMUM)) + NumberGenerator.MINIMUM;
        const randomNumber = Math.floor(randomDecimalNumber);

        if (!this.isValidNumber(randomNumber)) return this.generate();

        this.addNumber(randomNumber);
        return randomNumber;
    }

    generateSet() {
        while(this.number.length < NumberGenerator.MAXIMUM_NUMBER_LENGTH) {
            this.generate();
        }
    }

    getNumberSet() {
        return this.numbers;
    }
}

NumberGenerator.MAXIMUM_NUMBER_LENGTH = 7;
NumberGenerator.MINIMUM = 1;
NumberGenerator.MAXIMUM = 45;

module.exports = NumberGenerator;