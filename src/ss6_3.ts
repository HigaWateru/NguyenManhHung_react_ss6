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

/**
 * Method: 
 * Là hàm được định nghĩa có thân hàm và có thể chạy ngay khi gọi
 * Có thể chứa logic, câu lệnh, vòng lặp, ...
 * Không bắt buộc lớp con phải Override
 * 
 * Abstract Method:
 * Được khai báo bằng từ khoá abstract
 * Không có thân hàm, chỉ có khai báo
 * Chỉ xuất hiện bên trong abstract class hoặc interface
 * Bắt buộc lớp con phải Override và viết code thực thi
 */