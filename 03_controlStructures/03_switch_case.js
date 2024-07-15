// Task 3: Write a program that uses switch case to determine day of the week based on a number (1 - 7) and log the day name to the console

let dayNumber = 1033;
let dayName = "";

switch (dayNumber) {
    case 1:
        dayName = "Saturday";
        break;
    case 2:
        dayName = "Sunday";
        break;
    case 3:
        dayName = "Monday";
        break;
    case 4:
        dayName = "Tuesday";
        break;
    case 5:
        dayName = "Wednesday";
        break;
    case 6:
        dayName = "Thursday";
        break;
    case 7:
        dayName = "Friday";
        break;
    default:
        dayName = "InvalidDay";
}

console.log(dayName);


// Task 2: Write a program that uses switch case to define grade ('A', 'B', 'C', 'D', 'F') based on number and log the result to the console

const avgMarks = 100;
let grade;

switch (true) {
    case avgMarks >= 80:
        grade = "A";
        break;
    case avgMarks >= 60:
        grade = "B";
        break;
    case avgMarks >= 50:
        grade = "C";
        break;
    case avgMarks >= 30:
        grade = "D";
        break;
    case avgMarks < 30:
        grade = "F";
        break;
    default:
        grade = null;
}

console.log(grade);