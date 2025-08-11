"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class fulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
class parttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
const newFull = new fulltimeJob("Bank");
const newPart = new parttimeJob("Restaurant", 120);
newFull.printType();
console.log(`Lương fullTime: ${newFull.calculateSalary()}`);
newPart.printType();
console.log(`Lương partTime: ${newPart.calculateSalary()}`);
