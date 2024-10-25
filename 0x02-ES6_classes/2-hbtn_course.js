// 2-hbtn_course.js
class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, 'Name');
    this._validateNumber(length, 'Length');
    this._validateArrayOfStrings(students, 'Students');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._validateString(newName, 'Name');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._validateNumber(newLength, 'Length');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._validateArrayOfStrings(newStudents, 'Students');
    this._students = newStudents;
  }

  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
  }

  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
  }

  _validateArrayOfStrings(value, attribute) {
    if (!Array.isArray(value) || !value.every((el) => typeof el === 'string')) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
  }
}

export default HolbertonCourse;

