//LOOPS
//what is a loop?
/**
 *  - JS contstruc (structure)
 *  - It execute a set of statements many times
 *  - condition help to stop the loop
 *
 * for loop
 * syntax
 * for(counter, condition, inc/dec){ statements }
 */

let grades = [1, 3, 2, 1.5, 5, 4, 1];

// console.log('grade:',grades[0])
// console.log('grade:',grades[1])
// console.log('grade:', grades[2])
// console.log('grade:', grades[3])
// console.log('grade:', grades[4])
// console.log('grade:', grades[5])
// console.log('grade:', grades[6])


// for (let i = 0; i <= 6; i++) {
//   console.log("grade:", grades[i]);
// }


/* ------------------------------- / ------------------------------ */
//exercise1: find all integer number divisible by 5 between 1 to 100.

// if (1 % 5 === 0) {
//     console.log(1)
// }
// if (2 % 5 === 0) {
//     console.log(2)
// }
// if (3 % 5 === 0) {
//     console.log(3)
// }
// if (4 % 5 === 0) {
//     console.log(4)
// }
// if (5 % 5 === 0) {
//     console.log(5)
// }
// if (6 % 5 === 0) {
//     console.log(6)
// }


//better practice
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/* ------------------------------- / ------------------------------ */
//exercise 2. find the index number of all 'a' char inside following string.
let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

// if (str[0] === 'a') {
//     console.log('index', 0)
// }
// //---
// if (str[1] === 'a') {
//     console.log('index', 1)
// }
// //---
// if (str[2] === 'a') {
//     console.log('index', 2)
// }
// //---
// if (str[3] === 'a') {
//     console.log('index', 3)
// }
// //---
// if (str[4] === 'a') {
//     console.log('index', 4)
// }
// //---
// if (str[5] === 'a') {
//     console.log('index', 5)
// }
// //---
// if (str[6] === 'a') {
//     console.log('index', 6)
// }

//better practice
// for (let i = 0; i < str.length; i++){
//     if (str[i] === "a") {
//       console.log("index", i);
//     }
// }



/* ------------------------------- / ------------------------------ */
//exercise3: print the number of occurences of 'b' in the string variable str

/**
 * Solution:
 *  0. define a counter
 *  1. grab every letter of the string individually
 *  2. compare it with letter 'b'
 *  3. if they are equal increment the counter
 */

let counter = 0;

// if (str[0] === 'b') {
//     counter++;
// }

// if (str[1] === 'b') {
//     counter++;
// }

// if (str[2] === 'b') {
//     counter++;
// }

// //...

// if (str[100] === 'b') {
//     counter++;
// }

// for (let i = 0; i < str.length; i++){
//     if (str[i] === "b") {
//       counter++;
//     }
// }
// console.log(counter);


/* ------------------------------- / ------------------------------ */
//functions
/**
 * - JS construct
 * - It has a block of statements that should be executed
 * - Write the function once, but you can call it many time
 * - Functions accept input parameter
 * - Functions process the input values and generate outputs
 * - Functions can return a value as output
 */

//define a function
function auth(uname, pass) {
   //body of the function
    const users = [
        {
            username: 'fahim',
            password: '123'
        },
        {
            username: 'dani',
            password: 'dani'
        },
        {
            username: 'ernesto',
            password: 'ern123'
        }
    ];

    for (let i = 0; i < users.length; i++){

        if (uname === users[i].username && pass === users[i].password) {
            return true;
        }
    }
    
    
    return false;
   


}

//call the function
let result = auth('dani', 'dani')
result = auth('ernesto', 'ern123')
console.log(result);


/* ------------------------------- / ------------------------------ */
// function test () {
    
//     console.log('first');
//     return
//     console.log('second')    //this line never executes, because it's located after return
// }

// test()


/* ------------------------------- . ------------------------------ */
// Write a function to calculate the total number of birds from the BirdsArray that contains number of birds visited my garden in 2 weeks.

function totalBirdCount(birdsArray) {
    let sum = 0;
    
    for (let i = 0; i < birdsArray.length; i++){
        sum = sum + birdsArray[i]
    }
    
    return sum;
}

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(totalBirdCount(birdsPerDay))