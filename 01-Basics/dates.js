// Dates

let myDate = new Date()

// type of Date is an object 
console.log(typeof myDate);



// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


// Different methods to declare date in javascript.
// let myCreatedDate = new Date(2023, 0, 23); year in java script are indexed from 0.   
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // this method return the current timestamp in miliseconds.

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); // this method converts miliseconds into seconds of time and Math.floor() converts 
// the decimal seconds numbers into absolute seonds 

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`);



// this allow us to customize the localeString more openly
// newDate.toLocaleString('default', {
//     weekday: "long",
// })