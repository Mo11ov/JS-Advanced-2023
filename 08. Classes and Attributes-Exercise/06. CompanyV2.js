class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(name, salary, position, department) {
        if (this._isValid(name) || this._isValid(salary) || this._isValid(position) || this._isValid(department) || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        }

        const employees = this.departments.get(department);
        employees.push({ name, salary, position })

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const result = [];
        const avgDepSalary = {};

        Array.from(this.departments.entries()).forEach(dep => {
            const avgSalary = dep[1].reduce((a, b) => a + b.salary, 0) / dep[1].length;
            avgDepSalary[dep[0]] = { avgSalary };
        });

        const bestDeparment = Object.entries(avgDepSalary).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];

        result.push(`Best Department is: ${bestDeparment[0]}`);
        result.push(`Average salary: ${bestDeparment[1].avgSalary.toFixed(2)}`);

        this.departments
            .get(bestDeparment[0])
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(e => result.push(`${e.name} ${e.salary} ${e.position}`));

        return result.join('\n');
    }

    _isValid(param) {
        if (param === '' || param === undefined || param === null) {
            return true;
        }
        return false
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
