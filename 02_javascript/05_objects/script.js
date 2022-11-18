//!OBJECTS
//  - Data structures that store multiple piece of data into one container
//  - Objects are not primitive
//  - Objects are defined by keys and values    {key: value}
//  - It can be used to describe something with many properties
//  - It can contains methods as well

//!GENERAL SYNTAX TO DEFINE OBJECT
// let object = { key: value, key2: value2 }

// example
const product = {
    id: 1,
    name: 'Macbook Pro',
    model: '2022',
    price: 2000,
    cpu: {
        speed: '2.5 GHz',
        cores: 'dual core',
        type: 'Intel'
    },
    memory: '16Gb',
    SSD: '1T',
    accessories: ['external keyboard', 'external mouse', 'stand', 'paper clip'],


    getPrice: function () {
        return this.price
    },

    setPrice: function (newPrice) {
        this.price = newPrice;
        return this;
    }

}


/* ------------------------------- . ------------------------------ */
//!How to access properties of an object?
    //1. dot notation approach
        // console.log('product Name:', product.name)
        // console.log('speed', product.cpu.speed);

    //2. bracket notation
        // console.log('product ID:', product['id'])
        // console.log('product speed:', product['cpu']['speed'])
    

// console.log(product.getPrice());
// console.log(product.setPrice(1500));
// console.log(product)


/* ------------------------------- . ------------------------------ */
//CLONING OF PRIMITIVE DATA
let name = 'fahim';
let age = 37;
let copy_of_age = age;

/* ------------------------------- . ------------------------------ */
//CLONING OF NON-PRIMITIVE DATA
let user = {
    username: 'Mary',
    pass: '123'
}

/* -------------------- CLONING BY REFERENCE -------------------- */
// let copy_of_user = user;

/* ----------------------- CLONING BY VALUE ----------------------- */
let copy_of_user = {};
Object.assign(copy_of_user, user);

user.pass = 'mary123!';

// console.log('user',user);            //*{username: 'Mary', pass: 'mary1123!'}
// console.log('copyuser', copy_of_user)    //*{username: 'Mary', pass: '123'}



/* ------------------------------- . ------------------------------ */
let customer = {
    name: { first: 'fahim', last: 'ahmadi' },
    age: 38,
    email: 'fahim@gmail.com'
}

//!DEEP CLONING
let cloned_customer = structuredClone(customer);     //! for nodejs >= 18

customer.age = 40;
customer.name.last = 'AHMADI';

console.log('CUSTOMER:', customer)
console.log('CLONED_CUSTOMER:', cloned_customer);
console.log('----------');



/* ------------------------------- . ------------------------------ */
//! How to add a new property to an object?
//add email property to the user object
user.email = 'mary@gmail.com';
user['dob'] = '2000-01-01';
console.log('user', user);

/* ------------------------------- . ------------------------------ */
//!How delete a property from an object?
delete user.dob;
delete user['email'];
console.log('user', user);