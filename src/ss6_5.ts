interface changeSpeed {
    speedUp(a: number): void
    slowDown(a: number): void
    stop(): void
}
class Vehicle implements changeSpeed {
    private speed: number
    constructor(speed: number = 0) {
        this.speed = speed
    }
    speedUp(a: number): void {
        this.speed += a
        console.log(`Tốc độ hiện tại: ${this.speed}`)
    }
    slowDown(a: number): void {
        this.speed -= a
        console.log(`Tốc độ hiện tại: ${this.speed}`)
    }
    stop(): void {
        this.speed = 0
        console.log("Xe đã dừng")
    }
}
const newVehicle = new Vehicle()
newVehicle.speedUp(40)
newVehicle.slowDown(10)
newVehicle.stop()