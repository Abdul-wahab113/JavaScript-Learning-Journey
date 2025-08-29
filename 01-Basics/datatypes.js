// "use strict"; //treat all JS code as newer version

// alert(1 + 7);  //we are using nodejs, not browser. alert statement works well in browser to show alert popup message but while using nodejs this will be used in some different way 


/*
                             Primitive Data Types (Call by value)


Primitive types are immutable (cannot be changed) and represent single values. There are seven primitive types in JavaScript:

1- Number:
Represents both integers and floating-point numbers (64-bit floating-point).
Includes special values: Infinity, -Infinity, and NaN (Not a Number).
Example: let num = 42;, let float = 3.14;, let notANum = NaN;
Related to your question: parseInt("101", 2) returns a Number (5), and parseInt("101", 1) returns NaN (a special Number value).


2- BigInt:
Represents integers with arbitrary precision (for numbers beyond the Number type’s safe integer limit of $2^{53} - 1$).
Created using the n suffix or BigInt() constructor.
Example: let bigNum = 12345678901234567890n;

3-String:
Represents sequences of characters (text), enclosed in single quotes ('), double quotes ("), or backticks (` for template literals).
Immutable; operations like concatenation create new strings.
Example: let str = "Hello";, let template = Value: ${num};
Related to your question: The "101" in parseInt("101", 1) is a String being parsed into a Number.

4- Boolean:
Represents true or false.
Used in logical operations and conditionals.
Example: let isValid = true;

5- Undefined:
Represents a variable that has been declared but not assigned a value.
Only value is undefined.
Example: let x; console.log(x); // undefined

6- Null:
Represents the intentional absence of any value.
Only value is null.
Example: let empty = null;

7- Symbol:
Represents unique, immutable identifiers, often used as object property keys.
Created with Symbol(); each Symbol is unique, even with the same description.
Example: let sym = Symbol("id");

let id = Symbol("123");
let anotherId = Symbol("123");

console.log(id===anotherId); //this will return false beacuse of the symbol datatype the data is same in both variables 



                             Non-Primitive (Reference) Data Type (Call by reference)
Non-primitive types are mutable and typically hold complex data. There’s one main category:

1- Object:
Represents a collection of key-value pairs (properties).
Includes subtypes like:

o- Plain Objects: let obj = { name: "Alice", age: 30 };
Key concept: values encapsulated with a pair of curly braces ({}) are termed as object.

o- Arrays: Ordered lists, e.g., let arr = [1, 2, 3];

o- Functions: Special objects that can be invoked, e.g., let func = function() { return "Hi"; };
datatype of function is known as object function and it depends on the datatype of the returning value of the function.

o- Special Objects: Like Date, RegExp, Map, Set, etc.

Objects are passed by reference (modifying a property affects all references to the object).
Example: obj.name = "Bob"; // Modifies the object
*/



// '+' operator between a string and other datatype like int the resulting value will be always datatype of 'String' 

x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"

console.table([typeof (x), typeof (y), typeof (z)]);


// operator other than '+'  between a string and other datatype like int the resulting value will be always datatype of 'number' 

l = "37" - 7; // 30
m = "37" * 7; // 259


console.table([typeof (l), typeof (m)]);


let num = 42;            // Number
let big = 123n;          // BigInt
let str = "Hello";       // String
let bool = true;         // Boolean
let undef;               // Undefined
let nul = null;          // Null
let sym = Symbol("id");  // Symbol
let obj = { key: "val" }; // Object
let arr = [1, 2, 3];     // Array (Object subtype)
let func = () => { };     // Function (Object subtype)

console.log(typeof num);  // "number"
console.log(parseInt("101", 2)); // 5 (String to Number, base-2)
console.log(parseInt("101", 1)); // NaN (invalid radix)


console.table([typeof (num), typeof (big), typeof (str), typeof (bool), typeof (undef), typeof (nul), typeof (sym), typeof (obj), typeof (arr), typeof (func)])



//      --------------------------------------------------------------------------------------------------------

//                                                         Stack and Heap Memory

//  Primitive Datatypes -->  Stack Memory  -->  by value --> the distinct copy of variable is created and the changes in the second copy
//  will not affect the first copy each copy of the variable is independent of each other

let course = "Data Structures";

let subject = course;

subject = "OOP";

console.log(course);
console.log(subject);




//  Non-Primitive Datatypes -->  Heap Memory  -->  by refernce  -->  no distinct copy of the existing variable is created instead the
//  reference or the memory address of the existing variable is passed to new variable
//  and any changes made into any of the varable in heap the result will shown in both.


let userOne = {
    name: "Abdul Wahab",
    age: 20,
    email: "abdulwahab911@gmail.com"
}


let userTwo = userOne;

userTwo.name = "Abdul Rehman";

console.log(userOne);
console.log(userTwo);
