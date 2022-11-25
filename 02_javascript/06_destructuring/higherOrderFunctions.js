/** Higher Order Function
 *      - When a function accept another function as parameter or return another function is called Higher Order function
 */

let numbers = [10, 15, 3, 5, 2];

//1. forEach
numbers.forEach((num, index, array) => {
  console.log(`${index}. ${num} * 2 = ${num * 2}`); // 0. 10*2 = 20
});

//-----------------

//2. map
const numberAfterDiv = numbers.map((elem, index, array) => {
  return elem / 10;
});

console.log("NumbersAfterDiv", numberAfterDiv);



// function myFunc(array) {
//   const evenNums = array.map((elem) => {
//     if (elem % 2 === 0) {
//       return elem;
//     }
//   });

//     return evenNums;
// }

// console.log(myFunc(numbers));


//3. reduce
const total = numbers.reduce((acc, elem) => { return acc + elem }, 0);
console.log('total:', total)



//4. filter
const numbersBiggerThan5 = numbers.filter((elem, index, array) => { return elem >=5 });
console.log('nums>=5:', numbersBiggerThan5);


//5. sort
let names = ['Keturah', 'Mercy', 'Wesely', 'Mary'];

names.sort((a, b) => { return b.localeCompare(a) });
console.log(names)