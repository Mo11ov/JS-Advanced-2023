class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        const x = point2.x - point1.x;
        const y = point2.y - point1.y;
        const distance = Math.sqrt(x ** 2 + y ** 2);

        return distance;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));