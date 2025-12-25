"use strict";
// Primitive types or basic types in TypeScript
let isConnected = true; // boolean
let isAssigned = false; // boolean
function itHasDiscount(course) {
    if (course === 'TypeScript') {
        return true;
    }
    return false;
}
console.log('It has discount: ', itHasDiscount('Angular'));
// Number type
let students = 100; // number
// students = '100'; // Error: Type 'string' is not assignable to type 'number'
let studentsQuantity; // number
studentsQuantity = 120;
function getStudentsQuantity(course) {
    if (course === 'TypeScript')
        return 150;
    return 0;
}
console.log('Students quantity: ', getStudentsQuantity('JavaScript'));
let inscriptionsTypeScriptCourse = 100; // number
// Type Number - Decimal, Hexadecimal, Binary, Octal
let decimalLiteral = 10; // decimal
let hexLiteral = 0xf00d; // hexadecimal
let binaryLiteral = 0b1001; // binary
let octalLiteral = 0o755; // octal
console.log('Decimal literal: ', decimalLiteral);
console.log('Hexadecimal literal: ', hexLiteral);
console.log('Binary literal: ', binaryLiteral);
console.log('Octal literal: ', octalLiteral);
// String type
let myName = 'Javier'; // string
let myLastName = 'Martinez'; // string
let completeName = myName + ' ' + myLastName;
console.log('Complete name: ', completeName);
// String + ES6 Templates ....
let completeName2 = `${myName} ${myLastName}`;
console.log('Full Name using literal templates: ', completeName2);
let arrayCourses = ['TypeScript', 'Angular'];
let message = `
My name is ${completeName} and I have ${arrayCourses.length} courses.
Thanks for attending!!
`;
console.log('Message with literal templates:', message);
// Special Types in TypeScript.
// Type: any.
let unknownValueFromApp; // var unknownValueFromApp
unknownValueFromApp = 'hello';
unknownValueFromApp = 2;
let unknownValueFromApp2 = 2;
// Type: void
let empty;
function showContent(course) {
    const message = course ? `Welcome to the course ${course}` : 'Subscribe to the course';
    console.log('message:', message);
}
console.log('TypeScript', showContent('TypeScript')); // undefined
console.log('No course', showContent('')); // undefined
showContent('TypeScript'); // message: Welcome to the course TypeScript
// Type: Never ....
let nunca;
function returnError(error) {
    throw new Error('TypeScript Error. ' + error);
    // Never returns a value!! ....
}
// returnError('Unexpected error!!');
function infiniteCycle() {
    while (true) {
    }
}
// Types: null and undefined....
let undefinedVariable = undefined;
let nullVariable = null;
function nullReturn() {
    return null;
}
function undefinedReturn() {
    return undefined;
}
let withoutValue;
console.log(withoutValue); // undefined
// Functions in TypeScript
function greeting(name) {
    if (name)
        return 'Hello, ' + name;
    return 'Hello';
}
console.log(greeting(completeName));
console.log(greeting());
