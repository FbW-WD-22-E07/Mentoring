//typeof return the type of values
let result;
result = typeof 'hi';               //string
result = typeof 0;                  //number
result = typeof true;               //boolean
result = typeof [1, 2, 3];          //object
result = typeof { name: 'fahim' };  //object
result = typeof null;               //object
result = typeof undefined;          //undefined
result = typeof Infinity;           //number
result = typeof NaN;                //number


//division
result = 10 / 2;                    //5
result = 10 / 0;                    //Infinity
result = null / 0;                  //NaN
result = null / 2;                  //0
result = 'hi' / 2;                  //NaN
result = '10' / 2;                  //5     div mult sub
result = undefined / 2;             //NaN
result = false / 2;                 // 0/2 =0   here false is equal to zero
result = Infinity / 2;              //Infinity
result = Infinity / Infinity;       //NaN
result = null / Infinity;           //0
result = '' / 2;                    //0

// result = typeof ('10' + 2);         //102   it's string
// result = 'Welcome' + ' Ernesto'; //Welcome Ernesto

// console.log('result:', result )




/* ------------------------- Falsy Valuse ------------------------- */
//Falsy Values:     false 0 -0 undefined NaN '' null
//Truthy Values:    Anything other than falsy values is truthy

//first example
// if (false) {
//     //truthy block
//     result = true;
// } else {
//     //falsy block
//     result = false;
// }

//second example
// let user = 'fahim';
// if (user) {
//     console.log('Welcome' , user);
// } else {
//     console.log('Welcome guest user!');
// }




//third example
let x;
if ((x = ('10'/2)+3) > 5) {
    //truthy block
    console.log(x, 'bigger than 5')
} else {
    //falsy block
    console.log(x, 'smaller than 5')
}


//check if w is a number
let w = 10;
// console.log(isNaN(w));
if (!isNaN(w)) {        // !true == false
    console.log(w, 'is a number');
} else {
    console.log(w, 'is not a number');
}



/* --------------------- AND Logical operator --------------------- */
/**
 * Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; 
 * if all values are truthy, the value of the last operand is returned.
 */

//login user
/**
 * if username is match with the given username
 * AND
 * if the password is match with the given password
 */

let username = 'atdhetar';
let givenUsername = 'atdhetar';

let password = '123';
let givenPassword = 'password';



//alternative (better practice)
// if (username === givenUsername && password === givenPassword) {
//     //truthy block
//     console.log('You are logged in');
// } else {
//     //falsy block
//     console.log('Username/password is not matched')
// }




/* ---------------------- OR Logical Operator --------------------- */

result = 4 > 2 || 1 > 5;
result = "" || null || 4 == 2 || 5 || 'hi';


//if the power has a value calculate the number^power otherwise number^2
let number = 5;
let power;      //the value of power undefined
// result = number ** (power || 2);   //5^6

console.log("result of expression:", result);


// comparing objects
console.log([1, 2, 3] === [1, 2, 3])

console.log([] === []);
console.log({ name: 'fahim' } === { name: 'fahim' });

console.log(!!!true)

console.log(!([] === []))