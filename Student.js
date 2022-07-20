"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, name, age, group, email, phone) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._group = group;
        this._email = email;
        this._phone = phone;
    }
    Object.defineProperty(Student.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
