export class Student {
    private _id: number;
    private _name: string;
    private _age: number;
    private _group: string;
    private _email: string;
    private _phone: number;


    constructor(id: number,
                name: string,
                age: number,
                group: string,
                email: string,
                phone: number) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._group = group;
        this._email = email;
        this._phone = phone;

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get group(): string {
        return this._group;
    }

    set group(value: string) {
        this._group = value;
    }

    get name(): string {
        return this._name;
    }


    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): number {
        return this._phone;
    }

    set phone(value: number) {
        this._phone = value;
    }
}