// printing statement
console.log("Hello world");

// creating a variable in javascript
let name = "Eduard";
console.log(name);

name = "Ciao";
console.log(name)

// creating constants in javascript
const car = "Tesla";
console.log(car);

// variables
let text = "Eduard"; //string
let age = 30; // numerical
let isApproved = false; //boolean
let firstName = undefined;
let userselection = null;
console.log(text);
console.log(age);
console.log(isApproved);
console.log(firstName);
console.log(userselection);

//objects
let person = {
    naming: "Eduard",
    lifespan: 30
};

person.naming = "John";

console.log(person.naming);

person["naming"] = "Johnatan";

console.log(person.naming);

// just a small test to check if my understanding of javascript is true
let javascript_is_shit = "test-proof"
person[javascript_is_shit] = "proof-true"
console.log(person)

// arrays

let selectedColors = ['red',  'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 4;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

//functions in javascript

function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

greet("Eduard", "Ciao");
greet("Mary", "Lee");

function square(number) {
    return number * number;
}


console.log(square(2));