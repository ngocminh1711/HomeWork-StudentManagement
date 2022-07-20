"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(id, name, age, group, email, phone) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._group = group;
        this._email = email;
        this._phone = phone;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get group() {
        return this._group;
    }
    set group(value) {
        this._group = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
}
exports.Student = Student;
