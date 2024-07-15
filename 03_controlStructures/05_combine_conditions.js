// Task 1: Write a program to check if a year is leap year using multiple conditions (divisible by 4 but not 100 unless also divisible by 400)

const year = 1904

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("The year is leap year");
}