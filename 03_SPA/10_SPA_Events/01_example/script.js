
function welcome() {
    console.log('Welcome to my website.')
}


let btn = document.createElement('button');
btn.innerText="Button"
document.body.append(btn);

//add event listener
btn.addEventListener('click', welcome);


//remove event listener
// btn.removeEventListener('click', welcome);


//event propagation
let outer = document.getElementById('outer');
let inner = document.getElementById('inner');
let button = document.getElementById('btn');

function printName (e) {
    console.log(e.currentTarget.tagName);
    // console.log(e.target.tagName);
}
//capturing
// console.log('capturing phase')
// outer.addEventListener('click', printName, true);
// inner.addEventListener('click', printName, true);
// button.addEventListener('click', printName, true);
// console.log('bubbling phase')
// outer.addEventListener('click', printName, );
// inner.addEventListener('click', printName,);
// button.addEventListener('click', printName,);


// //form example
// let firstName = document.getElementById('firstName');
// let lastName = document.getElementById('lastName');
// let email = document.getElementById('email');
// let password = document.getElementById('password');
// let confirm = document.getElementById('confirm');

// firstName.addEventListener('change', ()=>{console.log(firstName.value)})
// lastName.addEventListener('change', ()=>{console.log(lastName.value)})
// email.addEventListener('change', ()=>{console.log(email.value)})
// password.addEventListener('change', ()=>{console.log(password.value)})
// confirm.addEventListener('change', () => { console.log(confirm.value) })

//alternative solution
let form = document.getElementById('signup');
form.addEventListener('change', (e) => { console.log(e.target.value); });


