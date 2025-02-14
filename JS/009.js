// variable declarate inside a {} blocl cannot be accessed for outside the block

{
    let x = 2;
    console.log(x); // ok

    //let x = 1;//error

    var new_variable = 2;
    var new_variable = 3;
}

console.log(new_variable); 

//console.log(x); // error