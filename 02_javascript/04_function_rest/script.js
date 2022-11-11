/**
 * Functions, DefaultValues, Return, NestedFunctions, Rest
 */

function sum(par1=0, par2=0) {
    //body
    let result = par1 + par2;

    //output
    return result;
}

// sum()       //0
// let total = sum(3, 5)   //total = 8

// console.log('total', total)


// function avg(par1, par2, numberOfOperands) {
//     return sum(par1, par2) / numberOfOperands
    
// }

// console.log('avg', avg(3, 5, 2));

/**
 * Function inside another function
 *  1. pass a function as argument to another function
 *  2. define and call a function in the body of another function
 *  3. return function from another function
 */



                        //pass a function cb (callback) as parameter to another function
function total(par1, par2, cb) {
    let result = par1 + par2;

    //define a function inside a parent function
    let avg = function(sum) {
        return sum / 2;
    }

    console.log(avg(result))
    cb(result);

    //return a function from another function
    return avg
}

// total(3, 5, (result) => { console.log('result', result) })
// console.log(total(4, 4, (result)=>{console.log('result', result)}));



/* ------------------------------- . ------------------------------ */

//REST

function calcAverage(message, ...params) {

    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];      
    }
    console.log(`${message}`,sum / params.length);
    return sum/params.length
}

calcAverage('Average:',2, 5);       //Average: 3.5
calcAverage('Result:',2, 5, 6, 5);  //Result: 4.5
calcAverage();
calcAverage(2, 5, 1, 2, 5, 6, 1);   // [2, 5, 1, 2, 5, 6, 1]; 


/* ------------------------------- . ------------------------------ */
//Write a function that accept any number of arguments and return the maximum

function findMax(...numbers) {
    //numbers = [3,5,2,0,8,5]


    //set initial value to max
    let max = Number.MIN_SAFE_INTEGER;
    //search for a number bigger than max to overwrite max
    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i] > max) {
            max = numbers[i]
        }
        
    }

    console.log(`max ${numbers} is`, max)
    return max;
    
}


findMax(3, 5, 2, 0, 8, 5)     //8
findMax(-10, 200, 50, 190)    //200
findMax(-2, -1, -5, -3)       //-1
