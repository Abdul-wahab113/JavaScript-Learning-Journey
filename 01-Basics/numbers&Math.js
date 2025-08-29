const score = 400
// console.log(score);

// this type of decleration of variable sets a fixed datatype of variable 
const balance = new Number(100)
console.log(balance);



// toString() converts the number type of variable into a string then every function of the string will be applicable to it.
console.log(balance.toString().length);

// toFixed() Returns a string representing a number in fixed-point notation.
console.log(balance.toFixed(1));


const otherNumber = 123.8966
// toPrecision() Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.4
console.log(otherNumber.toPrecision(4));


// Converts a number to a string by using the current or specified locale.
const hundreds = 1000000
console.log(hundreds.toLocaleString());

// +++++++++++++ Maths +++++++++++++++++++++++++++++
// .abs() Returns the absolute value of a number (the value without regard to whether it is positive or negative).
//  For example, the absolute value of -5 is the same as the absolute value of 5. 
console.log(Math.abs(-4));

// .round() Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.round(4.6));

// .ceil() returns the higher/upper value of the real part of the decimal number 
// For example, the ceil value of 3.3 is 4 
console.log(Math.ceil(4.2));

// .floor() Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.floor(4.9));

// .min() Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(4, 3, 6, 8));

// .max() Returns the larger of a set of supplied numeric expressions.
console.log(Math.max(4, 3, 6, 8));


// .random() Returns a pseudorandom number between 0 and 1.
console.log(Math.random());

// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
// this is the custom expression to generate random absolute numbers between given range 
// (max - min + 1) this part specify the range of the random  in this expression (+1 ) part makes it absoluet numbers
console.log(Math.floor(Math.random() * (max - min + 1)) + min)