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
