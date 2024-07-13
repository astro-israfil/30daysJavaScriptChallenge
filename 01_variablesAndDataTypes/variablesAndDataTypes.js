// Task 1: Declare a variable using var, assign it a number and log the value to the console.

var aNumber = 10; // declaring a variable and assigning a number to it.

// logging the value of this variable to the console
console.log(aNumber);



// Task 2: Declare a variable using let, assign it a string and log the value to the console.

let aString = "Israfil"; // declaring a variable and assigning a string to it.

// logging the value of this variable to the console
console.log(aString);



// Task 3: Declare a variable using const, assign it a boolean value and log the value to the console.

const aBoolean = true; // declaring a constant with a boolean value to it

// logging the value of this variable to the console
console.log(aBoolean);


// Task 4: Create variables of defferent data types (number, string, boolean, object, array) and log 
// each data type using typeof operator

const age = 22; // number
const name = "Israfil"; // string
const isProgrammer = true; // boolean
const person = {
    name: "Israfil",
    age: 22,
    isProgrammer: true,
}; // object
const frineds = ["Omar", "Osman", "Musa", "Dawud"] // array

console.log(typeof age)
console.log(typeof name)
console.log(typeof isProgrammer)
console.log(typeof person)
console.log(typeof frineds)


// Task 5: Declare a variable using let, assign an inital value, reassign the value and log both to the console.

let favouriteLanguage = "python";
console.log(favouriteLanguage);

favouriteLanguage = "JavaScript";
console.log(favouriteLanguage);


// Task 6: Trying to reassign the value of a constant variable

const fullName = "Israfil Mallick";

// fullName = "Khalid" // It will raise an error: TypeError: Assignment to constant variable.

console.log(fullName);