"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return Math.PI * this.radius * 2;
    }
}
class Rectangle_ {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(20);
const rectangle = new Rectangle_(10, 30);
console.log("Hình tròn:");
console.log(`Chu vi hình tròn: ${circle.calculatePerimeter().toFixed(2)}`);
console.log(`Diện tích hình tròn: ${circle.calculateArea().toFixed(2)}`);
console.log("Hình chữ nhật:");
console.log(`Chu vi hình chữ nhật: ${rectangle.calculatePerimeter()}`);
console.log(`Diện tích hình chữ nhật: ${rectangle.calculateArea()}`);
