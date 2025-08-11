// method
class Animal1 {
    speak(): void {
        console.log("Tiếng kêu: ...")
    }
}
const a = new Animal1()
a.speak()

// abstract method
abstract class Animal2 {
    abstract speak(): void
    abstract speedRun(): string
}
class Tiger extends Animal2 {
    speak(): void {
        console.log(`Gr... Gr...`)
    }
    speedRun(): string {
        return "60km/h"
    }
}
const tiger = new Tiger()
tiger.speak()
console.log(`Tốc độ chạy: ${tiger.speedRun()}`)