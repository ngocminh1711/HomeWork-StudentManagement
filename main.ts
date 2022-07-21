import * as rl from 'readline-sync'
import {StudentManagement} from "./StudentManagement";
import {Student} from "./Student";

enum CHOICE {
    EXIT = 0,
    SHOWINFO = 1,
    CREATESTUDENT = 2,
    UPDATESTUDEN = 3,
    SEARCHSTUDENT = 4,
    REMOVESTUDENT = 5,
    SORTBYAGE = 6,
}
enum CHOICEOFSEARCH {
    SEARCHBYID = 1,
    SEARCHBYGROUP = 2,
    SEARRCHBYNAME = 3,
}
enum CHOICEOFSORT {
    LOWTOHIGH = 1,
    HIGHTOLOW = 2,
}

let choice = -1
let studentManagement = new StudentManagement();

function inputStudent() {
    let id = +rl.question('Nhập mã sinh viên: ');
    let name = rl.question('Nhập họ và tên: ');
    let age = +rl.question('Nhập tuổi: ');
    let group = rl.question('Nhập tên lớp: ');
    let email = rl.question('Nhập email: ');
    let phone = +rl.question('Nhập số điện thoại: ');
    return new Student(id, name, age, group, email, phone);
}

function addStudent() {
    let student = inputStudent();
    studentManagement.addStudent(student);
}


do {
    console.log('-------Quản lí sinh viên--------');
    console.log('1. Hiển thị thông tin sinh viên ')
    console.log('2. Tạo thông tin sinh viên ');
    console.log('3. Thêm thông tin sinh viên ');
    console.log('4. Tìm kiếm thông tin sinh viên ')
    console.log('5. Xóa thông tin sinh viên ');
    console.log('6. Sắp xếp thông tin sinh viên');
    console.log('0. Thoát')
    choice = +rl.question('Nhập lựa chọn: ');

    switch (choice) {
        case CHOICE.SHOWINFO:
            console.log('------Thông tin sinh viên--------')
            studentManagement.showAllInfoStudent()
            break;
        case CHOICE.CREATESTUDENT:
            console.log('------Tạo thông tin sinh viên--------')
            addStudent();
            break;
        case CHOICE.UPDATESTUDEN:
            console.log('------Tạo mới thông tin sinh viên--------')
            let index = +rl.question('Nhập vị trí sinh viên cần sửa: ');
            let newStudent = inputStudent()
            studentManagement.updateInfoStudent(index, newStudent)

            break;
        case CHOICE.SEARCHSTUDENT:
            console.log('------Tìm thông tin sinh viên--------')
            console.log('--Bấm 1 tìm theo ID--Bấm 2 tìm theo Lớp--Bấm 3 tìm theo tên-- ')
            let choice = +rl.question('Mời nhập lựa chọn ')
            switch (choice) {
                case CHOICEOFSEARCH.SEARCHBYID:
                    let findbyID = +rl.question('Nhập mã sinh viên muốn tìm: ');
                    studentManagement.findByID(findbyID)
                    break;
                case CHOICEOFSEARCH.SEARCHBYGROUP:
                    let findbyGroup = rl.question(' Nhập Lớp muốn tìm:  ');
                    studentManagement.findByGroup(findbyGroup)
                    break;
                case CHOICEOFSEARCH.SEARRCHBYNAME:
                    let findbyName = rl.question(' Nhập tên muốn tìm:  ');
                    studentManagement.findByName(findbyName)
                    break;
            }

            break;
        case CHOICE.REMOVESTUDENT:
            console.log('------Xóa sinh viên--------')
            let position = +rl.question('Nhập vị trí cần xóa: ')
            studentManagement.deleteStudent(position);
            break;
        case CHOICE.SORTBYAGE:
            console.log('------Sắp xếp theo độ tuổi------');
            console.log('---Bấm 1 để sắp xếp từ thấp->cao ---Bấm 2 để sắp xếp từ cao->thấp---')
            let choice2 = +rl.question('Mời nhập lựa chọn: ')
            switch (choice2) {
                case CHOICEOFSORT.LOWTOHIGH:
                    studentManagement.sortByAge()
                    break;
            }
            break;

        case CHOICE.EXIT:
            break;
    }
}
while (choice != 0)