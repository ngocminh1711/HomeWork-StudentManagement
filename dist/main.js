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
var CHOICE;
(function (CHOICE) {
    CHOICE[CHOICE["EXIT"] = 0] = "EXIT";
    CHOICE[CHOICE["SHOWINFO"] = 1] = "SHOWINFO";
    CHOICE[CHOICE["CREATESTUDENT"] = 2] = "CREATESTUDENT";
    CHOICE[CHOICE["UPDATESTUDEN"] = 3] = "UPDATESTUDEN";
    CHOICE[CHOICE["SEARCHSTUDENT"] = 4] = "SEARCHSTUDENT";
    CHOICE[CHOICE["REMOVESTUDENT"] = 5] = "REMOVESTUDENT";
    CHOICE[CHOICE["SORTBYAGE"] = 6] = "SORTBYAGE";
})(CHOICE || (CHOICE = {}));
var CHOICEOFSEARCH;
(function (CHOICEOFSEARCH) {
    CHOICEOFSEARCH[CHOICEOFSEARCH["SEARCHBYID"] = 1] = "SEARCHBYID";
    CHOICEOFSEARCH[CHOICEOFSEARCH["SEARCHBYGROUP"] = 2] = "SEARCHBYGROUP";
    CHOICEOFSEARCH[CHOICEOFSEARCH["SEARRCHBYNAME"] = 3] = "SEARRCHBYNAME";
})(CHOICEOFSEARCH || (CHOICEOFSEARCH = {}));
var CHOICEOFSORT;
(function (CHOICEOFSORT) {
    CHOICEOFSORT[CHOICEOFSORT["LOWTOHIGH"] = 1] = "LOWTOHIGH";
    CHOICEOFSORT[CHOICEOFSORT["HIGHTOLOW"] = 2] = "HIGHTOLOW";
})(CHOICEOFSORT || (CHOICEOFSORT = {}));
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
do {
    console.log('-------Quản lí sinh viên--------');
    console.log('1. Hiển thị thông tin sinh viên ');
    console.log('2. Tạo thông tin sinh viên ');
    console.log('3. Thêm thông tin sinh viên ');
    console.log('4. Tìm kiếm thông tin sinh viên ');
    console.log('5. Xóa thông tin sinh viên ');
    console.log('6. Sắp xếp thông tin sinh viên');
    console.log('0. Thoát');
    choice = +rl.question('Nhập lựa chọn: ');
    switch (choice) {
        case CHOICE.SHOWINFO:
            console.log('------Thông tin sinh viên--------');
            studentManagement.showAllInfoStudent();
            break;
        case CHOICE.CREATESTUDENT:
            console.log('------Tạo thông tin sinh viên--------');
            addStudent();
            break;
        case CHOICE.UPDATESTUDEN:
            console.log('------Tạo mới thông tin sinh viên--------');
            let index = +rl.question('Nhập vị trí sinh viên cần sửa: ');
            let newStudent = inputStudent();
            studentManagement.updateInfoStudent(index, newStudent);
            break;
        case CHOICE.SEARCHSTUDENT:
            console.log('------Tìm thông tin sinh viên--------');
            console.log('--Bấm 1 tìm theo ID--Bấm 2 tìm theo Lớp--Bấm 3 tìm theo tên-- ');
            let choice = +rl.question('Mời nhập lựa chọn ');
            switch (choice) {
                case CHOICEOFSEARCH.SEARCHBYID:
                    let findbyID = +rl.question('Nhập mã sinh viên muốn tìm: ');
                    studentManagement.findByID(findbyID);
                    break;
                case CHOICEOFSEARCH.SEARCHBYGROUP:
                    let findbyGroup = rl.question(' Nhập Lớp muốn tìm:  ');
                    studentManagement.findByGroup(findbyGroup);
                    break;
                case CHOICEOFSEARCH.SEARRCHBYNAME:
                    let findbyName = rl.question(' Nhập tên muốn tìm:  ');
                    studentManagement.findByName(findbyName);
                    break;
            }
            break;
        case CHOICE.REMOVESTUDENT:
            console.log('------Xóa sinh viên--------');
            let position = +rl.question('Nhập vị trí cần xóa: ');
            studentManagement.deleteStudent(position);
            break;
        case CHOICE.SORTBYAGE:
            console.log('------Sắp xếp theo độ tuổi------');
            console.log('---Bấm 1 để sắp xếp từ thấp->cao ---Bấm 2 để sắp xếp từ cao->thấp---');
            let choice2 = +rl.question('Mời nhập lựa chọn: ');
            switch (choice2) {
                case CHOICEOFSORT.LOWTOHIGH:
                    studentManagement.sortByAge();
                    break;
            }
            break;
        case CHOICE.EXIT:
            break;
    }
} while (choice != 0);
