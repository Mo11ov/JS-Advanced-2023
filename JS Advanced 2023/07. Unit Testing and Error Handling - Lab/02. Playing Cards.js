function cardsFactory(faceInput, suitInput) {
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    if (!cards.includes(faceInput)) {
        throw new TypeError;
    }

    if (!suits.hasOwnProperty(suitInput)) {
        throw new TypeError;
    }

    return {
        face: faceInput,
        suit: suits[suitInput],
        toString() {
            return this.face + this.suit;
        }
    }
}

const cards = [
    cardsFactory('A', 'S'),
    cardsFactory('10', 'H'),
    // cardsFactory('1', 'C'),
]

console.log(cards.join('\n'));