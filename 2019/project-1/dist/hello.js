"use strict";
let welcomeLanguage = 'Welcome to Typescript!';
console.log(welcomeLanguage);
let currentDate = '2019-08-27';
console.log('Date: ', currentDate);
let actualAge = 30;
console.log('Age: ', actualAge);
actualAge.trim(); // Error: Property 'trim' does not exist on type 'number'.
