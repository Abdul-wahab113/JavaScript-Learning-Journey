/*
. An array is a special object in JavaScript used to store ordered collections of values.

. Each value in the array is called an element.

. Each element has an index (position), starting from 0.
*/

let nameArray = ["Abdul Wahab", "Bilal", "Talha"];


//this .push() method will add element in the given array at most last position or index.
nameArray.push("Ali");
nameArray.push("Hassan");
nameArray.push("Umair");


// console.log(nameArray[0]);
// console.log(nameArray[1]);
// console.log(nameArray[2]);
// console.log(nameArray[3]);
// console.log(nameArray[4]);
// console.log(nameArray[5]);
// console.log(nameArray[6]);    // undefined output
// console.log(nameArray[-1]);   // undefined output

// The Alternative to this above method is :

for (let i = 0; i < nameArray.length; i++) {
    // console.log(nameArray[i]);
}





//  Declaration

// Type of array in js is object.

// METHOD #: 1

let numbersArray = [1, 2, 3, 4, 5];



// METHOD #: 2

let numbers = new Array(1, 2, 3, 4, 5, 6);

// console.log(typeof numbers);
for (let i = 0; i < numbers.length; i++) {
    // console.log(`Array element : ${numbers[i]} at index ${i}`); 
}

// console.log(numbers.length);



// Problem: new Array(4) creates an empty array of length 4, not an array with element 4.

let arr = new Array(4);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

console.log(arr.length); // 4


//               Array Characteristics

// In JS, you can even mix different data types in the same array.

let mixed = ["Hello", 42, true, { name: "Ali" }, [1, 2, 3]];
console.log(mixed);

// Arrays are mutable (can be changed even if declared with const).

const numbrs = [1, 2, 3];
numbrs.push(4);
console.log(numbrs); // [1,2,3,4]


let fruits = ["Apple", "Banana", "Mango"];

// Searching in Arrays
console.log(fruits.indexOf("Mango"));   // 2
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Grapes")); // false


// Add to end
// console.log(fruits);
fruits.push("Grapes"); // ["Apple", "Banana", "Mango", "Grapes"]
// console.log(fruits);


// Remove from end
// console.log(fruits);
fruits.pop(); // ["Apple", "Banana", "Mango"]
// console.log(fruits);

// Add to beginning
// console.log(fruits);
fruits.unshift("Pineapple"); // ["Pineapple", "Apple", "Banana", "Mango"]
// console.log(fruits);


// Remove from beginning
// console.log(fruits);
fruits.shift(); // ["Apple", "Banana", "Mango"]
// console.log(fruits);



//                               Array Methods

//       Join & toString
let sampleArr = ["Hello", "World"];
console.log(sampleArr.toString());  // Hello,World
console.log(sampleArr.join(" - ")); // Hello - World



//       Concat

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1,2,3,4]



//                   Slice (non-destructive, makes copy)
// Slice makes a new array and make changes in the new array not in the original array. 
// and it will not includes the last index provided example given Below:
let array = [10, 20, 30, 40];
console.log(array.slice(1, 3)); // [20,30]

//                   Splice (changes original array)
// splice makes changes in the original array. 
// and includes the last index of the array in the result.
array.splice(1, 2, "Hi", "Bye");
console.log(array); // [10, "Hi", "Bye", 40]

//                   Reverse

array.reverse();
console.log(array); // [ 40, 'Bye', 'Hi', 10 ]

//                   Sort
let nums = [40, 100, 1, 5];
nums.sort();
console.log(nums); // [1,100,40,5] (string sort)


// It takes two numbers at a time:
// if a - b < 0 → a is smaller → keep a before b
// if a - b > 0 → a is larger → put a after b
// if a - b === 0 → they are equal → order stays
nums.sort((a, b) => a - b);
console.log(nums); // [1,5,40,100] (numeric sort)

//                   Map (creates new array)

// Map makes a new array by transforming each item of the original array with a function.

let squares = nums.map(n => n * n);
console.log(squares); // [160, 10000, 1, 25]
console.log(nums);    // [40, 100, 1, 5]  (original unchanged)


//                  Find & FindIndex
console.log(nums.find(n => n > 8));     // 10
console.log(nums.findIndex(n => n > 8));// 2 for sorted array 


//                  Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6



//                  Destructuring Arrays
let aarr = ["Ali", 20];
let [name, age] = aarr;
console.log(name, age); // Ali 20


//                  Checking if Array
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false



//                  Spread & Rest with Arrays
// Spread (copy or merge)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1,2,3,4,5]


