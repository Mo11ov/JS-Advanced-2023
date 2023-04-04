class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const index = this.books.findIndex(x => x.bookName == bookName);
        const book = this.books[index];

        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const index = this.books.findIndex(x => x.bookName == bookName);
        const book = this.books[index];

        if (book == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.slice(index, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (bookAuthor == undefined) {
            const emptySlots = this.capacity - this.books.length;
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            const result = [...this.books.map(x => `${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`)];
            result.unshift(`The book collection has ${emptySlots} empty spots left.`);
            return result.join('\n');
        } else {
            const book = this.books.find(x => x.bookAuthor == bookAuthor);

            if (book == undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;
        }
    }

}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));


// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

