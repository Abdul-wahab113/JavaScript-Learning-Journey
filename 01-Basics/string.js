// String Concatination : It is a process of combining two or more strings in a single string 
// For Example : let str = "Abdul " + "Wahab";

// very common method to perform string concatination is use a '+' operator between string to be concatinated 

// Modern way to perform string concatination is "String interpolation".
// String interpolation with template literals significantly enhances code readability and simplifies the creation of dynamic strings in JavaScript.
// In JavaScript is primarily achieved through template literals, also known as template strings

//                                           Key features of string interpolation with template literals:

// 1- Backticks (`` ` ``): Template literals are defined using backticks instead of single or double quotes.
// For Example:

const name = "Abdul Wahab";
const age = 20;
const greeting = `Hello, ${name}! You are ${age} years old`;

console.log(greeting);


// 2- Embedded Expressions (${expression}): To embed a variable or any valid JavaScript expression within a template literal,
// use the syntax ${expression}. The expression inside the curly braces will be evaluated, and its result will be inserted into the string.

// For Example:
const x = 5;
const y = 10;
const sum = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.


// 3- Multi-line Strings: Template literals inherently support multi-line strings without the need for escape characters like \n. 


const multiLineString = `This is a string
    that spans multiple
    lines.`;

console.log("-----------------------------");

console.log(multiLineString);

console.log(multiLineString.length);
console.log(multiLineString[2]);

// toUpperCase() this method does not change our original string because string is a primitive datatype and primitive datatypes are stored in 
// stack memory and in stack memory the changes in one variable doesnot affects the original one as changes are made in the copy of the original
// not in the original.

console.log(multiLineString.toUpperCase());
console.log(multiLineString.charAt(8));
console.log(multiLineString.indexOf('a'));


//substring(0(Start Point(),13(End Point));
let newString = multiLineString.substring(0, 13);

console.log(newString);


// .trim() eliminates the whitespaces from the right and left of the occupied string 
//  there are other two methods of the trim() these are trimStart() and trimEnd()

let userName = "    Abdul      ";

console.log(userName);

console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());



const url = "https://www.google.com/github%45pagepk";

console.log(url.replace('%45page', '.'));


// this method tells us about the given set of character are present in string or not 
console.log(url.includes('https://'));


const personName = "Abdul-Wahab-Ahmad";


let arr = personName.split('-');
console.log(arr);
