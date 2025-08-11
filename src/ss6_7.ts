(() => {
class Student {
    private id: number
    private name: string
    constructor (id: number, name: string) {
        this.id = id
        this.name = name
    }
    getID(): number {
        return this.id
    }
    getName(): string {
        return this.name
    }
    setName(newName: string): void {
        this.name = newName
    }
}
let allStudent: Student[] = []
class Classroom {
    private students: Student[] = []
    show(): void {
        console.log("Danh sách học sinh:")
        this.students.forEach(student => console.log(`ID: ${student.getID()} | Tên: ${student.getName()}`))
    }
    addStudent(student: Student): void {
        this.students.push(student)
    }
    filterID(id: number): Student[] {
        return this.students.filter(student => student.getID() == id)
    }
    addStudentInClass(id: number): void {
        const index = allStudent.findIndex(student => student.getID() == id)
        if(index != -1) {
            this.students.push(allStudent[index])
            allStudent.splice(index, 1)
        } else console.log(`Không tìm thấy học sinh ID ${id}`)
    }
    removeStudent(id: number): void {
        const index = this.students.findIndex(student => student.getID() == id)
        if(index != -1) {
            allStudent.push(this.students[index])
            this.students.splice(index, 1)
            console.log(`Đã xoá học sinh ID ${id}`)
        } else console.log(`Không tìm thấy học sinh ID ${id}`)
    }
    editStudent(id: number, name: string): void {
        const student = this.students.find(student => student.getID() == id)
        if(student) {
            student.setName(name)
            console.log("Đã cập nhật thông tin học sinh")
        } else console.log(`Không tìm thấy học sinh ID ${id}`)
    }
}
allStudent.push(
    new Student(1, "A"),
    new Student(2, "B"),
    new Student(3, "C"),
    new Student(4, "D"),
    new Student(5, "E"),
    new Student(6, "F")
)
const classA = new Classroom()
const classB = new Classroom()

classA.addStudentInClass(1)
classA.addStudentInClass(2)
classA.addStudentInClass(3)
classA.removeStudent(2)
classA.editStudent(3, "C new")

classB.addStudentInClass(4)
classB.addStudentInClass(5)
classB.addStudentInClass(6)

console.log(`Lớp A`)
classA.show()
console.log(`Lớp B`)
classB.show()

})