const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];


// marvelHeros.push(dcHeros);


// this will add one array into an existing array as single element of it.
// console.log(marvelHeros);   //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

const allHeros = marvelHeros.concat(dcHeros);
// this .concat() mergers given arrays elements into a single array 
// and return that single array as result


console.log(allHeros);  //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


// Spreading an array element and merge into new array.
// (...) spread operator separates all given arrays elements
const allNewHeros = [...marvelHeros, ...dcHeros]

console.log(allNewHeros);

// one array contains multiple arrays and making a complex structue.
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

// to avoid the complexity we can use .flat() 
// this method of array make a new single array that contains all elements of arrays in that array
// in .flat() the parameter will be the depth of the recurssive array to make it single array


const newAnotherArray = anotherArray.flat(Infinity);

console.log(newAnotherArray);
/* [
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
   ] */


console.log(Array.isArray("Abdul"));  // this validates the array 
console.log(Array.from("Wahab"));  // this will make a new array of the given values
console.log(Array.from({ name: "Abdul Wahab" }));  // in this case the new array will be an empty array 
// bcz we have to specificaly tell either we want to make array of keys or values of the object.

// solution 

const obj = { name: "Abdul Wahab" };
console.log(Object.keys(obj));   // ["name"]
console.log(Object.values(obj)); // ["Abdul Wahab"]
console.log(Object.entries(obj)); // [["name", "Abdul Wahab"]]


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]
