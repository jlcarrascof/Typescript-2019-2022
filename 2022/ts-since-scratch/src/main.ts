/* const regards = (number: number) => {
    console.log(`Hi, your add is ${number + 2}!`);
}

regards(2);
 */

/* TypeScript without optimization */
const evenNumbers = [2, 4, 6, 8, 10];
const acceptEvenNumbers = (n: number) => {
    if (evenNumbers.includes(n)) {
        console.log("Accepted");
    }
    else {
        console.log("Rejected");
    }
};
acceptEvenNumbers(2);

/* TypeScript with optimization */
type EvenNumber = 2 | 4 | 6 | 8 | 10;
type parameters = number;
const acceptOnlyEvenNumbers = (n: EvenNumber) => {
    console.log("Accepted");
};
acceptOnlyEvenNumbers(2);
// acceptOnlyEvenNumbers(3); // This will cause a compile-time error

/* Preparing to use Enum for better readability */

enum COUNTRY {
    BOL = "BOL",
    ARG = "ARG",
    CHI = "CHI"
}

type TCountry = COUNTRY;

const checkNationality = (country: TCountry) => {
    if (country === COUNTRY.BOL) {
        console.log("Bolivian");
    } else if (country === COUNTRY.ARG) {
        console.log("Argentinian");
    } else if (country === COUNTRY.CHI) {
        console.log("Chilean");        
    }
};    

checkNationality(COUNTRY.ARG);