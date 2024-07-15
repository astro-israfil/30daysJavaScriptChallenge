// Task 1: Write a program to find the largest of three numbers using nasted if else statements.
let num1 = 2;
let num2 = 5;
let num3 = 4;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`The largest number is ${num1}, num1`);
    } else {
        console.log(`The largest number is ${num3}, num3`);
    }
} else {
    if (num2 > num3) {
        console.log(`The largest number is ${num2}, num2`);
    } else {
        console.log(`The largest number is ${num3}, num3`);
    }
}