import {IstudentManagement} from "./interface/IstudentManagement"
import {Student} from "./Student";

export class StudentManagement implements IstudentManagement{
    studentList: Student[] = [];

    findID(id: number) {
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].id === id) {
                console.log(`Mã sinh viên ${this.studentList[i].id},Họ và tên: ${this.studentList[i].name},Tuổi: ${this.studentList[i].age} Lớp: ${this.studentList[i].group} ,email: ${this.studentList[i].email},phone: ${this.studentList[i].phone}`)
            }
        }
    }

    showAllInfoStudent(): Student[]{
        return this.studentList;
    }
    addStudent(student: Student): void{
        this.studentList.push(student);
    }
    updateInfoStudent(index: number, newStudent: Student): any{
        this.studentList[index] = newStudent;

    }


}