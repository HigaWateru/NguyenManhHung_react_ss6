abstract class Shape {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
    abstract getSize(): void
}
class Rectangle extends Shape {
    private width: number
    private height: number
    constructor (name: string, width: number, height: number){
        super(name)
        this.width = width
        this.height = height
    }
    getSize(): void {
        console.log(`Chiều rộng: ${this.width}`)
        console.log(`Chiều cao: ${this.height}`)
    }
}
const newShape = new Rectangle("Hình chữ nhật", 7, 9)
console.log(newShape.getName())
newShape.getSize()