class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(value) {
        this.list.push(value);
        this.sortList();
        this.size = this.list.length;
    }

    remove(value) {
        if (value >= 0 && value < this.list.length) {
            this.list.splice(value, 1);
            this.sortList();
            this.size = this.list.length;
        }
    }

    get(value) {
        if (value >= 0 && value < this.list.length) {
            return this.list[value];
        }
    }

    sortList() {
        this.list.sort((a, b) => a - b);
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);