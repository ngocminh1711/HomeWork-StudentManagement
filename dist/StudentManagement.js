"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManagement = void 0;
class StudentManagement {
    constructor() {
        this.studentList = [];
    }
    findID(id) {
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].id === id) {
                console.log(`Mã sinh viên ${this.studentList[i].id},Họ và tên: ${this.studentList[i].name},Tuổi: ${this.studentList[i].age} Lớp: ${this.studentList[i].group} ,email: ${this.studentList[i].email},phone: ${this.studentList[i].phone}`);
            }
        }
    }
    showAllInfoStudent() {
        return this.studentList;
    }
    addStudent(student) {
        this.studentList.push(student);
    }
    updateInfoStudent(index, newStudent) {
        this.studentList[index] = newStudent;
    }
}
exports.StudentManagement = StudentManagement;
