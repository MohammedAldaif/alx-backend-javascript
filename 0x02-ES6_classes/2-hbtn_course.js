class HolbertonCourse {
  // Constructor
  constructor(name, length, students) {
    // Validate the types
    this._validateString(name, 'Name');
    this._validateNumber(length, 'Length');
    this._validateArrayOfStrings(students, 'Students');

    // Store values in "underscore" versions
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters with validation
  set name(newName) {
    this._validateString(newName, 'Name');
    this._name = newName;
  }

  set length(newLength) {
    this._validateNumber(newLength, 'Length');
    this._length = newLength;
  }

  set students(newStudents) {
    this._validateArrayOfStrings(newStudents, 'Students');
    this._students = newStudents;
  }

  // Helper method to validate string type
  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
  }

  // Helper method to validate number type
  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
  }

  // Helper method to validate array of strings
  _validateArrayOfStrings(value, attribute) {
    if (!Array.isArray(value) || !value.every((el) => typeof el === 'string')) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
  }
}

export default HolbertonCourse;

