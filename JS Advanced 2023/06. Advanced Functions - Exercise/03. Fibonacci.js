function getFibonator() {
    return (function () {
        const temp = this.curr + this.next;
        this.curr = this.next;
        this.next = temp;

        return this.curr;
    }).bind({
        curr: 0,
        next: 1,
    });
}

function fibonacci () {
    let curr = 0;
    let next = 1;
    let temp = 0;

    return function getNext() {
        [temp, curr, next] = [curr, next, curr + next];

        return curr;
    }
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
