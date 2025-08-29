/* var

Scope: Function-scoped or globally scoped. If declared inside a function, it’s local to that function; otherwise, it’s global.
Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined, allowing them to be accessed before declaration (though with undefined value).
Re-declaration: You can re-declare a variable with var in the same scope without errors.

*/


var x = 10;
console.log(x); // 10
var x = 20; // Re-declaration allowed
console.log(x); // 20
console.log(y); // undefined (hoisted)
var y = 5;




/*    Global Object Issues

In browsers, var declarations in the global scope attach to the window object, which can cause conflicts.
--example--
var global = "I'm on window";
console.log(window.global); // I'm on window
---                        ---

let and const do not attach to window, making them safer for global variables.

*/





/* let 

Scope: Block-scoped (limited to the block {} where it’s defined, e.g., inside loops or conditionals).
Hoisting: Hoisted but not initialized, leading to a "Temporal Dead Zone" (TDZ) where accessing the variable before declaration throws a ReferenceError.
Re-declaration: Cannot re-declare a let variable in the same scope.

*/


let a = 15;
if (true) {
  let a = 25; // Different variable, block-scoped
  console.log(a); // 25
}
console.log(a); // 15
// let a = 30; // Error: Identifier 'a' has already been declared



/*const

Scope: Block-scoped, like let.
Hoisting: Hoisted but not initialized (also subject to TDZ).
Reassignment: Cannot be reassigned after declaration, but objects/arrays declared with const can have their contents modified (they are not immutable).
Declaration Requirement: Must be initialized at declaration.

*/

const b = 100;
// b = 200; // Error: Assignment to constant variable
const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed: modifying object property
console.log(obj.name); // Bob
// const c; // Error: Missing initializer in const declaration



console.log("-----------------------------------------------------------");


let name = "Abdul Wahab"
var age = 20
const ocupation = "Software Engineer"

let accountType;
// console.log(accountType); // undefined

console.table([name, age, ocupation, accountType]);


let isActive = true;
console.log(isActive);

let isInActive = false;
console.log(isInActive);





/*       KEY TAKEAWAY

1- Declaration Keywords:

var: Function-scoped, hoisted with undefined, allows re-declaration.
let: Block-scoped, hoisted but not initialized (Temporal Dead Zone), no re-declaration.
const: Block-scoped, must be initialized, cannot be reassigned (but object properties can be modified).


2- Scope:

Global: Accessible everywhere, avoid attaching to window with var.
Function: var limits variables to functions.
Block: let and const limit variables to {} blocks.


3- Hoisting:

var is hoisted and initialized as undefined.
let and const are hoisted but not initialized, causing TDZ errors if accessed early.


4- Naming Rules:

Start with letters, _, or $; no reserved words; case-sensitive; use camelCase.


5- Data Types:

Variables hold any type (dynamic typing): primitives (Number, String, Boolean, etc.) or non-primitives (Object, Array, Function).


6- Best Practices:

Prefer const for constants, let for variables that change.
Avoid var to prevent scoping/hoisting issues.
Initialize variables and use descriptive names.


7- Common Pitfalls:

Avoid accidental globals (e.g., omitting let/const).
Be cautious of TDZ with let/const.
Don’t rely on var re-declaration, as it can cause bugs.


*/


