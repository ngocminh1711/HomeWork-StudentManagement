import {IstudentManagement} from "./interface/IstudentManagement"
import {Student} from "./Student";

export class StudentManagement implements IstudentManagement{
    studentList: Student[] = [];

    findID(id: number) {
        let index = -1;
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].id === id) {
                index = i;
                break;

            }

        }
        this.conditionToShowInfo(index);
    }

    private conditionToShowInfo(index: number) {
        if (index !== -1) {
            console.table(this.showInfoStudent(index))

        } else {
            console.log(`Không có mã sinh viên này`);
        }
    }

    showInfoStudent(i: number) {
         return (`Mã sinh viên ${this.studentList[i].id},Họ và tên: ${this.studentList[i].name},Tuổi: ${this.studentList[i].age} Lớp: ${this.studentList[i].group} ,email: ${this.studentList[i].email},phone: ${this.studentList[i].phone}`)
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