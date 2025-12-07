"use strict";
/* const regards = (number: number) => {
    console.log(`Hi, your add is ${number + 2}!`);
}

regards(2);
 */
/* TypeScript without optimization */
const evenNumbers = [2, 4, 6, 8, 10];
const acceptEvenNumbers = (n) => {
    if (evenNumbers.includes(n)) {
        console.log("Accepted");
    }
    else {
        console.log("Rejected");
    }
};
acceptEvenNumbers(2);
const acceptOnlyEvenNumbers = (n) => {
    console.log("Accepted");
};
acceptOnlyEvenNumbers(2);
// acceptOnlyEvenNumbers(3); // This will cause a compile-time error
