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