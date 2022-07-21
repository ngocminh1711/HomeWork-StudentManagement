"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManagement = void 0;
class StudentManagement {
    constructor() {
        this.studentList = [];
    }
    findByGroup(group) {
        let newStudentList = [];
        let index = -1;
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].group === group) {
                index++;
                newStudentList.push(this.studentList[i]);
            }
        }
        this.showStudentfound(newStudentList);
    }
    findByID(id) {
        let index = -1;
        let newStudentList = [];
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].id === id) {
                index++;
                newStudentList.push(this.studentList[i]);
            }
        }
        this.showStudentfound(newStudentList);
    }
    findByName(name) {
        let index = -1;
        let newStudentList = [];
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].name === name) {
                index++;
                newStudentList.push(this.studentList[i]);
            }
        }
        this.showStudentfound(newStudentList);
    }
    showStudentfound(newStudentList) {
        console.table(newStudentList);
    }
    showInfoStudent(i) {
        console.table(this.studentList[i]);
    }
    showAllInfoStudent() {
        console.table(this.studentList);
    }
    addStudent(student) {
        this.studentList.push(student);
    }
    updateInfoStudent(index, newStudent) {
        this.studentList[index] = newStudent;
    }
    deleteStudent(index) {
        this.studentList.splice(index, 1);
    }
    sortByAge() {
        let isOrdered;
        for (let i = 0; i < this.studentList.length; i++) {
            isOrdered = true;
            for (let j = 0; j < this.studentList.length - 1 - i; j++) {
                if (this.studentList[j].age > this.studentList[j + 1].age) {
                    let temp = this.studentList[j];
                    this.studentList[j] = this.studentList[j + 1];
                    this.studentList[j + 1] = temp;
                    isOrdered = false;
                }
            }
            if (isOrdered)
                break;
        }
        console.table(this.studentList);
    }
}
exports.StudentManagement = StudentManagement;
