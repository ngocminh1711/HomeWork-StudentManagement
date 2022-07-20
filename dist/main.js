"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const StudentManagement_1 = require("./StudentManagement");
const Student_1 = require("./Student");
let choice = -1;
let studentManagement = new StudentManagement_1.StudentManagement();
function inputStudent() {
    let id = +rl.question('Nhập mã sinh viên: ');
    let name = rl.question('Nhập họ và tên: ');
    let age = +rl.question('Nhập tuổi: ');
    let group = rl.question('Nhập tên lớp: ');
    let email = rl.question('Nhập email: ');
    let phone = +rl.question('Nhập số điện thoại: ');
    return new Student_1.Student(id, name, age, group, email, phone);
}
function addStudent() {
    let student = inputStudent();
    studentManagement.addStudent(student);
}
// function showInfoByID(){
//     let id = +rl.question("Nhập id muốn tìm kiếm");
//     let students = studentManagement.showAllInfoStudent();
//         if (studentManagement.findID(id) != -1 ) {
//             console.log (`${students[i].id}`)
//         }
// }
// function findID():any{
//     let students = studentManagement.showAllInfoStudent()
//     let id = +rl.question('Nhập Mã sinh viên muốn tìm kiếm thông tin: ')
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].id === id) {
//             console.log(`Mã sinh viên: ${students[i].id}, Họ và tên: ${students[i].name}, Tuổi ${students[i].age}, Lớp ${students[i].group}, Email: ${students[i].email}, Số điện thoại: ${students[i].phone}`);
//             break;
//         }
//     }
// }
do {
    console.log('-------Quản lí sinh viên--------');
    console.log('1. Hiển thị thông tin sinh viên ');
    console.log('2. Tạo thông tin sinh viên ');
    console.log('3. Thêm thông tin sinh viên ');
    console.log('4. Tìm kiếm thông tin sinh viên ');
    console.log('5. Xóa thông tin sinh viên ');
    console.log('0. Thoát');
    choice = +rl.question('Nhập lựa chọn: ');
    switch (choice) {
        case 1:
            console.log('------Thông tin sinh viên--------');
            let students = studentManagement.showAllInfoStudent();
            for (const student of students) {
                console.log(`Mã sinh viên ${student.id},Họ và tên: ${student.name},Tuổi: ${student.age} Lớp: ${student.group} ,email: ${student.email},phone: ${student.phone}`);
            }
            break;
        case 2:
            console.log('------Tạo thông tin sinh viên--------');
            addStudent();
            break;
        case 3:
            console.log('------Tạo mới thông tin sinh viên--------');
            let index = +rl.question('Nhập vị trí sinh viên cần sửa: ');
            let newStudent = inputStudent();
            studentManagement.updateInfoStudent(index, newStudent);
            break;
        case 4:
            console.log('------Tìm thông tin sinh viên--------');
            studentManagement.findID(+rl.question('Nhập MSV muốn tìm kiếm '));
            break;
        case 5:
            console.log('------Thông tin sinh viên--------');
            break;
    }
} while (choice != 0);
