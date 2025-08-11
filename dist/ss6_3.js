"use strict";
// method
class Animal1 {
    speak() {
        console.log("Tiếng kêu: ...");
    }
}
const a = new Animal1();
a.speak();
// abstract method
class Animal2 {
}
class Tiger extends Animal2 {
    speak() {
        console.log(`Gr... Gr...`);
    }
    speedRun() {
        return "60km/h";
    }
}
const tiger = new Tiger();
tiger.speak();
console.log(`Tốc độ chạy: ${tiger.speedRun()}`);
