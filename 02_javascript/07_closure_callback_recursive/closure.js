/* ------------------------ VARIABLE SCOPE ------------------------ */
// let name = 'Fahim'  //global

// {
//     let name = 'Daniel'; //local
//     console.log('6.Name', name)
// }


// {
//     console.log('11.Name', name);
// }

/* ---------------------------- CLOSURE --------------------------- */

/* function outer () {
    let counter = 0;//local

    return function inner () {
        console.log('counter:', ++counter);
    }
}


let result = outer();
result()
result()
result()
result() */

/* ----------------------- closure use case ----------------------- */

function calc() {
    let counter = 0; //local


    return {
        increment: function () {
            return ++counter
        },
        decrement: function () { return --counter },
        reset: function () { return counter = 0 },
        set: function (value) { return counter = value }
    }
}

let c = calc(); // c is an object {increment: fn, decrement: fn}
console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.decrement());
console.log(c.increment());
console.log(c.increment());
console.log(c.reset());