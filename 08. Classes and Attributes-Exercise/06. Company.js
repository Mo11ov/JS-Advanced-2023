class Company {
    constructor() {
        this.departments = new Map();
        this.depWithAvgSalary = new Map();
    }

    addEmployee(name, salary, position, department) {
        if (this._isValid(name) || this._isValid(salary) || this._isValid(position) || this._isValid(department) || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
            this.depWithAvgSalary.set(department, {
                totalEmployees: 0,
                totalSalaries: 0,
                averageSalary: 0,
            });
        }

        const employees  = this.departments.get(department);
        employees.push({name, salary, position})
        this.depWithAvgSalary.get(department).totalEmployees ++;
        this.depWithAvgSalary.get(department).totalSalaries += salary;
        this.depWithAvgSalary.get(department).averageSalary = 
        this.depWithAvgSalary.get(department).totalSalaries / this.depWithAvgSalary.get(department).totalEmployees;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const result = [];
        const bestAvgSalary = Array.from(this.depWithAvgSalary.entries()).sort((a, b) => b[1].averageSalary - a[1].averageSalary)[0];
        result.push(`Best Department is: ${bestAvgSalary[0]}`);
        result.push(`Average salary: ${bestAvgSalary[1].averageSalary.toFixed(2)}`);
        const bestDepartment = this.departments.get(bestAvgSalary[0]);
       
        bestDepartment.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        bestDepartment.forEach(e => {
            result.push(`${e.name} ${e.salary} ${e.position}`)
        });

        return result.join('\n');
    }

    _isValid(param) {
        if (param === '' || param === undefined || param === null) {
            return true;
        }      
        return false
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
