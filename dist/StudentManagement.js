"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManagement = void 0;
class StudentManagement {
    constructor() {
        this.studentList = [];
    }
    findID(id) {
        let index = -1;
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].id === id) {
                index = i;
                break;
            }
        }
        this.conditionToShowInfo(index);
    }
    conditionToShowInfo(index) {
        if (index !== -1) {
            console.table(this.showInfoStudent(index));
        }
        else {
            console.log(`Không có mã sinh viên này`);
        }
    }
    showInfoStudent(i) {
        return (`Mã sinh viên ${this.studentList[i].id},Họ và tên: ${this.studentList[i].name},Tuổi: ${this.studentList[i].age} Lớp: ${this.studentList[i].group} ,email: ${this.studentList[i].email},phone: ${this.studentList[i].phone}`);
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
