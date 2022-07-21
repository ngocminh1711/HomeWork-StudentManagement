import {IstudentManagement} from "./interface/IstudentManagement"
import {Student} from "./Student";

export class StudentManagement implements IstudentManagement {
    studentList: Student[] = [];

    findByGroup(group: string) {
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
    findByID(id: number) {
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
    findByName(name: string) {
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


    private showStudentfound(newStudentList: any[]) {
        console.table(newStudentList);
    }

    showInfoStudent(i: number) {
       console.table(this.studentList[i])
    }

    showAllInfoStudent() {
        console.table(this.studentList)
    }

    addStudent(student: Student): void {
        this.studentList.push(student);
    }

    updateInfoStudent(index: number, newStudent: Student): any {
        this.studentList[index] = newStudent;
    }
    deleteStudent(index: number): void {
        this.studentList.splice(index, 1);
    }
    sortByAge() {
        let isOrdered;
        for (let i = 0; i < this.studentList.length; i++) {
            isOrdered = true;
            for (let j = 0; j < this.studentList.length - 1 - i; j++) {
                if (this.studentList[j].age > this.studentList[j + 1].age){
                    let temp = this.studentList[j];
                    this.studentList[j] = this.studentList[j + 1];
                    this.studentList[j + 1] = temp;
                    isOrdered = false;
                }
            }
            if (isOrdered) break;
        }
        console.table(this.studentList)
    }
}