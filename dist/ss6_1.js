"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chiều rộng: ${this.width}`);
        console.log(`Chiều cao: ${this.height}`);
    }
}
const newShape = new Rectangle("Hình chữ nhật", 7, 9);
console.log(newShape.getName());
newShape.getSize();
