/*
These are the basic comparison operators and comparing values of same datatypes and returing the resulting value in boolean (T/F).
*/
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


/*
These are the comparison operators and comparing values of of different datatypes and returing the resulting value in boolean (T/F).
in this scenario the javascript first convert the string into the number and then compare values.
*/

console.log("22" == 22);
console.log("02" > 1);



/*
The reason is that an equality check (==) and comparison check (<, >, <=, >=) work differently.
Comparisons converts null to a number, treating it as 0.That's why:
1- null>=0 is true and 
2- null>0 is false

and sometime comparison operator converts the null into 0 and sometimes into the NAN(not a number) so output may be unpredictable.
*/

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


/*
(===) this operator performs the strict comparison in a way that 
It checks the value along with also checks the datatypes of the operands if both value and datatypes of both values are same then return the true 
otherwise it returns flase
*/

console.log("2" === 2);