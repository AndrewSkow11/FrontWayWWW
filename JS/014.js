// JS Data Types 

/*
1 String
2 Number
3 Bigint
4 Boolean
5 Undefined
6 Null 
7 Symbol
7 Object
*/


// Numbers
let lentgth  = 16; 
let weight = 7.5;

console.log(lentgth, typeof(lentgth));
console.log(weight, typeof(weight));

// Strings
let color = "yellow";
console.log(color, typeof(color));

//boolean 
let x = true;
let y = false;
console.log(x, typeof(x));
console.log(y, typeof(y));

//object 
const person = {
    firstName: "John",
    lastName: "Doe"
}; 

console.table(person);
console.log(typeof(person));

// array object 
const cars = ["Saab", "Volvo", "BMW"]; 
console.table(cars);
console.log(typeof(cars)); // object 


// data object 
const date = new Date("2022-03-25");
console.log(date);
console.log(typeof(date));

//exponential Notation

x = 123e5; //12300000
y = 123e-5; //0.00123
console.log("x=", x);
console.log("y=", y);

x = BigInt("123456789012345678901234567890");
console.log("BigInt: ", x);

console.log(typeof(caaar));