abstract class Job {
    protected type: string
    constructor(type: string){
        this.type = type
    }
    printType(): void {
        console.log(`Loại công việc: ${this.type}`)
    }
    abstract calculateSalary(): number
}
class fulltimeJob extends Job {
    constructor(type: string){
        super(type)
    }
    calculateSalary(): number {
        return 10000000
    }
}
class parttimeJob extends Job {
    private workingHour: number
    constructor(type: string, workingHour: number){
        super(type)
        this.workingHour = workingHour
    }
    calculateSalary(): number {
        return 30000 * this.workingHour
    }
}
const newFull = new fulltimeJob("Bank")
const newPart = new parttimeJob("Restaurant", 120)
newFull.printType()
console.log(`Lương fullTime: ${newFull.calculateSalary()}`)
newPart.printType()
console.log(`Lương partTime: ${newPart.calculateSalary()}`)