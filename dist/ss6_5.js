"use strict";
class Vehicle {
    constructor(speed = 0) {
        this.speed = speed;
    }
    speedUp(a) {
        this.speed += a;
        console.log(`Tốc độ hiện tại: ${this.speed}`);
    }
    slowDown(a) {
        this.speed -= a;
        console.log(`Tốc độ hiện tại: ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log("Xe đã dừng");
    }
}
const newVehicle = new Vehicle();
newVehicle.speedUp(40);
newVehicle.slowDown(10);
newVehicle.stop();
