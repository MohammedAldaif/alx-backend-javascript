// 2-hbtn_course.js
class HolbertonCourse {
  constructor(name, length, students) {
    HolbertonCourse._validateString(name, 'Name');
    HolbertonCourse._validateNumber(length, 'Length');
    HolbertonCourse._validateArrayOfStrings(students, 'Students');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    HolbertonCourse._validateString(newName, 'Name');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    HolbertonCourse._validateNumber(newLength, 'Length');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    HolbertonCourse._validateArrayOfStrings(newStudents, 'Students');
    this._students = newStudents;
  }

  static _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
  }

  static _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
  }

  static _validateArrayOfStrings(value, attribute) {
    if (!Array.isArray(value) || !value.every((el) => typeof el === 'string')) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
  }
}

export default HolbertonCourse;

