// Primitive types or basic types in TypeScript
let isConnected = true; // boolean
let isAssigned: boolean = false; // boolean

function itHasDiscount(course: string): boolean {
    if (course === 'TypeScript') {
        return true;
    }
    return false;
}

console.log('It has discount: ', itHasDiscount('Angular')); 

// Number type
let students = 100; // number
// students = '100'; // Error: Type 'string' is not assignable to type 'number'
let studentsQuantity: number; // number
studentsQuantity = 120;

function getStudentsQuantity(course: string): number {
    if (course === 'TypeScript') 
        return 150;
    return 0;
}

console.log('Students quantity: ', getStudentsQuantity('JavaScript'));

let inscriptionsTypeScriptCourse: number = 100; // number

// Type Number - Decimal, Hexadecimal, Binary, Octal
let decimalLiteral: number = 10; // decimal
let hexLiteral: number = 0xf00d; // hexadecimal
console.log('Decimal literal: ', decimalLiteral);
console.log('Hexadecimal literal: ', hexLiteral);

