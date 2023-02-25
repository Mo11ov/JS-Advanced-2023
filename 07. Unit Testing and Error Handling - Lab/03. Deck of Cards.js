function printDeckOfCards(cards) {
    function createCard(faceInput, suitInput) {
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

    const result = [];

    for (const card of cards) {
        const face = card.slice(0, card.length - 1)
        const suit = card[card.length - 1];
        
        try {
            const currCard = createCard(face, suit);
            result.push(currCard);
        } catch (error) {   
            return console.log(`Invalid card: ${card}`);
        }
        
    }

    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
