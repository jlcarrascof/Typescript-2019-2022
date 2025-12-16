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
/* Preparing to use Enum for better readability */
var COUNTRY;
(function (COUNTRY) {
    COUNTRY["BOL"] = "BOL";
    COUNTRY["ARG"] = "ARG";
    COUNTRY["CHI"] = "CHI";
})(COUNTRY || (COUNTRY = {}));
const checkNationality = (country) => {
    if (country === COUNTRY.BOL) {
        console.log("Bolivian");
    }
    else if (country === COUNTRY.ARG) {
        console.log("Argentinian");
    }
    else if (country === COUNTRY.CHI) {
        console.log("Chilean");
    }
};
checkNationality(COUNTRY.ARG);
const numberOne = [1, "One"];
const numberTwo = [2, "Two"];
const numberThree = [3, "Three"];
const numberFour = [4, "Four"];
