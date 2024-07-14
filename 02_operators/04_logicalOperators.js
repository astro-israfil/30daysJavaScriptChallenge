// Task 1: Write a program that uses && operator to combine two conditions and log the result to the console

const userAge = 18;
const isEligibleAge = userAge <= 60 && userAge >= 18;
console.log(isEligibleAge);


// Task 1: Write a program that uses || operator to combine two conditions and log the result to the console
const isPaymentComplete = false;
const isScollared = true;
const isCourseAccessible = isPaymentComplete || isScollared;
console.log(isCourseAccessible);

// Task 2: Write a program that uses ! operator to negate a codition and log the result to the console
let isUserEligible = true;
console.log(!isUserEligible);