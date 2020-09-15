/* 

// ES6 variable declaration with let
let person = {
    name: 'Shah',
    age: 34
};

console.log(person);

// Dot notation
person.name = 'Bert';

console.log(person.name);

// Bracket notation
let selection = 'name';
// person['name'] = 'Steve';
// if we don't know the property, we can use the above selection variable
person[selection] = 'Steve';

console.log(person.name);

// Arrays - Array literal 
let selectedColors = ['red', 'blue', 1, 1.4];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[2]);
selectedColors[2] = 'green';
console.log(selectedColors[2]);

// Dot notation
console.log(selectedColors.length);

// Function - performing a task
function greet(name, lastName) {
    return console.log('Hello, ' + name + ' ' + lastName)
}

greet('Darth', 'Vader');
greet('Luke', 'Skywalker');

// Function - calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(4));

/*

Vanilla JavaScript fundamentals (for React):
    Recursion, closures, loops, and conditionals.
    Free Udamy courses.
    Package managers, Yarn, Webpack, Babel,
Ajax: Core for async code
Actual Ajax sample code.
    "Go to the Giphy"
    XHR - XMLHttpRequest
Promises
Async / await
Scope (local, global, lexical)
ES6. Imports/exports. Arrow functions. Spread operator.
Functional methods
.map, .filter, .reduce  (see MDN - Mozilla Developer Network)
Destructuring

*/

// https://youtu.be/8GPPJpiLqHk
// 10 JS scripts in an hour

// get menu button and nav id
const btn = document.getElementById('btn')
const nav = document.getElementById('nav')
    // get toast container and button id
const container = document.getElementById('container')
const btnToast = document.getElementById('btnToast')

// click event for setting active classes to nav and button
btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});

// create a toast on click of the toast button
btnToast.addEventListener('click', () => {
    createNotification();
});

// create toast function
function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    container.appendChild(notif);

    notif.innerText = 'Let\'s have a toast!';

    setTimeout(() => {
        notif.remove();
    }, 3000);
}