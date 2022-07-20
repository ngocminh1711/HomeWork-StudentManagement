import {Student} from "../Student";

export interface IstudentManagement {
    studentList:  any[];
    showAllInfoStudent(): void;
    updateInfoStudent(index: number, newStudent: Student) :any;
}