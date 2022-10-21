//What is JS?
    //- is programming language
    //- used to make the web pages alive
    //- nothing to do with java
    

//Where we use JS (platform)?
    //- Browser (Frontend)
    //- Nodejs  (Backend)


//How Browser / Nodejs execute JS?
    //-JS Engine is responsible to execute JS code. (read-translate-execute)


//Some examples of JS Engines?
    //- chrome use V8
    //- Firefox use SpiderMonkey

//Nodejs JS Engine?
    //- v8



//first example statement;
console.log('Hello world JS');

/* ---------------------------------------------------------------- */
/*                             varibales                            */
/* ---------------------------------------------------------------- */
//write something in the memory (RAM)
let variableName = 20;  //declaration + initialization
variableName = 30;      //initialize

//read something from memory
console.log(variableName)


let firstName;
firstName = 'Dejan';

/* ---------------------------------------------------------------- */
/*                             constants                            */
/* ---------------------------------------------------------------- */

const constantName = 'fahim';

console.log(constantName)

// re-assign value generate a type error
// constantName = 'newValue';

//nobody can change it later
const pi = 3.14;



/* 
Naming convention (variables, constants, arrays, objects, functions)
    - meaningful name
    - use snake_case camelCase
    - shouldn't start with numbers
    - shouldn't contains special characters (except _)
*/


//Error 'lastName is not defined'
// console.log(lastName)

/* ------------------------------- / ------------------------------ */


//Type of Value
    //- Integer
    //- Float
    //- String (text)
    //- Date
    //- Boolean

//define a numerical variable
let age = 37;
console.log(typeof age);         //number

//define a textual variable
let userName = 'ahmadalikhan';
console.log(typeof userName);   //string

//define a textual variable
let dateOfBirth = '10.09.1985';
console.log(typeof dateOfBirth) //string

//define a boolean variable
let isMarried = true;
console.log(typeof isMarried);   //boolean

//define array
let users = ['keturah', 'ernesto', 'weseley'];
console.log(typeof users);       //object

//define litteral object
let customer = {
    firstname: 'fahim',
    lastname: 'ahmadi',
    dob: '10.09.1985',

}

console.log(typeof customer);    //object



/* ---------------------------------------------------------------- */
/*                        logical expression                        */
/* ---------------------------------------------------------------- */

// == === != !== < > <= >= !    logical operators

console.log(2 === '2')

// + - / * %
let a = 5;
let b = 3;

let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

console.log(mod);

// a = a + 1;
a++;    //6
a--;    //5

// b = b + 5;
b += 5; //8
b -= 3; //5
b /= 2; //2.5
b *= 4; //10

console.log(b)


/* ----------------------- ternary operator ----------------------- */
// conditionalExpression ? Truthy statement: Falsy statement;

//check the age and print 'allowed' if age is equal or greater than 18 and print 'not allowed' if age is less than 18;
let userAge = 20;

userAge >= 18 ? console.log('allowed') : console.log('not allowed');

/* ------------------------------- / ------------------------------ */
//second example
//authenticate the user with the given data
let username = 'dejan';
let password = '12345';

//database data
let dbusername = 'fahim';
let dbpassword = '12345';


(username === dbusername) && (password === dbpassword)
    ? console.log('Welcome', username)
    : console.log('You are not authorized. Please register first.')



/* ------------------------ AND truth tabel ----------------------- */
 /*
 
    True && False = False
    False && True = False
    False && False = False
    True && True = True
 */

/* ------------------------ OR truth Table ------------------------ */
/* 

    True || False  = True
    False || True  = True
    True || True   = True
    False || False = False
*/