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
console.log('Decimal literal: ', decimalLiteral);
console.log('Hexadecimal literal: ', hexLiteral);
