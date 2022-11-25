/** DESTRUCTURING */

//example 1.
let student = { fullname: 'Fahim Ahmadi', dob: '10.09.1985', language: 'persian', parent: {dad: 'John', mom: 'Jane'} }
//destructure student object
const { fullname, parent:{dad, mom} } = student;
console.log(fullname, dad, mom)


//exampl 2.
let object = {
    parentProp: {
        childProp: {
            grandChild: 'whatever'
        }
    }
}
// object.parentProp.childProp.grandChild

//destructure object and extract grandChild
const {parentProp:{childProp:{grandChild}} } = object;
console.log(grandChild);



/** DESTRUCTURING OF ARRAYS */
const strings = ['first', 'second', 'third']
// string[0]

//DESTRUCTURE ARRAY
const [firstElem, secondElem] = strings;
console.log(firstElem);


//example2
const user = ['Fahim', 'fahimahmadi', ['fahim@gmail.com', '123!']];

const [firstName, userName, [email, password]] = user;

console.log(firstName, email)