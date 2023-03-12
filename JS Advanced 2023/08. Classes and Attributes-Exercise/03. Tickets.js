function solve(array, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];

    for (const line of array) {
        [destination, price, stat] = line.split('|');
        price = Number(price);

        const currTicket = new Ticket(destination, price, stat);
        tickets.push(currTicket);
    }

    if (sortCriteria === 'destination') {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortCriteria === 'price') {
        tickets.sort((a, b) => b - a);
    } else if (sortCriteria === 'status') {
        tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return tickets
}

console.table(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));