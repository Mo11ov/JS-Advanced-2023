(function solve () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this.toString();
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this.toString() + str;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function (str) {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            const lastIndex = this.toString().substring(0, n - 2).lastIndexOf(' ');

            if (lastIndex !== -1) {
               return this.toString().substring(0, lastIndex) + '...'; 
            } else {
                return this.toString().substring(0, n - 3) + '...';
            }
        }
    };

    String.format = function (string, ...params) {
        let str = string;

        params.forEach((p, i) => {
            str = str.replace(`{${i}}`, p);
        })

        return str;
    }
})()

let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
  'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
  'dog'));