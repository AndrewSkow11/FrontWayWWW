// the <<== operator 

// the left shift assignement operator left shifts a variable

let x = -100;
x <<= 1;
console.log(x); // - 200
x <<= 1;
console.log(x); // -400

x = 100;
x >>= 1;
console.log(x); // 50 
x >>= 1;
console.log(x); // 25

let y;
y ??= 5;
console.log(y);