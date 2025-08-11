"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudent = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    show() {
        console.log("Danh sách học sinh:");
        this.students.forEach(student => console.log(`ID: ${student.getID()} | Tên: ${student.getName()}`));
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterID(id) {
        return this.students.filter(student => student.getID() == id);
    }
    addStudentInClass(id) {
        const index = allStudent.findIndex(student => student.getID() == id);
        if (index != -1) {
            const student = allStudent[index];
            this.students.push(student);
            allStudent.splice(index, 1);
        }
        else
            console.log(`Không tìm thấy học sinh ID ${id}`);
    }
}
allStudent.push(new Student(1, "A"), new Student(2, "B"), new Student(3, "C"), new Student(4, "D"), new Student(5, "E"), new Student(6, "F"));
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log(`Lớp A`);
classA.show();
console.log(`Lớp B`);
classB.show();
