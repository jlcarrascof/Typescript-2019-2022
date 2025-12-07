/* const regards = (number: number) => {
    console.log(`Hi, your add is ${number + 2}!`);
}

regards(2);
 */

const evenNumbers = [2, 4, 6, 8, 10];
const acceptEvenNumbers = (n: number) => {
    if (evenNumbers.includes(n)) {
        console.log("Accepted");
    } else {
        console.log("Rejected");
    }
}

acceptEvenNumbers(2);